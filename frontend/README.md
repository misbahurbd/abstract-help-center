# Abstract - Help Center - Frontend

The Abstract Help Center is a foundational full-stack project designed to provide a simple yet effective support request management system. It allows users to create and retrieve support request cards via a RESTful API.

## Technology Stack:

- **Programming Language:** TypeScript
- **Web Framework:** Vite, ReactJs
- **Routing:** React Router Dom
- **Form Handing:** React Hook form
- **Validation:** Zod for schema validation
- **Deployment:** Vercel

**Test Live View:** https://abstract-frontend-beta.vercel.app/

## Getting Started

### 1. Clone the repository:

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/misbahurbd/abstract-help-center.git
```

### 2. Navigate to the Project Directory:

Move into the frontend directory to begin working with the frontend-side code:

```bash
cd abstract-help-center/frontend
```

### 3. Install dependencies:

Install the required Node.js packages using npm:

```bash
npm install
```

### 4. Configuration:

Create a .env file in the project root directory with the following configuration to connect to your PostgreSQL database:

```env
VITE_API_ENDPOINT=<BACKEND_API_ENDPOINT>
```

### 5. Start Development Server

To run the server in development mode, execute:

```bash
npm run dev
```

Server will start on `http://localhost:5173`

## Future Enhancements

While the current implementation provides a solid foundation for managing support requests, there are several areas for potential enhancement:

- **User Authentication:** Implementing user roles and authentication to secure API endpoints.
- **Advanced Filtering:** Adding more sophisticated filtering options for the cards.
- **Pagination:** Implementing pagination for the GET /cards endpoint to handle large datasets efficiently.
- **Logging and Monitoring:** Integrating logging and monitoring tools for better observability in production.
