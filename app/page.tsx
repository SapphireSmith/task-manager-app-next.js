"use client";
import InputBox from '@/components/InputBox';
import TaskCards from '@/components/TaskCards';
import useAuth from '@/hooks/useAuth';

const Page = () => {

  useAuth(); // authentication hook

  return (
    <div className='flex justify-center items-center'>
      <section className='flex min-w-[60px] p-3 max-w-7xl flex-col gap-4'>
        <div className='pt-4'>
          <h1 className='font-extrabold text-[30px] text-gray-800'>Add some task...</h1>
        </div>
        <InputBox />
        <TaskCards count={4}/>

        <div className='pt-4'>
          <h1 className='font-extrabold text-[30px] text-gray-800'>Completed tasks</h1>
        </div>
        <TaskCards count={2}/>

      </section>
    </div>
  );
};

export default Page;
