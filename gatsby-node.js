// const path = require("path")
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       allStrapiBlogs {
//         nodes {
//           title
//           date
//           blogImage {
//             url
//             name
//           }
//           description
//         }
//       }
//     }
//   `)
//   result.data.allStrapiBlogs.nodes.forEach(item => {
//     createPage({
//       path: `/blogs/${item.title}`,
//       component: path.resolve("./src/components/Template/BlogDisplay.js"),
//       context: {
//         data: item,
//       },
//     })
//   })
// }
