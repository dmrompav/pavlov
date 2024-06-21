import {
  defineConfig, 
  presetUno,
  presetAttributify,
  transformerDirectives,
  presetIcons,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: '_',
      prefixedOnly: true
    }),
    presetIcons()
  ],
  transformers: [
    transformerDirectives()
  ]
});
