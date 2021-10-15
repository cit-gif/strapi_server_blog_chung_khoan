"use strict";

const { textToSlug } = require("../../../src/helper/formatHelper");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
// function createAndUpdateData(data) {
//   if (data.categoryName)
//     data.slug = slugify(data?.categoryName?.trim()).toLowerCase();
// }
module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.categoryName) {
        data.slug = textToSlug(data.categoryName);
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.categoryName) {
        data.slug = textToSlug(data.categoryName);
      }
    },
    // tính thời gian
  },
};
