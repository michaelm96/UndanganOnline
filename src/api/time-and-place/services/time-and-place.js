'use strict';

/**
 * time-and-place service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::time-and-place.time-and-place');
