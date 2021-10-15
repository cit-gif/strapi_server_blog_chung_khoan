"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async updateViewsPost(ctx) {
    const data = await strapi.models.post
      .findOneAndUpdate(
        { _id: ctx.request.body.id },

        {
          $inc: { seen: 1 },
        },
        { new: true }
      )
      .lean();
    return { seen: data.seen };
  },
  async updateLikesPost(ctx) {
    const data = await strapi.models.post
      .findOneAndUpdate(
        { _id: ctx.request.body.id },
        {
          $inc: { like: 1 },
        },
        { new: true }
      )
      .lean();
    return { like: data.like };
  },
};
