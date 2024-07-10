import React from 'react';

const TopperList = () => {
    const toppers = [
        { name: 'John Doe', rank: '1st', photo: 'https://tse4.mm.bing.net/th?id=OIP.COU9xMmr4xPMqZ_B1QL6owHaE8&pid=Api&P=0&h=180' },
        { name: 'Jane Smith', rank: '2nd', photo: 'https://tse4.mm.bing.net/th?id=OIP.COU9xMmr4xPMqZ_B1QL6owHaE8&pid=Api&P=0&h=180' },
        { name: 'Sam Johnson', rank: '3rd', photo: 'https://tse4.mm.bing.net/th?id=OIP.COU9xMmr4xPMqZ_B1QL6owHaE8&pid=Api&P=0&h=180' },
        { name: 'Sam Johnson', rank: '3rd', photo: 'https://tse4.mm.bing.net/th?id=OIP.COU9xMmr4xPMqZ_B1QL6owHaE8&pid=Api&P=0&h=180' },
        { name: 'Sam Johnson', rank: '3rd', photo: 'https://tse4.mm.bing.net/th?id=OIP.COU9xMmr4xPMqZ_B1QL6owHaE8&pid=Api&P=0&h=180' },
        // Add more toppers as needed
      ];
      
  return (
    <div className="w-full overflow-hidden flex flex-col items-center">
      <h1 className="text-4xl font-bold my-8">Top Students</h1>
      <div className="flex flex-wrap justify-center">
        {toppers.map((topper, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img
              src={topper.photo}
              alt={topper.name}
              className="w-52 h-64 mb-4 object-cover"
            />
            <p className="text-xl font-semibold">{topper.name}</p>
            <p className="text-md">{topper.rank}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopperList;
