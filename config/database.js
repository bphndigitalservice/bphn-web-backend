const path = require('path');

module.exports = ({env}) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env('DATABASE_PORT', 3306),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      database: env('DATABASE_NAME', 'strapi')
    },
    debug: env('NODE_NEV')==='development'
  },
});
