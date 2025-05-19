
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				museum: {
					dark: '#1A1F2C',
					black: '#221F26',
					accent: '#9b87f5',
					text: '#F1F0FB',
					glitchRed: '#ff0000',
					glitchGreen: '#00ff00',
					glitchBlue: '#0000ff'
				}
			},
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				mono: ['Courier New', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'glitch-horizontal': {
					'0%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(2px)' },
					'50%': { transform: 'translateX(-2px)' },
					'75%': { transform: 'translateX(1px)' },
					'100%': { transform: 'translateX(0)' },
				},
				'glitch-vertical': {
					'0%': { transform: 'translateY(0)' },
					'25%': { transform: 'translateY(2px)' },
					'50%': { transform: 'translateY(-2px)' },
					'75%': { transform: 'translateY(1px)' },
					'100%': { transform: 'translateY(0)' },
				},
				'text-shift': {
					'0%': { transform: 'skewX(0deg)' },
					'20%': { transform: 'skewX(2deg)' },
					'40%': { transform: 'skewX(-2deg)' },
					'60%': { transform: 'skewX(1deg)' },
					'80%': { transform: 'skewX(-1deg)' },
					'100%': { transform: 'skewX(0deg)' },
				},
				'flicker': {
					'0%': { opacity: '1' },
					'2%': { opacity: '0.8' },
					'4%': { opacity: '1' },
					'8%': { opacity: '0.4' },
					'9%': { opacity: '1' },
					'50%': { opacity: '1' },
					'70%': { opacity: '0.7' },
					'72%': { opacity: '1' },
					'100%': { opacity: '1' },
				},
				'rgb-shift': {
					'0%': { textShadow: '1px 0 0 #ff0000, -1px 0 0 #00ff00' },
					'33%': { textShadow: '1px 0 0 #00ff00, -1px 0 0 #0000ff' },
					'66%': { textShadow: '1px 0 0 #0000ff, -1px 0 0 #ff0000' },
					'100%': { textShadow: '1px 0 0 #ff0000, -1px 0 0 #00ff00' },
				},
				'scan-line': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100vh)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch-h': 'glitch-horizontal 0.3s ease-in-out infinite',
				'glitch-v': 'glitch-vertical 0.3s ease-in-out infinite',
				'text-shift': 'text-shift 5s ease-in-out infinite',
				'flicker': 'flicker 8s linear infinite',
				'rgb-shift': 'rgb-shift 5s linear infinite',
				'scan-line': 'scan-line 6s linear infinite',
			},
			backgroundImage: {
				'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
