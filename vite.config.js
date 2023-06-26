import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        laravel(
            [
                'resources/js/component-scripts/app.js',
            ],
            {
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/js/component-scripts/app.js',
            ],
            refresh: true,
            }
        ),
    ],
});
