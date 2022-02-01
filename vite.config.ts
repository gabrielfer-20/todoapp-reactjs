import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	envDir: './.env',
	envPrefix: [
		'API_KEY',
		'AUTH_DOMAIN',
		'PROJECT_ID',
		'STORAGE_BUCKET',
		'MESSAGING_SENDER_ID',
		'APP_ID',
	],
});
