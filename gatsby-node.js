/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
    
  
  
    const { createPage } = actions;
    const blogEn = path.resolve('src/components/blog/blog_only.js')
    
  
  
    return graphql(`
      {
        blogs: allContentfulPost {
          edges {
            node {
              id
            }
          }
        }
        
      }       
    `).then(result => {
      if (result.errors) {
        Promise.reject(result.errors);
      }
      result.data.blogs.edges.forEach(({ node }) => {
        createPage({
          path: "/articles/" + node.id,
          component: blogEn,
          context: {
            id: node.id
          }
        })
      })
    })
  }