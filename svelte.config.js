import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { optimizeImports, optimizeCss } from 'carbon-preprocess-svelte';
import * as path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), optimizeImports()],

	kit: {
		adapter: adapter(),
    vite: {
      plugins: [process.env.NODE_ENV === "production" && optimizeCss()],
      resolve: {
        alias: {
          $src: path.resolve('./src/')
        }
      }
    },

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
