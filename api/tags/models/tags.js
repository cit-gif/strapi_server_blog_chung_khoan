"use strict";
const { textToSlug } = require("../../../src/helper/formatHelper");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
function createAndUpdateData(data) {
  if (data.name) data.slug = textToSlug(data.name);
}
module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      createAndUpdateData(data);
    },
    beforeUpdate: async (params, data) => {
      createAndUpdateData(data);
    },
    // tính thời gian
  },
};
