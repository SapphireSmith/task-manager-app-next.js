import React from 'react'
import Task from './Task'

type Count = {
    count: number
}

const TaskCards = ({ count }: Count) => {
    return (
        <div className='flex flex-col gap-2'>
            {
                Array(count).fill('').map((_, index) => (
                    <Task />
                ))
            }
        </div>
    )
}

export default TaskCards