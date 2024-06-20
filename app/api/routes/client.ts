import { createClient, ContentfulClientApi } from 'contentful';

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string;

export const client: ContentfulClientApi<any> = createClient({
    space: SPACE_ID,
    accessToken:  ACCESS_TOKEN,
});

export const fetchContentfulData = async (query: string): Promise<any> => {
  try {
      const res = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
          {
              method: 'POST',
              cache: process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-cache',
              headers: {
                  Authorization: `Bearer ${ACCESS_TOKEN}`,
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ query}),
          }
      );

      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not in JSON format');
      }

      const data = await res.json();
      return data;
  } catch (error) {
      console.error('Error fetching Contentful data:', error);
      throw error;
  }
};