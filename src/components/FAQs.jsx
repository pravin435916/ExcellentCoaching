import React, { useState } from 'react';

const FAQs = () => {
    const faqs = [
        {
            question: 'what is the passing criteria to enroll ?',
            answer: '50 to 70 above percentage students can enroll this courses',
        },
        {
            question: 'What is the teaching methodology at Tuton Classes?',
            answer: 'At Tuton Classes, we use a student-centric approach, focusing on conceptual understanding, regular assessments, and personalized feedback to ensure each student achieves their academic potential.',
        },
        {
            question: 'Are the courses available online or offline?',
            answer: 'We offer offline courses to cater to the diverse needs of our students.',
        },
        {
            question: 'How do you ensure the quality of education?',
            answer: 'Our faculty consists of experienced educators who are experts in their respective fields. We provide comprehensive study materials, regular tests, and performance reviews to ensure high-quality education.',
        },
        {
            question: 'Can I get a demo class before enrolling?',
            answer: 'Yes, we offer demo classes for prospective students. You can register for a demo class through our website or contact our support team for more details.',
        },
        {
            question: 'What are the fees for the courses?',
            answer: 'The course fees vary based on the grade and board. Please visit our classes to know more about it.',
        },
        {
            question: 'How can I enroll in a course?',
            answer: 'Enrollment can be done offline through  by visiting our center.',
        },
        {
            question: 'How do you handle doubts and queries?',
            answer: 'We have dedicated doubt-clearing sessions and an online platform where students can post their queries. Our faculty promptly addresses all doubts to ensure clarity.',
        }
    ];
    

    const FAQItem = ({ question, answer }) => {
        const [showAnswer, setShowAnswer] = useState(false);

        return (
            <div className="bg-white rounded-lg shadow-md mb-4">
                <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer"
                    onClick={() => setShowAnswer(!showAnswer)}
                >
                    <div className="font-semibold text-lg">{question}</div>
                    <div className="text-gray-600">
                        {showAnswer ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        )}
                    </div>
                </div>
                {showAnswer && (
                    <div className="px-4 py-3 border-t">
                        <p className="text-gray-800">{answer}</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="w-full p-10 sm:w-[60vw] mx-auto">
            <h2 className="sm:text-5xl text-3xl mt-4 font-bold mb-8 text-center">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQs;
