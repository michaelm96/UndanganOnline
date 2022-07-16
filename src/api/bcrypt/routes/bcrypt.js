'use strict';

/**
 * bcrypt router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bcrypt.bcrypt');
