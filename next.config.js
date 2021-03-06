module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}


// webpack(config) {
//   config.module.rules.push({
//     test: /\.svg$/,
//     issuer: {
//       test: /\.(js|ts)x?$/,
//     },
//     use: ['@svgr/webpack'],
//   });
//   return config;
// }