"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async countPostsInCategory(obj, options, ctx) {
    return await strapi.query("category").model.aggregate([
      // {
      //   $match: {
      //     published_at: {
      //       $ne: null,
      //     },
      //   },
      // },
      {
        $lookup: {
          from: "posts",
          let: { id: "$_id" },
          // foreignField: "category",
          pipeline: [
            {
              $match: {
                // $expr: { $eq: ["$category", "$$id"] },
                $and: [
                  { $expr: { $eq: ["$category", "$$id"] } },
                  // {
                  //   published_at: {
                  //     $ne: null,
                  //   },
                  // },
                ],
                /**
                |--------------------------------------------------
                | bỏ chế độ lưu nháp rồi
                |--------------------------------------------------
                */
                // $and: [
                //   { $expr: { $eq: ["$category", "$$id"] } },
                //   {
                //     published_at: {
                //       $ne: null,
                //     },
                //   },
                // ],
              },
            },
          ],
          as: "posts",
        },
      },

      {
        $project: {
          _id: 0,
          id: "$_id",
          categoryName: 1,
          slug: 1,
          countPosts: { $size: "$posts" },
        },
      },
    ]);
  },
};
