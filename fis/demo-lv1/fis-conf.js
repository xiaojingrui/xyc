fis.match('*', {
  useHash: false
});

fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    //allInOne: true
  })
});

fis.match('*.scss', {
  rExt: '.css',
  parser: fis.plugin('node-sass', {
    // options...
  })
})
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});
fis.match('*.{css,scss}', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});
fis.media('local').match('*', {
  deploy: fis.plugin('local-deliver', {
    //本地
          to: './output'
  }),
  domain: ['//img.easyrong.test2']
})
  
