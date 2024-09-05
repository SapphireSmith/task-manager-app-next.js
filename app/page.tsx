"use client";
import useAuth from '@/hooks/useAuth';

const Page = () => {

  useAuth(); // authentication hook

  return (
    <div className='flex justify-center items-center'>
      <section className='flex max-w-7xl flex-col gap-4'>
        <div className='pt-4'>
          <h1 className='font-extrabold text-[30px]'>Add some task...</h1>
        </div>
        {/* <InputBox /> */}
        {/* <Task /> */}

        <div className='pt-4'>
          <h1 className='font-extrabold text-[30px]'>Completed tasks</h1>
        </div>
        {/* <Task /> */}
      </section>
    </div>
  );
};

export default Page;
