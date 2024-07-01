
# MySQL_BOOKS

This project is a simple implementation to learn how to work with MySQL in a Node.js environment. It provides basic CRUD operations to manage a collection of books using a React frontend.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js
- MySQL

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/raihanwebmaster/MySQL_BOOKS.git
   cd MySQL_BOOKS
   ```

2. Install the backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Set up the MySQL database:

   - Create a database named `books_db`.
   - No need to import any SQL files. The server will handle database interactions.

4. Configure environment variables:

   Create a `.env` file in the `backend` directory and add your MySQL configuration:

   ```env
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=books_db
   ```

5. Start the backend server:

   ```bash
   cd backend
   node index.js
   ```

6. (Optional) If you have a frontend, you can add it to the `client` directory and configure it accordingly.

## Usage

- The backend server runs at `http://localhost:5000`.
- Available API endpoints:
  - `GET /books` - Retrieve all books.
  - `GET /books/:id` - Retrieve a book by ID.
  - `POST /books` - Add a new book.
  - `DELETE /books/:id` - Delete a book by ID.

## Project Structure

```
MySQL_BOOKS/
├── backend/          # Node.js backend
│   ├── index.js      # Server setup
│   ├── package-lock.json
│   ├── package.json
├── client/           # React frontend (if applicable)
├── .gitignore
├── README.md         # Project documentation
```

## Features

- **Node.js Backend**: API endpoints for CRUD operations with MySQL database.
- **MySQL Integration**: Demonstrates how to connect and perform basic operations with a MySQL database in Node.js.

## Technologies

- **Backend**:
  - Node.js
  - Express.js
  - MySQL

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
