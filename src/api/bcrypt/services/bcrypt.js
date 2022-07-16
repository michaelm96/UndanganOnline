'use strict';

/**
 * bcrypt service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bcrypt.bcrypt');
