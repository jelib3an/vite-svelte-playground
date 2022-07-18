import { defineConfig, Plugin } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { transformer, declarationTransformer } from '@deepkit/type-compiler';
import ts from 'typescript';

const deepkitType: Plugin = {
  name: 'deepkit-type',
  enforce: 'pre',
  transform(code, fileName) {
    if (!/src\/lib\//.test(fileName)) {
      return;
    }

    const transformed = ts.transpileModule(code, {
      fileName,
      compilerOptions: {
        module: 'esnext',
      },
      transformers: {
        before: [transformer],
        after: [declarationTransformer],
      },
    });

    return {
      code: transformed.outputText,
      map: transformed.sourceMapText,
    };
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    deepkitType,
    svelte()
  ]
})
