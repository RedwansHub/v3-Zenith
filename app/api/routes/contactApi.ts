import { fetchContentfulData } from "./client";

export const getContact02Data = async () => {
    try {
      const query = `
      query  {
        contact02Collection {
              items {
                id
                title
                desc
              }
          }
      }
      `;
  
      const response = await fetchContentfulData(query);
  
      if (response && response.data && response.data.contact02Collection && response.data.contact02Collection.items) {
        // Transform the data structure as needed
        const transformedLandingData = response.data.contact02Collection.items.map((item: any, idx : any) => {
      
          return {
            
            id: item.id,
            title: item.title,
            desc: item.desc,
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
  