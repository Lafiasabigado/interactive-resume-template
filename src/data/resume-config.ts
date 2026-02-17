// Copy resume-config.example.ts and customize it with your own information.
// See docs/CUSTOMIZATION.md for a detailed guide.
import { resumeConfig as example } from './resume-config.example'

// Force the production default preset to 'ocean' while keeping the
// example/default behavior in development. This allows the dev-only
// selector (shown when import.meta.env.DEV) to continue working.
export const resumeConfig = {
	...example,
	theme: {
		...(example.theme ?? {}),
		preset: import.meta.env.DEV ? (example.theme?.preset ?? 'minimal') : (example.theme?.preset ?? 'ocean'),
	},
}
