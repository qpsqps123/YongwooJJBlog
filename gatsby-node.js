const path = require(`path`);
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  });
};
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const LearnPageTemplate = path.resolve(`src/templates/LearnPageTemplate.tsx`);
  const LifePageTemplate = path.resolve(`src/templates/LifePageTemplate.tsx`);
  const EmptyPage = path.resolve(`src/templates/EmptyPost.tsx`);
  const result = await graphql(`
    # prettier-ignore
    query {
      allMdx(sort: { frontmatter: { date: DESC } } limit:1000000) {
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
  const lifePosts = posts.filter((node) => node.frontmatter.post === "life");
  const learnPosts = posts.filter((node) => node.frontmatter.post === "learn");
  const postsPerPage = 5;
  const numLifePages = Math.ceil(lifePosts.length / postsPerPage);
  const numLearnPages = Math.ceil(learnPosts.length / postsPerPage);

  numLearnPages > 0
    ? Array.from({ length: numLearnPages }, (_, i) => {
        createPage({
          path: `/blog/learn/${i + 1}`,
          component: LearnPageTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numLearnPages,
            currentPage: i + 1,
          },
        });
      })
    : createPage({
        path: `/blog/learn/1`,
        component: EmptyPage,
      });

  numLifePages > 0
    ? Array.from({ length: numLifePages }, (_, i) => {
        createPage({
          path: `/blog/life/${i + 1}`,
          component: LifePageTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numLifePages,
            currentPage: i + 1,
          },
        });
      })
    : createPage({
        path: `/blog/life/1`,
        component: EmptyPage,
      });
};
