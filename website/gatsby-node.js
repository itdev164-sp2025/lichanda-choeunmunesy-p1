exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  // Query for all dogs
  const dogsResult = await graphql(`
    query {
      allContentfulDogProfile {
        nodes {
          name
        }
      }
    }
  `)
  
  // Create pages for each dog
  if (dogsResult.data && dogsResult.data.allContentfulDogProfile) {
    dogsResult.data.allContentfulDogProfile.nodes.forEach(dog => {
      createPage({
        path: `/dog/${dog.name.toLowerCase().replace(/\s+/g, '-')}`,
        component: require.resolve(`./src/templates/dog-template.js`),
        context: {
          name: dog.name,
        },
      })
    })
  } else {
    console.log("No dog profiles found or error in dog query:", dogsResult.errors)
  }
  
  // Query for all pages
  const pagesResult = await graphql(`
    query {
      allContentfulPage {
        nodes {
          slug
        }
      }
    }
  `)
  
  // Create pages for each content page
  if (pagesResult.data && pagesResult.data.allContentfulPage) {
    pagesResult.data.allContentfulPage.nodes.forEach(page => {
      console.log("Creating page with slug:", page.slug); 
      createPage({
        path: `/${page.slug}`,
        component: require.resolve(`./src/templates/page.js`),
        context: {
          slug: page.slug,
        },
      })
    })
  } else {
    console.log("No pages found or error in page query:", pagesResult.errors)
  }
}