// productService.ts

import { fetchContentfulData } from './client';

export const getOurServicesData = async () => {
  try {
    const query = `
    query  {
         ourServicesCollection {
            items {
                id
                title
                description
                subDescription
                icon {
                  url
                }
                image {
                  url
                }
            }
        }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.ourServicesCollection && response.data.ourServicesCollection.items) {
      // Transform the data structure as needed
      const transformedLandingData = response.data.ourServicesCollection.items.map((item: any, idx: number) => {
    
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          subDescription: item.subDescription,
          icon: item.icon,
          image: item.image,
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

export const getServicesData = async () => {
  try {
    const query = `
    query  {
         servicesCollection {
          items {
            title
            description
            
          }
        }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.servicesCollection && response.data.servicesCollection.items) {
      // Transform the data structure as needed
      const transformedLandingData = response.data.servicesCollection.items.map((item: any, idx: number) => {
    
        return {
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

export const getOurServicesSkillsData = async () => {
  try {
    const query = `
    query  {
         keyServicesCollection {
            items {
                id
                title
                role
                description
            }
        }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.keyServicesCollection && response.data.keyServicesCollection.items) {
      // Transform the data structure as needed
      const transformedLandingData = response.data.keyServicesCollection.items.map((item: any) => {
    
        return {
          id: item.id,
          title: item.title,
          role: item.role,
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


export const getKeyServicesData = async () => {
  try {
    const query = `
    query  {
         keyServicesCollection {
          items {
            id
            role
            title
            description
          }
        }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.keyServicesCollection && response.data.keyServicesCollection.items) {
      // Transform the data structure as needed
      const transformedLandingData = response.data.keyServicesCollection.items.map((item: any, idx: number) => {
    
        return {
          id: item.id,
          role: item.role,
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