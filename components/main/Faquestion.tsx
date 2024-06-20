import { getFAQData } from '@/app/api/routes';
import { FAQStructure } from '@/app/interface';
import React, { useEffect, useState } from 'react'

type Props = {}

const Faquestion = (props: Props) => {

    const [questionData, setQuestionsData] = useState<FAQStructure[]>();
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const data: FAQStructure[] = await getFAQData();
                    // Sort the data by id
                    const sortedData = data.sort((a, b) => a.id - b.id);
                    setQuestionsData(sortedData);

                } catch (error) {
                    console.error('Error fetching Landing data:', error);
                }
            };

            fetchData();
    }, []);

  return (
      <div className='h-full flex  flex-col justify-center items-center gap-4 w-full '>
          <div className=''>
            <h2 className='text-3xl font-medium'>Frequently asked Questions</h2>
        
        <div className=''>
            {questionData?.map( item => (
                <div key={item.id}>

                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Faquestion