"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async findBySlugComponents(ctx) {
    let entities;
    // console.log("_q,", ctx.query._q);
    // console.log("query,", ctx.query);
    // console.log(strapi.components["footer.link"].Model.link);
    if (ctx.query._q) {
      entities = await strapi.services.links.search(ctx.query);
    } else {
      entities = await strapi.query("links").find({ ...ctx.query });
    }
    const result = entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.links })
    );
    return result;
  },
};
