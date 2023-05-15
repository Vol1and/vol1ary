# Vol1ary - Personal Diary

Vol1ary is a personal diary application designed to help you track various aspects of your lifestyle. It is more than just a simple to-do list; it includes several features to support your overall well-being and personal growth. With Vol1ary, you can:

- **Track Mental & Physical Health**: Keep a record of your mental and physical health to gain insights into your well-being. Monitor your mood, emotions, energy levels, and any relevant notes you want to capture.

- **Track Habits**: Build and maintain healthy habits with the habit tracking feature. Set goals for yourself and track your progress over time. Vol1ary provides visual cues to help you stay motivated and on track.

- **Track Trainings**: Customize your training regimen by adding different types of exercises. Whether it's cardio, strength training, or yoga, Vol1ary allows you to create a personalized training plan that suits your needs. Keep track of your workouts and monitor your progress.

- **Gather Statistics**: Vol1ary compiles and presents statistics based on the information you input. This allows you to analyze your well-being and track your progression over time. Gain valuable insights into how your lifestyle choices impact your overall health and make informed decisions.

## Stack

The Vol1ary project is built using the following technologies and tools:

- **React.js with SSR using Next.js**: The project is written using React.js and utilizes server-side rendering (SSR) through Next.js. This ensures efficient rendering and enhanced performance.

- **Typescript**: The entire codebase is fully typed with TypeScript, leaving no line of code ignored. This provides better code quality, improved maintainability, and helps catch potential errors during development.

- **Custom UI-kit + Antd components**: The project utilizes a custom UI-kit along with a selection of components from Antd. This combination provides a visually appealing and consistent user interface design.

- **Unit tests**: The UI-kit has been developed using Test-Driven Development (TDD) principles and is extensively covered with unit tests. This ensures robustness and helps identify and prevent regressions.

- **PostCSS & Tailwind**: The project utilizes PostCSS, a versatile CSS post-processor, and Tailwind, a utility-first CSS framework. This combination offers flexibility in styling and allows for efficient development and customization.

- **Dockerization**: The project is dockerized, making it easy to deploy and run in various environments. With a simple click, you can build and set up the project effortlessly.

# Project with Docker Compose - Getting Started

This project is set up to be run using Docker Compose, allowing for easy deployment and management of containers. Follow the steps below to get started.

## Prerequisites

Make sure you have the following prerequisites installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Installation

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Vol1and/vol1ary.git

2. Navigate to the project's directory:

   ```bash
   cd vol1ary

3. Build the Docker images and start the containers using Docker Compose:   

   ```bash
   docker-compose up --build
