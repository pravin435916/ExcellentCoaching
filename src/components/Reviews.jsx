import React from 'react';

const ReviewCard = ({ name, comment, stars,role }) => {
  const starIcons = [];
  for (let i = 0; i < stars; i++) {
    starIcons.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-500 fill-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 1l2.63 5.37 6.02.87-4.37 4.26 1 6.14-5.28-2.77-5.28 2.77 1-6.14L1.35 7.24l6.02-.87L10 1z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <div className="max-w-xs mx-2 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{name}</div>
        <p className='mb-2'>{role}</p>
        <p className="text-gray-700 text-base">{comment}</p>
        <div className="mt-4 flex items-center">{starIcons}</div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center p-4 ">
      <h1 className='text-4xl sm:text-5xl font-bold text-center'>Hear from Our Satisfied Reviews</h1>
      <p className='text-center'>Our tutors have helped countless students achieve their academic goals. Read what our clients have to say.</p>
      <div className='flex sm:flex-row flex-col gap-4 justify-center'>
      <ReviewCard name="...." role={"parent"} stars={5} comment="My daughter's grades have improved significantly since starting tutoring with Excllent Academy of science." />
      <ReviewCard name="Pravin Nandankar" role={"student"} stars={4} comment="Good experience overall. Great service, highly recommended!" />
      <ReviewCard name="Abhay" role={"student"} stars={3} comment="Could be better, but not bad. Great service, highly recommended!" />
      </div>
    </div>
  );
};

export default Reviews;
