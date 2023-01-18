module.exports = {
  exportTrailingSlash: true,

  reactStrictMode: true,

  exportPathMap: async function () {

    return {
      '/': { page: '/' },
    }
  }

    
}
