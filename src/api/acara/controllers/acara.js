"use strict";

/**
 *  acara controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::acara.acara", ({ strapi }) => ({
//   async find(ctx) {
//     console.log(ctx.query, "@11");
//     // let data = await strapi
//     //   .query("acara")
//     //   .find(ctx.query, [
//     //     {
//     //       path: "hero",
//     //       populate: {
//     //         path: "backgorund",
//     //       },
//     //     },
//     //   ])
//     // console.log(data);
//     return strapi.service("api::acara.acara").find(
//       {
//         //   path: "hero",
//         //   populate: {
//         //     path: "background",
//         //   },
//         populate: "*",
//       }
//     );
//   },
}));
