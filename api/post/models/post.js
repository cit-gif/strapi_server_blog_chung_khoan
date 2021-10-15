"use strict";
const { textToSlug } = require("../../../src/helper/formatHelper");

const readingTime = require("reading-time");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
function createAndUpdateData(data) {
  if (data.postName) data.slug = textToSlug(data.postName);
  // tính thời gian đọc
  if (data.content) {
    const stats = readingTime(data.content, { wordsPerMinute: 200 });
    data.readingTime = Math.ceil(stats.minutes);
  }
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
