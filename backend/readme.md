# Abstract - Help Center - Backend

The Abstract Help Center is a foundational full-stack project designed to provide a simple yet effective support request management system. It allows users to create and retrieve support request cards via a RESTful API.

## Technology Stack:

- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Database:** PostgreSQL with Prisma ORM
- **Validation:** Zod for schema validation
- **Deployment:** Vercel

## Features

- **Request Card Management:** Create, retrieve, and manage support request cards through well-defined API endpoints.
- **Card Search:** Easily search and filter support cards based on titles or specific keywords.

**Test server:** https://abstract-backend-one.vercel.app/ping

## Getting Started

### 1. Clone the repository:

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/misbahurbd/abstract-help-center.git
```

### 2. Navigate to the Project Directory:

Move into the backend directory to begin working with the server-side code:

```bash
cd abstract-help-center/backend
```

### 3. Install dependencies:

Install the required Node.js packages using npm:

```bash
npm install
```

### 4. Configuration:

Create a .env file in the project root directory with the following configuration to connect to your PostgreSQL database:

```env
PORT=<PORT_NUMBER>
DATABASE_URL=<POSTGES_DATABASE_URI>
```

### 5. Start Development Server

To run the server in development mode, execute:

```bash
npm run dev
```

Server will start on `http://localhost:4600` as `PORT` on .env file

## API Endpoints

### 1. Create a Support Request Card:

- Endpoint: **POST /cards** `Public`
- Request body: Contain card data object in JSON.
- Example URL: `http://localhost:4600/cards`
- Example Request Body:

```json
{
  "title": "Branches",
  "description": "Abstract Branches lets you manage, version, and document your designs in one place.",
  "link": "https://www.abstract.com/branches"
}
```

- Example Response:

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Card created successfully!",
  "data": {
    "id": "7f3ebf51-7a5c-4f4b-9a87-ee04c1c41a5e",
    "title": "Branches",
    "description": "Abstract Branches lets you manage, version, and document your designs in one place.",
    "link": "https://www.abstract.com/branches",
    "createdAt": "2024-08-29T03:14:10.704Z",
    "updatedAt": "2024-08-29T03:14:10.704Z"
  }
}
```

### 2. Get Card by Title:

- Endpoint: **GET /cards/:title** `Public`
- Example URL: `http://localhost:4600/cards/branches`
- Example Response:

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Card data retrive successfully!",
  "data": {
    "id": "7b9487aa-fbfa-4464-a6e3-ecb2bfc1163f",
    "title": "Branches",
    "description": "This is a test brances",
    "link": "https://www.test.com/branches",
    "createdAt": "2024-08-28T16:39:48.066Z",
    "updatedAt": "2024-08-28T16:39:48.066Z"
  }
}
```

### 3. Get All Cards:

- Endpoint: **GET /cards** `Public`
- Query: user `search` in search params to perform search query.
- Example URL: `http://localhost:4600/cards?search=manage your account`
- Example Response:

```json
{
  "statusCode": 200,
  "success": true,
  "message": "All card data retrive successfully!",
  "data": [
    {
      "id": "7f3ebf51-7a5c-4f4b-9a87-ee04c1c41a5e",
      "title": "Branches",
      "description": "Abstract Branches lets you manage, version, and document your designs in one place.",
      "link": "https://www.abstract.com/branches",
      "createdAt": "2024-08-29T03:14:10.704Z",
      "updatedAt": "2024-08-29T03:14:10.704Z"
    },
    {
      "id": "4b89b41e-96d7-42e3-bafb-b29479576b24",
      "title": "Manage your account",
      "description": "Configure your account settings, such as your email, profile details, and password.",
      "link": "https://www.abstract.com/manage-your-account",
      "createdAt": "2024-08-29T03:15:52.633Z",
      "updatedAt": "2024-08-29T03:15:52.633Z"
    },
    {
      "id": "d0903397-8ab0-4c53-a08e-f1b46668f60d",
      "title": "Manage organizations, teams, and projects",
      "description": "Use Abstract organizations, teams, and projects to organize your people and your work.",
      "link": "https://www.abstract.com/manage-organizations",
      "createdAt": "2024-08-29T03:16:13.401Z",
      "updatedAt": "2024-08-29T03:16:13.401Z"
    },
    {
      "id": "f787a600-8e15-4d50-835c-6355fcd57847",
      "title": "Manage billing",
      "description": "Change subscriptions and payment details.",
      "link": "https://www.abstract.com/manage-billing",
      "createdAt": "2024-08-29T03:16:38.454Z",
      "updatedAt": "2024-08-29T03:16:38.454Z"
    },
    {
      "id": "457d3250-4a3f-41dd-9367-c74908accf8b",
      "title": "Authenticate to Abstract",
      "description": "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
      "link": "https://www.abstract.com/authenticate-to-abstract",
      "createdAt": "2024-08-29T03:17:14.110Z",
      "updatedAt": "2024-08-29T03:17:14.110Z"
    },
    {
      "id": "79d51d79-d946-485d-a7c4-5d3b2a0f0cac",
      "title": "Abstract support",
      "description": "Get in touch with a human.",
      "link": "https://www.abstract.com/support",
      "createdAt": "2024-08-29T03:17:34.388Z",
      "updatedAt": "2024-08-29T03:17:34.388Z"
    }
  ]
}
```

## Future Enhancements

While the current implementation provides a solid foundation for managing support requests, there are several areas for potential enhancement:

- **User Authentication:** Implementing user roles and authentication to secure API endpoints.
- **Advanced Filtering:** Adding more sophisticated filtering options for the cards.
- **Pagination:** Implementing pagination for the GET /cards endpoint to handle large datasets efficiently.
- **Logging and Monitoring:** Integrating logging and monitoring tools for better observability in production.
