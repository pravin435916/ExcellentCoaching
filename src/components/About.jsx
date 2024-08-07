// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container w-full overflow-hidden mx-auto text-center">
        <span className="text-4xl font-bold mt-4 mb-4 border-t-4 border-black">About Us</span>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our tuition classes are designed to provide personalized attention and expert guidance to help students excel in their academics. With experienced tutors and a supportive learning environment, we aim to bring out the best in each student.
        </p>
      </div>
      <div className='w-full flex sm:flex-row flex-col justify-center items-center gap-2 sm:gap-14 p-8'>
        <div className='flex gap-2 justify-center items-center flex-col bg-yellow-50 p-4'>
          <span>Notes</span>
          <img className='w-48 h-48 bg-contain' src="/assets/one.webp" alt="" />
        </div>
        <div className='flex  gap-2 justify-center items-center flex-col bg-green-100 p-4'>
          <span>Doubt Solving</span>
          <img className='w-48 h-48 bg-contain'src="/assets/two.webp" alt="" />
        </div>
        <div className='flex  gap-2 justify-center items-center flex-col bg-red-100 p-4'>
          <span>Conceptual Learning</span>
          <img className='w-48 h-48 bg-contain' src="/assets/three.webp" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
