"use-strict";

const { createCoreController } = require("@strapi/strapi").factories;
const modelPro = "api::project.project";

module.exports = createCoreController(modelPro, ({ strapi }) => ({
  async countIncome(ctx) {
    console.log(ctx, "@8");
    const getProjects = await strapi.db.query("api::project.project").findMany({});
    console.log(getProjects);
    let total = 0;
    for (let i = 0; i < getProjects.length; i++) {
        total += getProjects[i].harga
    }
    ctx.status = 200
    ctx.body = {
        total
    }
  },
}));
