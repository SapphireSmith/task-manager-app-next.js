import React from 'react'

type PropType = {
  index: number
}

const Task = ({ index }: PropType) => {

  return (
    <div key={index} className='w-ful p-2 rounded-md border-2 h-auto'>
      <p className='font-'>Some work to do</p>
      <div className='flex gap-2 justify-end italic text-sm font-medium text-gray-400'>
        <p className='font-serif'>Yesterday</p>
        <p className='font-serif'>13:24</p>
      </div>
    </div>
  )
}

export default Task