'use client';
import React, { useEffect, useState } from 'react';

import { ServiceSkillStructure } from '@/app/interface';
import { Card } from '@/components/ui/card';
import { getOurServicesSkillsData } from '@/app/api/routes/servicesRoute';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Animateslide from '@/components/animation/Animateslide';
  
type Props = {
  current: any;
};

const ServiceSkills = ({  current }: Props) => {
  const [skillsData, setSkills] = useState<ServiceSkillStructure[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ServiceSkillStructure[] = await getOurServicesSkillsData();
        const sorted = data.filter( i => i.title == current).map(item => { return item })
        setSkills(sorted);
      } catch (error) {
        console.error('Error fetching Landing data:', error);
      }
    };

    fetchData();
  }, [setSkills, current]);

  return (
    <div className=' w-full flex flex-wrap gap-0'>
      {skillsData && skillsData.length > 0 ? (
        skillsData.
            map((skill, idx) => (
          <div key={idx} className='w-full  p-1'>
              <Animateslide delay={0.01 } side='up'>
                  <Accordion type="single" collapsible>
                      <AccordionItem value={skill.role}>
                          <AccordionTrigger>
                              <h3 className='font-semibold'>{skill.role}</h3>
                          </AccordionTrigger>
                          <AccordionContent>
                          {skill.description}
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </Animateslide>
          </div>
        ))
      ) : (
        <p>Loading skills...</p> // Optionally, you can add a loading state or a message
      )}
    </div>
  );
};

export default ServiceSkills;
