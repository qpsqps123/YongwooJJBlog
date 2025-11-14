const path = require(`path`);
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
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
  const BlogPageTemplate = path.resolve(`src/templates/BlogPageTemplate.tsx`);
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
            isEmpty
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
  const postsPerPage = 5;

  const postsByPostType = posts.reduce((acc, post) => {
    const postType = post.frontmatter.post;
    if (!postType) return acc;
    if (!acc[postType]) {
      acc[postType] = [];
    }
    acc[postType].push(post);
    return acc;
  }, {});

  for (const postType in postsByPostType) {
    const typedPosts = postsByPostType[postType];
    const numPages = Math.ceil(typedPosts.length / postsPerPage);

    if (typedPosts.length === 1 && typedPosts[0].frontmatter.isEmpty === true) {
      createPage({ path: `/blog/${postType}/1`, component: EmptyPage });
    } else if (typedPosts.length > 1) {
      Array.from({ length: numPages }, (_, i) => {
        createPage({
          path: `/blog/${postType}/${i + 1}`,
          component: BlogPageTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            postType: postType,
          },
        });
      });
    }
  }
};
