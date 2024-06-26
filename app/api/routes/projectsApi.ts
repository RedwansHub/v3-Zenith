import { fetchContentfulData } from './client';

export const getProjectsData = async () => {
  try {
    const query = `
    query {
      projectsCollection {
        items {
          sys {
            id
          }
          title
          description
          imagesCollection {
            items {
              url
            }
          }
        }
      }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.projectsCollection && response.data.projectsCollection.items) {
      const transformedLandingData = response.data.projectsCollection.items.map((item: any) => {
        return {
          id: item.sys.id,
          name: item.title,
          description: item.description,
          images: item.imagesCollection.items.map((imageItem: any) => imageItem.url),
        };
      });

      return transformedLandingData;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error fetching Contentful data:', error);
    throw error;
  }
};
