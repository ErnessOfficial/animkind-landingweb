/**
 * BrandIcon — Unified icon system using Phosphor Icons (Duotone style).
 *
 * Usage:
 *   <BrandIcon name="ShieldCheck" color="green" size={32} />
 *   <IconBadge name="Brain" color="navy" size="lg" />
 *
 * Brand colours:
 *   green  → #0dc383   navy  → #1d4c73   gold  → #eec843
 *   dark   → #1e2c29   white → #ffffff   red   → #e85d5d
 */

import React from 'react';
import {
    ShieldCheck,
    Brain,
    Heart,
    UsersThree,
    House,
    Tree,
    Buildings,
    Target,
    Globe,
    GearSix,
    Scales,
    Lock,
    Handshake,
    ArrowRight,
    ArrowCircleRight,
    CheckCircle,
    Warning,
    Info,
    MagnifyingGlass,
    Bell,
    ChartBar,
    ChartDonut,
    ChartLine,
    Sparkle,
    Star,
    Leaf,
    Lightning,
    Robot,
    Laptop,
    DeviceMobile,
    Shield,
    Eye,
    EyeSlash,
    Flag,
    MapPin,
    Certificate,
    GraduationCap,
    BookOpen,
    Article,
    Toolbox,
    Envelope,
    Phone,
    Calendar,
    Clock,
    Download,
    FilePdf,
    PresentationChart,
    Heartbeat,
    Smiley,
    Faders,
    Network,
    Lifebuoy,
    UserCircle,
    Megaphone,
    Confetti,
    TrendUp,
    type Icon as PhosphorIcon,
} from '@phosphor-icons/react';

/* ─── Colour tokens ─────────────────────────────────────────────── */
export const BRAND = {
    green: '#0dc383',
    navy: '#1d4c73',
    gold: '#eec843',
    dark: '#1e2c29',
    white: '#ffffff',
    red: '#e85d5d',
    lightBg: '#f4f7fb',
} as const;

export type BrandColor = keyof typeof BRAND;

/* ─── Icon registry ─────────────────────────────────────────────── */
export const ICON_MAP: Record<string, PhosphorIcon> = {
    ShieldCheck,
    Brain,
    Heart,
    UsersThree,
    House,
    Tree,
    Buildings,
    Target,
    Globe,
    GearSix,
    Scales,
    Lock,
    HandshakeSimple: Handshake,
    ArrowRight,
    ArrowCircleRight,
    CheckCircle,
    Warning,
    Info,
    MagnifyingGlass,
    Bell,
    ChartBar,
    ChartDonut,
    ChartLine,
    Sparkle,
    Star,
    Leaf,
    Lightning,
    Robot,
    Laptop,
    DeviceMobile,
    Shield,
    Eye,
    EyeSlash,
    Flag,
    MapPin,
    Certificate,
    Graduation: GraduationCap,
    BookOpen,
    Article,
    Toolbox,
    Envelope,
    Phone,
    Calendar,
    Clock,
    Download,
    FilePdf,
    PresentationChart,
    Heartbeat,
    Smiley,
    Faders,
    Network,
    Lifebuoy,
    UserCircle,
    Megaphone,
    Confetti,
    TrendUp,
};

export type IconName = keyof typeof ICON_MAP;

/* ─── BrandIcon — bare icon with brand colour ───────────────────── */
interface BrandIconProps {
    name: IconName;
    color?: BrandColor | string;
    size?: number;
    weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
    className?: string;
}

export const BrandIcon: React.FC<BrandIconProps> = ({
    name,
    color = 'green',
    size = 24,
    weight = 'duotone',
    className = '',
}) => {
    const IconComponent = ICON_MAP[name];
    if (!IconComponent) return null;
    const resolvedColor = BRAND[color as BrandColor] ?? color;
    return (
        <IconComponent
            size={size}
            weight={weight}
            color={resolvedColor}
            className={className}
        />
    );
};

/* ─── Size presets ──────────────────────────────────────────────── */
const SIZE_MAP = {
    xs: { icon: 16, box: 'w-8 h-8 rounded-lg' },
    sm: { icon: 20, box: 'w-10 h-10 rounded-xl' },
    md: { icon: 24, box: 'w-12 h-12 rounded-2xl' },
    lg: { icon: 32, box: 'w-16 h-16 rounded-2xl' },
    xl: { icon: 40, box: 'w-20 h-20 rounded-3xl' },
};

type BadgeSize = keyof typeof SIZE_MAP;

/* ─── IconBadge — icon inside a coloured pill/circle ───────────── */
interface IconBadgeProps {
    name: IconName;
    color?: BrandColor;
    size?: BadgeSize;
    bg?: string;    // override background (css colour)
    weight?: BrandIconProps['weight'];
    className?: string;
}

export const IconBadge: React.FC<IconBadgeProps> = ({
    name,
    color = 'green',
    size = 'md',
    bg,
    weight = 'duotone',
    className = '',
}) => {
    const { icon, box } = SIZE_MAP[size];
    const baseColor = BRAND[color];
    const background = bg ?? `${baseColor}1a`; // 10% opacity tint

    return (
        <div
            className={`flex items-center justify-center flex-shrink-0 ${box} ${className}`}
            style={{ background, border: `1.5px solid ${baseColor}33` }}
        >
            <BrandIcon name={name} color={color} size={icon} weight={weight} />
        </div>
    );
};

export default BrandIcon;
