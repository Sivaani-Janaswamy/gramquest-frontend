# Gramquest Frontend

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
[![Last Commit](https://img.shields.io/github/last-commit/Sivaani-Janaswamy/gramquest-frontend)](https://github.com/Sivaani-Janaswamy/gramquest-frontend)
[![Issues](https://img.shields.io/github/issues/Sivaani-Janaswamy/gramquest-frontend)](https://github.com/Sivaani-Janaswamy/gramquest-frontend/issues)
[![Build](https://img.shields.io/github/actions/workflow/status/Sivaani-Janaswamy/gramquest-frontend/node.js.yml?branch=main)](https://github.com/Sivaani-Janaswamy/gramquest-frontend/actions)
[![License](https://img.shields.io/github/license/Sivaani-Janaswamy/gramquest-frontend)](https://opensource.org/licenses/MIT)


## Quick Setup Guide

This repository contains the frontend client for **Gramquest – Your Social Knowledge Hub**. It's built with React JS and Tailwind CSS, providing the user interface and interacting with the Gramquest Backend API.

### Technologies Used

* React JS
* Tailwind CSS
* JavaScript (ES6+)
* React Router (for navigation)
* Axios (for API calls)

### Prerequisites

Ensure you have these installed on your machine:

* [Node.js](https://nodejs.org/) (LTS version recommended)
* [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)
* A modern web browser (Chrome, Firefox, Edge, Safari)

### Setup Instructions

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/gramquest-frontend.git](https://github.com/your-username/gramquest-frontend.git)
    cd gramquest-frontend
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```
3.  **Backend Server:**
    Ensure the [Gramquest Backend](https://github.com/your-username/gramquest-backend) is running. This frontend expects the backend to be accessible, typically at `http://localhost:5000`. You might need to configure a proxy in `package.json` or set `REACT_APP_BACKEND_URL` in a `.env` file if your backend is not on `localhost:5000`.

### Running the Frontend

To start the React development server:

```bash
npm start
# OR
yarn start
````

The application will typically open in your browser at `${import.meta.env.VITE_REACT_APP_API_URL}`.

-----

## Contributing

We welcome contributions\! Please follow these steps:

1.  **Fork the repository** to your GitHub account.
2.  **Clone your forked repository** to your local machine:
    ```bash
    git clone [https://github.com/your-github-username/gramquest-frontend.git](https://github.com/your-github-username/gramquest-frontend.git)
    cd gramquest-frontend
    ```
3.  **Create a new branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name 
    # OR
    git checkout -b bugfix/issue-description
    ```
4.  **Make your changes** and commit them with a clear message:
    ```bash
    git add .
    git commit -m "feat: Implement new post creation form"
    ```
5.  **Push your changes** to your forked repository:
    ```bash
    git push origin feature/your-feature-name
    ```
6.  **Open a Pull Request** from your forked repository's branch to the `main` branch of the original Gramquest Frontend repository.
