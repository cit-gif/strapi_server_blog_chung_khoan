module.exports = ({ env }) => ({
  //...
  settings: {
    cors: {
      enabled: true,
      // headers: '*',
      origin:
        process.env?.ORIGIN?.split(";") || env("ORIGIN")?.split(";") || "*",
    },
  },
  gzip: {
    enabled: true,
    options: {
      br: false,
    },
  },
});
