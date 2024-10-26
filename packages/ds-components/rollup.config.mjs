import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';

export default [
    {
        input: ['src/index.ts'],
        output: [{
            dir: 'lib',
            preserveModules: true,
            exports: 'named',
            entryFileNames: '[name].js',
        }],
        plugins: [
            esbuild({
                minify: true,
                target: 'es6',
            }),
            postcss({
                modules: false,
                extract: true,
            }),
        ],
        external: [
            'react',
            'react-dom',
            '@ds-ifc/ds-tokens',
        ],
    }
];
