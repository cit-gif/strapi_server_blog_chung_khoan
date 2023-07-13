module.exports = ({ env }) => ({
  //...
  settings: {
    cors: {
      enabled: true,
      // headers: '*',
      origin: "*"
    },
  },
  gzip: {
    enabled: true,
    options: {
      br: false,
    },
  },
});
