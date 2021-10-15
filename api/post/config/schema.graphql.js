module.exports = {
  definition: `
   type viewsPost {
              seen:Int
    },
    type likesPost {
              like:Int
    },
  `,
  type: {},
  mutation: `
    updateViewsPost(id: ID): viewsPost!
    updateLikesPost(id: ID): likesPost!

  `,
  resolver: {
    Query: {},
    Mutation: {
      updateViewsPost: {
        description: "Cập nhập view cho bài viết",
        resolver: "application::post.post.updateViewsPost",
      },
      updateLikesPost: {
        description: "Cập nhập like cho bài viết",
        resolver: "application::post.post.updateLikesPost",
      },
    },
  },
};
