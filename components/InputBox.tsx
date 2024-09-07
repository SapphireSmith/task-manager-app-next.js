import React from 'react'

const InputBox = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <form className="flex gap-1 flex-row" onSubmit={handleSubmit}>
            <input className='border-2 min-w-6 w-96 px-2 py-1 rounded-md text-gray-600 font-semibold focus:ring-2 focus:outline-none' type="text" placeholder='Enter new task...' />
            <button type='submit'
                className='px-4 border-[2px] rounded-md bg-[#f5f5f5] text-xl text-gray-800 peer-focus:border-gray-700
                peer-focus:text-gray-700'>
                <p>↵</p>
            </button>
        </form>
    )
}

export default InputBox