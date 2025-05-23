import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		typography: ({ theme }: {theme: any}) => ({
                  dark: {
                          css: {
                                  color: theme('colors.white'),
                                  a: { color: theme('colors.white') },
                                  h1: { color: theme('colors.white') },
                                  h2: { color: theme('colors.white') },
                                  h3: { color: theme('colors.white') },
                                  h4: { color: theme('colors.white') },
                                  h5: { color: theme('colors.white') },
                                  h6: { color: theme('colors.white') },
                                  strong: { color: theme('colors.white') },
                                  th: { color: theme('colors.white'), weight: 'bold' },
                                  code: { color: theme('colors.blue.200') },
                                  blockquote: {
                                          color: theme('colors.gray.400'),
                                          borderLeftColor: theme('colors.chart.2'),
                                  },
                          },
                  },
		  DEFAULT: {
			  css: {
				  color: theme('colors.dark'),
				  a: { color: theme('colors.dark') },
				  h1: { color: theme('colors.dark') },
				  h2: { color: theme('colors.dark') },
				  h3: { color: theme('colors.dark') },
				  h4: { color: theme('colors.dark') },
				  h5: { color: theme('colors.dark') },
				  h6: { color: theme('colors.dark') },
				  strong: { color: theme('colors.dark') },
			  },
		  },
		}),
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
        }
    }
  },
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography'),],
};
export default config;
