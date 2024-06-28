# Quiz Platform

## Overview

This project is a web-based quiz platform built using Vite+React and JavaScript, with Firebase as the database. The platform includes two types of quizzes: a general knowledge multiple-choice quiz (MCQ) and a logo guessing game. Each user is required to log in with Firebase Authentication, and their scores are stored in the Firebase database.

## Features

1. **General Knowledge MCQ Quiz**
   - Each user receives different questions from a predefined set.
   - A 5-minute timer for the entire quiz.
   - The quiz is auto-submitted when the timer runs out.

2. **Logo Guessing Game**
   - Users must type the name of the logo shown within 45 seconds.
   - If the user fails to answer within the time limit, the question is skipped.
   - The quiz is auto-submitted when the last question's timer runs out.

3. **Firebase Authentication**
   - Users log in using their email and password.
   - Each user's scores are stored in the database associated with their email.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase project set up

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adityap340/CodeFiesta.git
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a `.env` file in the client directory.
   - Add your Firebase configuration details to the `.env` file:
     ```env
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create a production build, run:
```bash
npm run build
```

## Usage

1. **Login**
   - Navigate to the login page.
   - Enter your email and password to log in.

2. **Taking a Quiz**
   - Select the type of quiz (MCQ or Logo Guessing).
   - Answer the questions within the given time limits.
   - The quiz will be auto-submitted when the timer runs out.

3. **Scores**
   - After completing the quiz, your scores will be saved in the Firebase database associated with your email.

## Technologies Used

- **Frontend:** Vite, React, JavaScript, Firebase Authentication, Firebase Firestore

***Happy Coding!***
