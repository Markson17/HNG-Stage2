# CRUD API for Managing Persons(HNG-Stage2-Task)

This is a simple REST API for performing CRUD (Create, Read, Update, Delete) operations on a "person" resource. It allows you to add, retrieve, update, and delete person records.

## Table of Contents

- [Swagger Documentation](#swagger-documentation)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [UML Diagram](#uml-diagram)
- [Deployment](#deployment)

## Swagger Documentation

You can access the Swagger documentation for this API at `https://hng-stage2-0d2o.onrender.com/api-docs/`. The Swagger UI provides detailed information about the API endpoints, request schemas, and example requests and responses.
![Swagger Documentation of CRUD API](swagger-docs.png)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or access to a MongoDB instance.
- Git (optional, for cloning the repository).

## Getting Started

### Installation

1. Clone the repository (or download the ZIP file):

   ```bash
   git clone https://github.com/Markson17/HNG-Stage2.git
   ```

2. Navigate to the project directory:

   ```bash
   cd HNG-Stage2
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `config` folder in the project root directory.

2. Inside the `config` folder, create a `config.env` file with the following configuration:

   ```plaintext
   PORT=3000
   MONGO_URI=your-mongodb-connection-string


## Usage

### API Endpoints

- **Create a new person:**

  ```http
  POST /api

  Request Body:
  {
    "name": "Favour Markson"
  }
  ```

- **Retrieve details of a person:**

  ```http
  GET /api/:id
  ```

- **Update details of an existing person:**

  ```http
  PATCH /api/:id

  Request Body:
  {
    "name": "Updated Name"
  }
  ```

- **Remove a person:**

  ```http
  DELETE /api/:id
  ```

## Testing

To test the API endpoints, you can use tools like Postman or write automated tests using testing libraries like Mocha and Chai. Ensure that you have the necessary testing environment set up.

1. Start the API server:

   ```bash
   npm start
   ```

2. Use your chosen testing tool to send requests to the API endpoints.

## UML Diagram

Here is the UML (Unified Modeling Language) diagram representing the structure and relationships of this API's classes and models:

![UML Diagram](CRUD.jpg)


## Deployment

I deployed this project to Render. You can view the live API at [https://hng-stage2-0d2o.onrender.com/api](https://hng-stage2-0d2o.onrender.com/api-docs).
