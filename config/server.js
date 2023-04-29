module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '37988858f79565c622dee563eca66c28'),
    },
  },
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
