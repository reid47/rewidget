import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import fileSize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';

const common = ({ fileName }) => ({
  input: `src/${fileName}.js`,
  output: {
    file: `dist/${fileName}.js`,
    format: 'cjs'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      exclude: 'node_modules/**/'
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    fileSize()
  ],
  external: ['react', 'react-dom', 'prop-types']
});

export default [
  common({ fileName: 'index' }),
  ...['FocusTrap', 'VirtualList', 'WindowSize'].map(fileName => common({ fileName }))
];
