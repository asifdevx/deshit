import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/Layout/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			text: {
  				primary: '#FFFFFF',
  				secondary: '#9CA3AF',
  				muted: '#6B7280'
  			},
  			blueGradientStart: '#3B82F6',
  			blueGradientEnd: '#2563EB',
  			purple: '#7e5bef',
  			orange: '#ff7849',
  			yellow: '#ffc82c',
  			'gray-dark': '#273444',
  			blue: {
  				'50': '#eff6ff',
  				'100': '#dbeafe',
  				'200': '#bfdbfe',
  				'300': '#93c5fd',
  				'400': '#60a5fa',
  				'500': '#3b82f6',
  				'600': '#2563eb',
  				'700': '#1d4ed8',
  				'800': '#1e40af',
  				'900': '#1e3a8a'
  			},
  			gray: {
  				'50': '#fafafa',
  				'100': '#f4f4f5',
  				'200': '#e4e4e7',
  				'300': '#d4d4d8',
  				'400': '#a1a1aa',
  				'500': '#71717a',
  				'600': '#52525b',
  				'700': '#3f3f46',
  				'800': '#27272a',
  				'900': '#18181b',
  				'950': '#0a0a0b'
  			},
  			darkbg: '#090F15',
  			darkext: '#667D94',
  			loadbg: '#9d9d9d',
  			darkbox: '#0C1621',
  			black: '#000000',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			sidebarBg: '#0a1625',
  			sidebarText: '#cfd8e1',
  			sidebarActive: '#1f4b6f',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			small: '500px',
  			lg: '1000px',
  			'2xl': '1400px'
  		},
  		blur: {
  			'3': '30px'
  		},
  		boxShadow: {
  			header: '0 0px 5px rgba(0,0,0,.2)',
  			modal: '0 10px 25px rgba(0,0,0,0.4)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			widthIncrease: 'widthIncrease 0.3s ease-in-out',
  			'spin-slow': 'spin 1.5s linear infinite',
  			fadeIn: 'fadeIn 0.4s ease-in-out',
			"trail": "trail var(--duration) linear infinite",
  		},
  		keyframes: {
			"trail": {
				"0%": { "--angle": "0deg" },
				"100%": { "--angle": "360deg" },
			  },
  			widthIncrease: {
  				'0%': {
  					left: '0',
  					right: '100%'
  				},
  				'100%': {
  					left: '0',
  					right: '0'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(5px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		aspectRatio: {
  			'4/2': '4 / 2'
  		},
  		backgroundImage: {
  			btnBg: 'conic-gradient(from 180deg at -50% 50%, #B94A5B 0deg, #6A4FFF 129.81deg, #6A4FFF 162.69deg, #B94A5B 360deg) ',
  			profile_backCir_bg: 'linear-gradient(180deg, #B94A5B 0%, #6A4FFF 33.33%, #6A4FFF 66.67%)',
  			cardBg: 'linear-gradient(180deg, #B94A5B 0%, #6A4FFF 66.67%, #6A4FFF 81.25%)',
  			'bank-gradient': 'linear-gradient(90deg, #0179FE 0%, #4893FF 100%)',
  			webBg: 'radial-gradient(circle at 50% 40%, #35359F 0%, #33339A 0%, #232369 46%, #1D1D56 68%, #131339 100%)',
  			lineColor: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(72, 139, 255, 0.357) 50%, rgba(0, 0, 0, 0) 100%)',
  			hover_service_bg: ' linear-gradient(180deg, #F94A5B 0%, #6A4FFF 50%)',
			//outline
			"border_outline":"linear-gradient(317deg, #13fdfd 0%, rgba(19, 215, 253, 1) 50%, rgba(19, 191, 253, 1) 62.96%, #139bfd 100%)",
			// moving Button
			"moving_button_bg":"linear-gradient(145deg, #e2e8ec, #ffffff)",
			"hover_moving_button_bg":"linear-gradient(317deg, #13fdfd 0%, rgba(19, 215, 253, 1) 50%, rgba(19, 191, 253, 1) 62.96%, #139bfd 100%)", 
			

		}
  	},
  	fontFamily: {
  		ponomar: [
  			'Ponomar',
  			'system-ui'
  		]
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
