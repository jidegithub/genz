module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/_base.scss";`,  
      },
      // scss: {
      //   prependData: `@import "@/assets/_layout.scss";`,  
      // },
    },
  },
};