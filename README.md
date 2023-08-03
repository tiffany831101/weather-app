# Weather App

![Weather App](https://github.com/tiffany831101/weather-app/assets/39373272/23f5a8a0-1e50-4f33-a284-0b84ef287d2f)

A simple weather app that provides accurate weather forecasts for the next 36 hours in Taiwan.

## Table of Contents

- [Weather App](#weather-app)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
  - [Features](#features)
  - [Technologies](#technologies)

## Usage

### Installation

To run the Weather App on your local machine, follow these steps:

1. Clone the repository.
2. [Install Docker](https://docs.docker.com/engine/install/) (if not already installed).
3. [Install Minikube](https://minikube.sigs.k8s.io/docs/start/) (if not already installed).

### Running the App

To start the Weather App:

1. Start Minikube (if not already running):
   - `minikube start`
2. Verify if Kubernetes is properly set:
   - `kubectl version`
3. Link local Docker to Minikube: 
   - `minikube docker-env`
   - Execute each output line in your terminal.
4. Build Docker Images:
   - `docker build -t weather-page:latest ./page`
   - `docker build -t weather-api:latest ./api`
5. Apply page deployment and services in Kubernetes:
   - `kubectl apply -f page-deployment.yaml`
6. Apply API deployment and services in Kubernetes:
   - `kubectl apply -f api-deployment.yaml`
7. Apply Ingress:
   - `kubectl apply -f weather-app-ingress.yaml`
8. Allow local access to the app:
   - `minikube tunnel`
9.  Open Your Browser and visit `http://localhost`. Enjoy a Sunny Day ☀️!
   - You will see the home page:
   ![Home Page](https://github.com/tiffany831101/weather-app/assets/39373272/9022d7e0-d79e-4692-8fa2-4b634de4f208)
   - Select Your Location:
   ![Select Location](https://github.com/tiffany831101/weather-app/assets/39373272/5365ab5a-54b6-4938-8d87-76195477b330)
   - Have a nice day!
   ![Nice Day](https://github.com/tiffany831101/weather-app/assets/39373272/c4ac5296-23cc-4d3a-8b7f-0f4d0c8b2826)
   - Toggle to Show Preferred Data:
   ![Preferred Data](https://github.com/tiffany831101/weather-app/assets/39373272/fc1efde2-0970-4992-8927-d5aa569e4199)

## Features

- Get weather forecasts for the next 36 hours.
- Displays temperature, weather conditions, and other relevant information.

## Technologies

This Weather App is built using the following technologies:

- Frontend:
  - React
    - Version: ^18.2.0
  - apollo-client
    - Version: ^3.7.17  
  - MUI
    - Version: ^5.14.2
- Backend: GraphQL
  - apollo-server
    - Version: ^3.12.0
- Containerization: 
  - Docker
    - Version: 20.10.14
- Orchestration:
  - Kubernetes (Minikube for development)
    - Version: v1.31.0 

