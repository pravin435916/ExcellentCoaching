import React from 'react';

const Courses = () => {
  const courseList = [
    { title: 'State Board', description: 'Comprehensive coaching for all grades from class 8 to class 12.', image: 'https://www.gyankoshacademy.com/wp-content/uploads/2022/02/CBSE-1024x576.jpg' },
    { title: 'CBSE', description: 'In-depth maths & science classes to boost understanding from class 8 to class 12', image: 'https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/coaching-77c8470c78.jpg' }
  ];

  return (
    <section id="courses" className="w-full sm:px-20 py-20">
      <div className="flex justify-center items-center flex-col  w-full mx-auto text-center gap-4">
        <span className="sm:text-5xl border-t-4 border-black text-3xl font-bold mb-4 text-gray-800">Our Courses</span>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-14">
          {courseList.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 "
            >
              <img
                className='w-full h-72 object-cover mb-4 rounded-t-lg'
                src={course.image}
                alt={`${course.title} course`}
              />
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
