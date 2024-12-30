//? Dependencies

import { resolveColor } from 'discord.js'


//? Type

export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'grey' | 'random'


//? Colors

export default {
    primary: resolveColor('#007bff'),    // Blue
    secondary: resolveColor('#ff6f32'),  // Orange
    success: resolveColor('#28a745'),    // Green
    danger: resolveColor('#dc3545'),     // Red
    warning: resolveColor('#ffc107'),    // Yellow
    info: resolveColor('#17a2b8'),       // Cyan

    light: resolveColor('#f8f9fa'),      // White
    dark: resolveColor('#343a40'),       // Black
    grey: resolveColor('#6c757d'),       // Grey
    random: () => resolveColor(`#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`)
}