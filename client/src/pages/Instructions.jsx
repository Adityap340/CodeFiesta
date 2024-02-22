import React from 'react'
import { Link } from "react-router-dom";

const Instructions = () => {
    return (
        <div className="container mx-auto text-center">
            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Instructions for the Quiz:</h2>
                <p className="text-gray-700">
                    Please read the instructions carefully before proceeding to the quiz.
                </p>
            </div>
            <div>
                <Link
                    to="/login"
                    className="btn btn-primary bg-pink-700 px-5 py-2 rounded text-white hover:text-pink-700 hover:bg-white border border-pink-700 hover:border-pink-700"
                >
                    Proceed 🚀
                </Link>
            </div>
        </div>
    )
}

export default Instructions
