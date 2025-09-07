# Product CRUD Service

This project is a simple CRUD web service for managing products using Flask and PostgreSQL. It allows users to create, read, update, and delete product entries in a PostgreSQL database.

## Project Structure

```
product-crud-service
├── src
│   ├── app.py               # Entry point of the application
│   ├── models
│   │   └── product.py       # Product model definition
│   ├── routes
│   │   └── product_routes.py # Routes for product CRUD operations
│   ├── db
│   │   └── connection.py     # Database connection management
│   └── utils
│       └── __init__.py      # Utility functions and constants
├── requirements.txt          # Project dependencies
├── README.md                 # Project documentation
└── .env                      # Environment variables
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd product-crud-service
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```
   pip install -r requirements.txt
   ```

4. **Configure the database:**
   Create a `.env` file in the root directory and add your PostgreSQL connection details:
   ```
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_NAME=your_database
   ```

5. **Run the application:**
   ```
   python src/app.py
   ```

## Usage

- **Create a product:** Send a POST request to `/products` with product details.
- **Retrieve all products:** Send a GET request to `/products`.
- **Retrieve a product:** Send a GET request to `/products/<id>`.
- **Update a product:** Send a PUT request to `/products/<id>` with updated product details.
- **Delete a product:** Send a DELETE request to `/products/<id>`.

## License

This project is licensed under the MIT License.