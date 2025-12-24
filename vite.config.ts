import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		SvelteKitPWA({
			devOptions: {
				enabled: true
			},
			strategies: 'generateSW',
			registerType: 'autoUpdate',
			manifest: {
				name: 'QLOCKTWO',
				short_name: 'QLOCKTWO',
				icons: [
					{
						src: 'web-app-manifest-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: ['any']
					},
					{
						src: 'web-app-manifest-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: ['any']
					}
				],
				theme_color: '#ffffff',
				background_color: '#ffffff',
				display: 'standalone'
			}
		})
	]
});
