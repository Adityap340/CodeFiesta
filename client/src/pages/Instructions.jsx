import React from 'react'
import { Link } from "react-router-dom";

const Instructions = () => {
    return (
        <div className="container mx-auto flex justify-center pt-10 pb-0">
            <div>
                <h2 className="text-xl font-bold">Instructions for the Quiz:</h2>
                <p className="text-gray-700 font-bold">
                    Please read the instructions carefully before proceeding to the quiz.
                </p>
                <p><span className='text-rose-500 font-bold'>Trial by Trivia</span> consists of two events: Test your General Knowledge and Guess the Logo.</p>
                <p>Each event consists of 20 questions.</p>
                <p>You can attempt both the quizzes only once.</p>
                <p>You cannot exit the fullscreen or switch tabs, if observed you will be disqualified.</p>
                <p>The participants which will perform best in both the events, will be selected for round 2.</p>
                <br />
                <div>
                    <p className='font-bold'>Instructions for Test Your GK</p>
                    <ul>
                        <li>This event is Multiple Choice Question based.</li>
                        <li>
                            Total time for attempting this event is 4 minutes.
                        </li>
                        <li>
                            If the timer goes off the test will be automatically submitted. If your test is completed before time, then wait for the timer to go off for auto submission of the test.
                        </li>
                        <li>
                            If you don't want to attempt any questions, you can click on the next button to proceed further.
                        </li></ul>
                </div>
                <div className='pt-2 mt-3'>
                    <p className='font-bold'>Instructions for Guess the Logo</p>
                    <ul>
                        <li>For attempting this quiz, look at the displayed logo on the screen and type your guess in the input box.</li>
                        <li>
                            Time for attempting each questions is 15 seconds.
                        </li>
                        <li>
                            If you don't know the answer, click on next button to proceed further otherwise the test will be automatically submitted.
                        </li>
                        <li>
                            If you don't want to attempt any questions, you can click on the next button to proceed further.
                        </li></ul>
                </div>
                <div className='py-4 mt-3 text-center'>
                    <Link
                        to="/login"
                        className="btn btn-primary bg-pink-700 px-5 py-2 rounded text-white hover:text-pink-700 hover:bg-white border border-pink-700 hover:border-pink-700"
                    >
                        Proceed 🚀
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Instructions
