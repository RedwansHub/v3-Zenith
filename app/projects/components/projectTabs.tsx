// import React from 'react'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ProjectItem } from '../page'

// type Props = {
//     data: ProjectItem[],
// }

// const ProjectTab = ({data}: Props) => {
//   return (
//     <div className='w-full h-full'>
//         <Tabs defaultValue={data[0].name} >
//             <TabsList>
//                 <div   className='w-full h-full flex gap-10'>
//                 {data.map(item => (
//                         <TabsTrigger key={item.id} value={item.name}>{item.name}</TabsTrigger>
//                     ))}
//                     </div>
//             </TabsList>
//             <div className='h-full w-full'>
//                 {data.map(item => (
//                     <TabsContent  key={item.id} value={item.name} className='w-full h-full'>
//                             {item.func}
//                     </TabsContent>
//                 ))}

//             </div>
//         </Tabs>

//     </div>
//   )
// }

// export default ProjectTab