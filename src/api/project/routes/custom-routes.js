"use strict";

/**
 * project router.
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/projects/count-income",
      handler: "custom-controller.countIncome",
      config: {
        policies: [],
      },
    },
  ],
};
