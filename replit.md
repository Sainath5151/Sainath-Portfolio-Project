# Sainath's Portfolio - Full-Stack Portfolio Application

## Overview

Sainath's Portfolio is a modern, dark-themed portfolio website showcasing professional skills and achievements. The application features a React frontend with shadcn/ui components, an Express.js backend with authentication, and PostgreSQL database integration using Drizzle ORM. The project uses a monorepo structure with shared types and schemas.

## System Architecture

### Full-Stack Architecture
- **Frontend**: React 18 with TypeScript, Vite build system
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with custom dark theme
- **Component Library**: shadcn/ui with Radix UI primitives
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

### Monorepo Structure
- `client/`: React frontend application
- `server/`: Express.js backend API
- `shared/`: Common schemas and types
- Shared configuration files at root

## Key Components

### Frontend Architecture
- **React SPA**: Single-page application with component-based architecture
- **Theme System**: Dark theme with custom "Scorpion" color palette (yellows and grays)
- **Component Library**: Comprehensive UI components from shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Vite for fast development and optimized production builds

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Session Management**: Express sessions for authentication state
- **Password Security**: bcrypt for password hashing
- **Type Safety**: Shared schemas between frontend and backend

### Database Design
Two main entities:
- **Users**: Authentication and user management (id, email, password, name, timestamps)
- **Contacts**: Contact form submissions (id, firstName, lastName, email, subject, message, timestamps)

### Authentication System
- Session-based authentication using express-session
- Password hashing with bcrypt
- Protected routes with middleware
- User signup/login flows with validation

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Authentication**: Session middleware validates user state
3. **Data Validation**: Zod schemas validate request/response data
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Response Handling**: Structured JSON responses with error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon database
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **bcrypt**: Password hashing
- **express-session**: Session management

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **wouter**: Lightweight routing

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type safety
- **drizzle-kit**: Database migrations
- **@replit/vite-plugin-cartographer**: Replit integration

## Deployment Strategy

### Development
- `npm run dev`: Starts Express server with Vite integration
- Hot reload for both frontend and backend changes
- TypeScript checking with `npm run check`

### Production Build
- `npm run build`: Vite builds frontend, esbuild bundles server
- `npm start`: Runs production server from `dist/`
- Database migrations with `npm run db:push`

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `SESSION_SECRET`: Session encryption key
- `NODE_ENV`: Environment setting (development/production)

## Changelog
```
Changelog:
- June 28, 2025. Initial setup
```

## User Preferences

Preferred communication style: Simple, everyday language.