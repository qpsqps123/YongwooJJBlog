const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const LearnPageTemplate = path.resolve(`src/templates/LearnPageTemplate.tsx`);
  const LifePageTemplate = path.resolve(`src/templates/LifePageTemplate.tsx`);
  const result = await graphql(`
    # prettier-ignore
    query {
      allMdx(sort: { frontmatter: { date: DESC } } limit:1000) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            post
          }
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allMdx.nodes;
  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }, (_, i) => {
    createPage({
      path: `/blog/learn/${i + 1}`,
      component: LearnPageTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  Array.from({ length: numPages }, (_, i) => {
    createPage({
      path: `/blog/life/${i + 1}`,
      component: LifePageTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
