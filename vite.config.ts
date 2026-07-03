import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [
        tailwindcss(),
      ],
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      define: {
        '__GEMINI_API_KEY__': JSON.stringify(env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY || ''),
        '__API_KEY__': JSON.stringify(env.API_KEY || ''),
        'process.env': '{}',
        'global': 'window',
        'process': { env: {} },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
