require('dts-generator').default({
  prefix: 'demo-dts-facade',
  baseDir: 'src',
  files: [ 'src/facade.ts' ],
  out: 'foo.d.ts'
});