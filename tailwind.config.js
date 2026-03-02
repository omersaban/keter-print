/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: '0.75rem', // עיגול פינות עדין ומדויק בסגנון אפל
  			md: 'calc(0.75rem - 2px)',
  			sm: 'calc(0.75rem - 4px)'
  		},
  		colors: {
            // פלטת הצבעים הייעודית של Apple
            apple: {
                black: '#1d1d1f',    // הטקסט הכהה והיוקרתי
                gray: '#86868b',     // טקסט משני ותיאורים
                bg: '#f5f5f7',       // רקע בהיר "אלומיניום"
                blue: '#0066cc',     // כחול מערכת iOS/macOS
                silver: '#e8e8ed',   // גבולות ודיביידרים עדינים
            },
  			background: '#f5f5f7',   // עדכון הרקע הכללי ללבן-אפל
  			foreground: '#1d1d1f',   // עדכון הטקסט הכללי לשחור-אפל
  			card: {
  				DEFAULT: '#ffffff',
  				foreground: '#1d1d1f'
  			},
  			popover: {
  				DEFAULT: '#ffffff',
  				foreground: '#1d1d1f'
  			},
  			primary: {
  				DEFAULT: '#0066cc',  // הכחול המדויק של אפל
  				foreground: '#ffffff'
  			},
  			secondary: {
  				DEFAULT: '#f5f5f7',
  				foreground: '#1d1d1f'
  			},
  			muted: {
  				DEFAULT: '#86868b',
  				foreground: '#f5f5f7'
  			},
  			accent: {
  				DEFAULT: '#e8e8ed',
  				foreground: '#1d1d1f'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: '#e8e8ed',
  			input: '#e8e8ed',
  			ring: '#0066cc',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
