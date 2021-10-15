module.exports = {
  //...
  settings: {
    cors: {
      enabled: true,
      // headers: '*',
      origin: process.env?.ORIGIN?.split(";") || env("ORIGIN") || "*",
    },
  },
  gzip: {
    enabled: true,
    options: {
      br: false,
    },
  },
};
