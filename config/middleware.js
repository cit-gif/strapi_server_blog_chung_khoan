module.exports = {
  //...
  settings: {
    cors: {
      enabled: true,
      // headers: '*',
      origin: process.env.ORIGIN.split(";") || "*",
    },
  },
};
