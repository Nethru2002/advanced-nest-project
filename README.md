# Advanced NestJS API Project

This is a fully functional, advanced REST API built with NestJS. It serves as a boilerplate for building robust backend services and includes modern best practices for development and deployment.

## ✨ Features

- **Core Framework:** [NestJS](https://nestjs.com/)
- **Authentication:** JWT (JSON Web Tokens) with [Passport.js](http://www.passportjs.org/) for user registration and login.
- **Authorization:** Route protection using Guards.
- **Database:** PostgreSQL with [TypeORM](https://typeorm.io/) for object-relational mapping.
- **CRUD Operations:** Full Create, Read, Update, Delete functionality for Blog Posts.
- **Validation:** `class-validator` and `class-transformer` for incoming request data.
- **Configuration:** Environment-based configuration using `@nestjs/config`.
- **API Documentation:** Automated Swagger (OpenAPI) documentation via `@nestjs/swagger`.
- **Containerization:** Docker and Docker Compose for easy setup and deployment.
- **Error Handling:** A global exception filter for consistent error responses.

## ✅ Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/) (v20 or higher recommended)
- [Docker](https://www.docker.com/products/docker-desktop/) and Docker Compose

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nethru2002/advanced-nest-project.git
    cd advanced-nest-project
    ```

2.  **Create your environment file:**
    Copy the example environment file and update it with your own values.
    ```bash
    cp .env.example .env
    ```
    Open the `.env` file and fill in the required variables, especially `JWT_SECRET`.

3.  **Build and run with Docker Compose:**
    This single command will build the NestJS application image, start the PostgreSQL database container, and run the application.

    ```bash
    docker-compose up --build
    ```

The API will be running and accessible at `http://localhost:3000`.

## 📚 API Documentation

Once the application is running, you can access the interactive Swagger API documentation in your browser at:

**[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

From there, you can explore all the available endpoints and test them directly.

## ⚙️ How to Use the API

1.  **Register a User:** Use the `POST /auth/register` endpoint.
2.  **Login:** Use the `POST /auth/login` endpoint to receive a JWT `access_token`.
3.  **Authorize:** Click the "Authorize" button in Swagger and enter `Bearer <your_access_token>` to access protected routes.
4.  **Create, Read, Update, Delete Posts:** Use the endpoints under the "Posts" section.