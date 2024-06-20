// productService.ts

import { fetchContentfulData } from './client';


export const getAboutUsData = async () => {
  try {
    const query = `
    query  {
      aboutCompanyCollection {
            items {
                id
                heading
                subHeading
                paragraph
                image {
                  title
                  url
                }
            }
        }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.aboutCompanyCollection && response.data.aboutCompanyCollection.items) {
      // Transform the data structure as needed
      const transformedLandingData = response.data.aboutCompanyCollection.items.map((item: any, idx : any) => {
    
        return {
          id: item.id,
          title: item.heading,
          heading: item.subHeading,
          description: item.paragraph,
          images: item.image,
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

export const getOurProcessData = async () => {
  try {
    const query = `
    query  {
      ourApproachCollection {
            items {
                title
                paragraph

            }
      }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.ourApproachCollection && response.data.ourApproachCollection.items) {
      // Transform the data structure as needed
      const transformedLandingData = response.data.ourApproachCollection.items.map((item: any) => {
    
        return {
          title: item.title,
          paragraph: item.paragraph,
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

export const getCoreValueData = async () => {
  try {
    const query = `
    query  {
      valuesCollection {
            items {
                title 
                description
                id
            }
        }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.valuesCollection && response.data.valuesCollection.items) {
      // Transform the data structure as needed
      const transformedLandingData = response.data.valuesCollection.items.map((item: any) => {
    
        return {
          id: item.id,
          title: item.title,
          description: item.description,
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

export const getOurValuesData = async () => {
  try {
    const query = `
    query  {
        valuesCollection {
            items {
                id
                title
                description
            }
        }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.valuesCollection && response.data.valuesCollection.items) {
      // Transform the data structure as needed
      const transformedLandingData = response.data.valuesCollection.items.map((item: any) => {
    
        return {
          id: item.id,
          title: item.title,
          description: item.description,
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