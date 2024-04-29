# digital-paani

Please develop a simple book management API using Node JS. The API
should offer these functionalities:
    User authentication.
    CRUD operations for managing book entries (e.g., title, author,
publication year).
    Filtering books by author or publication year.
    Clear documentation of API endpoints and their usage.
    Implementation of basic security measures (like input validation).

/////////////////////////////////////////////////////////////////////////////
API Documentation
POST /api/register - Registers a new user with the given username and password. Returns a JSON object containing the registered user's data
POST /api/auth - Authenticate user with username and password. Returns JSON web token to be used in subsequent requests.

POST /api/auth - Authenticate user. Returns token if successful.    
{username: "string", password: "string"}  

GET /api/books - Get all books. Requires valid token.  

GET /api/books/:id - Get specific book by id. Requires valid token.  

POST /api/books - Create new book. Requires valid token.  
{title: "string", author: "string", publicationYear: "number"}  

PUT /api/books/:id - Update existing book. Requires valid token.  
Same format as create.    

DELETE /api/books/:id - Delete book with given id. Requires valid token.  

Filtering can be done through query parameters:  
?author=John&year=1995  

Security Measures implemented in this version are: 
- Token based authentication via JSON Web Tokens.
- Input data is validated against a schema to ensure it contains the required fields.

To run the server, use npm start from the command line. To test the routes, you can use an application like Postman or cURL.
To run the server, use `node index.js`. To test routes, use an HTTP client like Postman or cURL.

