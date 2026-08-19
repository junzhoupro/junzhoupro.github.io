// @ts-check

import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
	site: 'https://junzhoupro.github.io',
	base: process.env.BASE_PATH || '/',
	integrations: [
		mdx(),
		sitemap()
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
		processor: unified({
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex],
		}),
	},
	build: {
		inlineStylesheets: 'always',
	},
	redirects: {
		'/about': '/album',
	},
});
