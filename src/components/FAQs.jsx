import React, { useState } from 'react';

const FAQs = () => {
    const faqs = [
        {
            question: 'What are the passing criteria for CBSE 10th class?',
            answer: 'To pass CBSE 10th class, students need to score at least 33% in each subject and an overall aggregate of 40%.',
        },
        {
            question: 'How are CBSE 12th board exams graded?',
            answer: 'CBSE 12th board exams are graded based on a nine-point grading system, ranging from A1 (highest) to E2 (lowest).',
        },
        {
            question: 'Can I change my CBSE 10th or 12th exam center?',
            answer: 'Yes, CBSE allows students to request a change in their exam center under certain circumstances, such as relocation.',
        },
        {
            question: 'What are the passing criteria for CBSE 12th class?',
            answer: 'To pass CBSE 12th class, students need to score at least 33% in each subject and an overall aggregate of 33%.'
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
            <h2 className="text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQs;
