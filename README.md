# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

//* State Management Tool

Redux Toolkit was added as the Global State Management Library.

// Styling

Tailwind CSS was installed and configured for the styling of this Quiz Application.


// Installing Dependencies

### `npm install`

Use This command to install all the neccessary dependecies required to run this project.


// Approach Followed to build this application.

1. Made a separate folder for components , assets ,utils,constants to provide a separation of concern for each component.

2. Api Data was fetched and stored in the global store so that any component that needs the data can access it via the store.

3. React-router-dom was used as the navigation library to provide basic routes and navigation.

4. Local state were used for the components to hold the local values.

// Steps to run the application

1. You will land on the home screen where you have to enter an email address which will take you to the quiz page.

2. You can attempt the quiz and navigate between the questions using the button provided with the question No.


3. The question that you attempted will be marked as green indicating that it is already attempted.

4. When you complete the quiz . You will land on the reports page which will show you the correct answer and the answer you have marked.