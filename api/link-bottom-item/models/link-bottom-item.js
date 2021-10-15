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
      if (data.text) {
        data.url = textToSlug(data.text);
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.text) {
        data.url = textToSlug(data.text);
      }
    },
    // tính thời gian
  },
};
