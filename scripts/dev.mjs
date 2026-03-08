import { spawn } from 'node:child_process';

const children = [];
let shuttingDown = false;

const spawnCommand = (command, args) => {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: true,
  });
  children.push(child);
  return child;
};

const stopAll = () => {
  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGTERM');
    }
  }
};

const api = spawnCommand('npm', ['run', 'dev:api']);
const web = spawnCommand('npm', ['run', 'dev:web']);

api.on('exit', (code) => {
  if (shuttingDown) return;
  if (code === 0) return;

  // Keep Vite running even if API crashes (e.g. port 8787 already in use).
  console.error(
    '\n[dev] API process stopped with errors. Frontend stays running on Vite.\n' +
    '[dev] Chat/API routes may fail until API is available.\n'
  );
});

api.on('error', (error) => {
  if (shuttingDown) return;
  console.error(
    `\n[dev] Failed to start API process: ${error.message}\n` +
    '[dev] Frontend stays running on Vite.\n'
  );
});

web.on('exit', (code) => {
  if (shuttingDown) return;
  stopAll();

  if (code !== 0) {
    process.exit(code ?? 1);
  }
  process.exit(0);
});

process.on('SIGINT', () => {
  stopAll();
  process.exit(0);
});

process.on('SIGTERM', () => {
  stopAll();
  process.exit(0);
});
