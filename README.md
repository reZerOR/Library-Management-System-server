# Library Management System API

## Description
A comprehensive backend API for managing library operations including book management, member management, and borrowing services. Built with Node.js, Express.js, TypeScript, and Prisma ORM, this system provides a robust solution for libraries to digitize their operations.

## Live URL
[live server](https://library-management-server-coral.vercel.app/)

## Technology Stack & Packages

### Core Technologies
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM

### Dependencies
```json
{
  "dependencies": {
    "@prisma/client": "^5.22.0",
    "cors": "^2.8.5",
    "express": "^4.21.1"
  }
}
```

### Dev Dependencies
```json
{
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^5.0.0",
    "@types/node": "^22.9.0",
    "prisma": "^5.22.0",
    "tsx": "^4.19.2",
    "typescript": "^5.6.3"
  }
}
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```

4. **Database Setup**
   ```bash
   npx prisma migrate dev
   ```

5. **Run the Application**
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm run build
     npm start
     ```

## Key Features & Functionality

### 1. Book Management
- Create, Read, Update, and Delete books
- Track total and available copies
- Manage book metadata (title, genre, published year)

### 2. Member Management
- Register new library members
- Update member information
- Track membership details
- Remove members from the system

### 3. Borrowing System
- Borrow books with automatic availability tracking
- Return books with date tracking
- View overdue books
- 14-day borrowing period

## API Documentation

### Book Endpoints

#### 1. Create Book
```http
POST /api/books
```
Request Body:
```json
{
  "title": "To Kill a Mockingbird",
  "genre": "Fiction",
  "publishedYear": 1960,
  "totalCopies": 10,
  "availableCopies": 10
}
```
Response (201):
```json
{
  "success": true,
  "status": 201,
  "message": "Book created successfully",
  "data": {
    "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "publishedYear": 1960,
    "totalCopies": 10,
    "availableCopies": 10
  }
}
```

#### 2. Get All Books
```http
GET /api/books
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Books retrieved successfully",
  "data": [
    {
      "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
      "title": "To Kill a Mockingbird",
      "genre": "Fiction",
      "publishedYear": 1960,
      "totalCopies": 10,
      "availableCopies": 10
    }
  ]
}
```

#### 3. Get Book by ID
```http
GET /api/books/:bookId
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Book retrieved successfully",
  "data": {
    "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "publishedYear": 1960,
    "totalCopies": 10,
    "availableCopies": 10
  }
}
```

#### 4. Update Book
```http
PUT /api/books/:bookId
```
Request Body:
```json
{
  "title": "To Kill a Mockingbird - Revised",
  "genre": "Classic Fiction",
  "publishedYear": 1961,
  "totalCopies": 12,
  "availableCopies": 8
}
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Book updated successfully",
  "data": {
    "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
    "title": "To Kill a Mockingbird - Revised",
    "genre": "Classic Fiction",
    "publishedYear": 1961,
    "totalCopies": 12,
    "availableCopies": 8
  }
}
```

#### 5. Delete Book
```http
DELETE /api/books/:bookId
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Book successfully deleted"
}
```

### Member Endpoints

#### 1. Create Member
```http
POST /api/members
```
Request Body:
```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "phone": "123-456-7890",
  "membershipDate": "2024-01-01T00:00:00.000Z"
}
```
Response (201):
```json
{
  "success": true,
  "status": 201,
  "message": "Member created successfully",
  "data": {
    "memberId": "8765-4321-1098",
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "phone": "123-456-7890",
    "membershipDate": "2024-01-01T00:00:00.000Z"
  }
}
```

#### 2. Get All Members
```http
GET /api/members
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Members retrieved successfully",
  "data": [
    {
      "memberId": "8765-4321-1098",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "phone": "123-456-7890",
      "membershipDate": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### 3. Get Member by ID
```http
GET /api/members/:memberId
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Member retrieved successfully",
  "data": {
    "memberId": "8765-4321-1098",
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "phone": "123-456-7890",
    "membershipDate": "2024-01-01T00:00:00.000Z"
  }
}
```

#### 4. Update Member
```http
PUT /api/members/:memberId
```
Request Body:
```json
{
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com",
  "phone": "098-765-4321"
}
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Member updated successfully",
  "data": {
    "memberId": "8765-4321-1098",
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "phone": "098-765-4321"
  }
}
```

#### 5. Delete Member
```http
DELETE /api/members/:memberId
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Member successfully deleted"
}
```

### Borrow & Return Endpoints

#### 1. Borrow Book
```http
POST /api/borrow
```
Request Body:
```json
{
  "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
  "memberId": "a24df67b-1234-5678-9101-b2a3c5d7f098"
}
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Book borrowed successfully",
  "data": {
    "borrowId": "a24df67b-1234-5678-9101-b2a3c5d7f",
    "bookId": "a24df67b-1234-5678-9101-b2a3c5d7f9b1",
    "memberId": "8765-4321-1098",
    "borrowDate": "2024-09-01T10:00:00.000Z"
  }
}
```

#### 2. Return Book
```http
POST /api/return
```
Request Body:
```json
{
  "borrowId": "a24df67b-1234-5678-9101-b2a3c5d7f"
}
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Book returned successfully"
}
```

#### 3. Get Overdue Books
```http
GET /api/borrow/overdue
```
Response (200):
```json
{
  "success": true,
  "status": 200,
  "message": "Overdue borrow list fetched",
  "data": [
    {
      "borrowId": "b1234",
      "bookTitle": "To Kill a Mockingbird",
      "borrowerName": "John Doe",
      "overdueDays": 5
    }
  ]
}
```

### Error Responses
All endpoints may return error responses in the following format:
```json
{
  "success": false,
  "status": 400,
  "message": "Error message description"
}
```
Common status codes:
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

## Known Issues/Bugs

1. **Email Validation**
   - The system currently lacks email validation for member registration
   - Future updates will implement proper email format validation

2. **Book Availability Tracking**
   - The `availableCopies` count is not automatically decremented when books are borrowed
   - Manual update of available copies is required
