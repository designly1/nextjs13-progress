import { Options } from 'tsup';
export const tsup: Options = {
	target: 'esnext',
	clean: true,
	dts: {
		resolve: true,
	},
	entry: ['index.ts'],
	keepNames: true,
	minify: true,
	sourcemap: true,
	format: ['cjs'],
	outExtension({ format }) {
		return {
			js: format === 'cjs' ? '.js' : '.mjs',
			dts: '.d.ts',
		};
	},
	banner: {
		js: `"use client"`,
	},
};
