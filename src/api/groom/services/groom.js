'use strict';

/**
 * groom service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::groom.groom');
