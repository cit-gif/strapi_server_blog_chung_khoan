module.exports = {
  definition: `
   type CategoryCount {
                categoryName:String,
                id: String,
                slug: String,
                countPosts:Int
    },
  `,
  type: {},
  query: `
    countPostsInCategory: [CategoryCount]
  `,
  resolver: {
    Query: {
      countPostsInCategory: {
        description: "Return the count of post in category",
        resolver: "application::category.category.countPostsInCategory", // các trường cho phép
      },
    },
  },
};
