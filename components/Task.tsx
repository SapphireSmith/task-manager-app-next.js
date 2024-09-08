import React from 'react'

type PropType = {
  index: number
}

const Task = ({ index }: PropType) => {
  console.log(index);
  
  return (
    <div key={index} className='w-ful p-2 rounded-md border-2 h-auto'>
      <p className='font-'>Some work to do</p>
      <div className='flex gap-2 justify-end italic text-sm font-medium text-gray-400'>
        <p>Yesterday</p>
        <p>13:24</p>
      </div>
    </div>
  )
}

export default Task