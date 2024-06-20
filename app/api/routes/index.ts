// productService.ts

import { fetchContentfulData } from './client';

export const getHomepageData = async () => {
  try {
    const query = `
    query  {
       homePageCollection {
          items {
              heading
              id
              slug
              paragraph
              image {
                  url
              }
          }
        }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.homePageCollection && response.data.homePageCollection.items) {
      // Transform the data structure as needed
      const transformedLandingData = response.data.homePageCollection.items.map((item: any) => {
    
        return {
          id: item.id,
          imageUrl: item.image,
          name: item.heading,
          slug: item.slug,
          description: item.paragraph,
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

export const getFAQData = async () => {
  try {
    const query = `
    query  {
       frequentlyAskedQuestionsCollection {
            items {
                id
                question                
                answer
            }
        }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data 
        && response.data.frequentlyAskedQuestionsCollection 
        && response.data.frequentlyAskedQuestionsCollection.items) {

      // Transform the data structure so that we get only what we need
      const transformedLandingData = response.data.frequentlyAskedQuestionsCollection.items.map((item: any) => {
    
        return {
          id: item.id,
          question: item.question,
          answer: item.answer,
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

export const getContactInfoData = async () => {
    try {
      const query = `
      query  {
        contactCollection {
            items {
                title
                email
                number
                instagram
                whatsapp
                officeAddress
                linkedin
            }
         }
      }
      `;
  
      const response = await fetchContentfulData(query);
  
      if (response && response.data && response.data.contactCollection && response.data.contactCollection.items) {
        // Transform the data structure as needed
        const transformedLandingData = response.data.contactCollection.items.map((item: any, idx : any) => {
      
          return {
            title: item.title,
            email: item.email,
            number: item.number,
            instagram: item.instagram,
            linkedin: item.linkedin,
            whatsapp: item.whatsapp,
            office: item.officeAddress,
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

export const getFooterData = async () => {
  try {
    const query = `
    query  {
          footerCollection {
          items {
            heading
            description
            logo {
                url
            }
          }
        }
    }
    `;

    const response = await fetchContentfulData(query);

    if (response && response.data && response.data.footerCollection && response.data.footerCollection.items) {
      // Transform the data structure as needed
      const transformedLandingData = response.data.footerCollection.items.map((item: any, idx: number) => {
    
        return {
          heading: item.heading,
          description: item.description,
          logo: item.logo,
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