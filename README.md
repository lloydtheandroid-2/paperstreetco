# Paper Street Soapbox

A progressive web application (PWA) built with Next.js and Firebase. It provides distinct sandbox environments for developing and testing simple web applications, inspired by the film "Fight Club." The application is designed to be installable, work offline, and provide a fast, seamless user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)

## Features

- **Themed Sandboxes**: Three distinct development environments: 'Project Mayhem,' 'Space Monkeys,' and 'Lou's Basement.'
- **Portfolio Pages**: Dedicated pages for each major project theme.
- **Blog & FAQ**: A shared space for articles and frequently asked questions.
- **PWA Capabilities**: Fully installable on both mobile and desktop for an app-like experience with potential for offline functionality.
- **Modern UI**: Styled with Tailwind CSS and ShadCN UI components for a clean and responsive interface.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (React Framework)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Deployment**: [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Installation & Setup

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone 'https://github.com/theonlytomtom/paperstreetco.git/'
    cd <repository-folder-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Runs the linter to check for code quality issues.
- `npm run genkit:dev`: Starts the Genkit development server.
