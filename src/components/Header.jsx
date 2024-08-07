import React from 'react';

const Header = () => {
  return (
    <section className="w-full overflow-hidden bg-[#E8ECFC] h-max mt-12 py-20 sm:p-28 relative">
      <img className='absolute  object-cover top-0 w-full h-full sm:hidden flex brightness-50' src="/assets/bg.jpg" alt="" />
      <img className='absolute object-cover sm:flex hidden h-72 left-10 bottom-0' src="https://www.pngarts.com/files/7/Group-College-Student-Transparent-Images.png" alt="" />
      <img className='absolute object-cover sm:flex hidden h-72 right-5 bottom-0' src="https://www.pngmart.com/files/17/College-Student-PNG-HD.png" alt="" />
      <div className="flex justify-center items-center flex-col  text-center relative z-10 ">
        <h1 className="text-4xl font-bold mb-4 sm:text-black text-gray-100">Welcome to <span className='text-blue-500'>EXCELLENT ACADEMY OF SCIENCE</span></h1>
        <p className="md:text-black text-gray-100 mb-8">Achieve your academic goals with our expert guidance and personalized coaching.</p>
        <a href="#courses" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Explore Courses</a>
      </div>
    </section>
  );
}

export default Header;
