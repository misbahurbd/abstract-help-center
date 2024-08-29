# Abstract Help Center

The Abstract Help Center is a full-stack project that provides a simple support request management system. This application allows users to create, retrieve, and manage support request cards through a RESTful API.

## Assignment Question

1. How can you implement shared functionality across a component tree?
   Ans: Use the Context API for global state, Higher-Order Components for adding functionality, custom hooks for reusable logic, render props for flexible sharing, or lift state up to a common ancestor.

2. Why is the useState hook appropriate for handling state in a complex component?
   Ans: The useState hook manages local state, keeps logic contained, offers a simple API for updates, and ensures automatic re-rendering when state changes.

## Technology Stack

- **Frontend:** Vite, React.js, React Router Dom, React Hook Form, Zod, Tailwind CSS, Axios
- **Backend:** TypeScript, Express.js, PostgreSQL with Prisma ORM, Zod, dotenv, CORS, http-status

## Live Demo

- Backend Test Server: [Abstract Backend](https://abstract-backend-one.vercel.app/ping)
- Frontend Test Live View: [Abstract Frontend](https://abstract-frontend-beta.vercel.app/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/misbahurbd/abstract-help-center.git
```

### 2. Backend Setup

For frontend setup instructions, refer to the [Frontend README](./frontend/README.md).

For backend setup instructions, refer to the [Backend README](./backend/README.md).

## Future Enhancements

- User Authentication and Roles
- Advanced Filtering and Pagination
- Logging and Monitoring Tools
