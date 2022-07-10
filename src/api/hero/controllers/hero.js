"use strict";

/**
 *  hero controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::hero.hero", ({ strapi }) => ({
  async find(ctx) {
    return strapi.service("api::hero.hero").find({
      populate: "*",
    });
  },
}));
