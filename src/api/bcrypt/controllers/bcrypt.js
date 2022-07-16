'use strict';

/**
 *  bcrypt controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bcrypt.bcrypt');
