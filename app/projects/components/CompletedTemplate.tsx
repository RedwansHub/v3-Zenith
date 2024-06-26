import React from 'react'

type Props = {}

const CompletedTemplate = (props: Props) => {
  return (
    <div className='w-full h-full flex justify-center items-center py-48'>
      <h2 className='font-semibold text-sm text-primary dark:text-white'>There isn't any Completed Projects yet.</h2>
    </div>
  )
}

export default CompletedTemplate