import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                "normal": 'rgb(var(--theme-fg) / <alpha-value>)',
                "muted": 'rgb(var(--theme-fg-muted) / <alpha-value>)',
                "background": 'rgb(var(--theme-bg) / <alpha-value>)',
                "background-alt": 'rgb(var(--theme-bg-alt) / <alpha-value>)',
                "keyword": 'rgb(var(--theme-red) / <alpha-value>)',
                "function": 'rgb(var(--theme-green) / <alpha-value>)',
                "string": 'rgb(var(--theme-yellow) / <alpha-value>)',
                "constant": 'rgb(var(--theme-blue) / <alpha-value>)',
            }
        }
    }
}
