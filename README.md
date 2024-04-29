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
# API Documentation

## authorization Routes

POST /api/v1/auth/register - Registers a new user and authenticate.
Input : {email,name,password}
attaches JSON web token with cookies to be used in subsequent requests.
Output : Returns a JSON object containing the registered user's data (i.e, name,userId,role)

POST /api/v1/auth/login - Authenticate user.
Input : {email, password}
attaches JSON web token with cookies to be used in subsequent requests.
Output : Returns a JSON object containing the registered user's data (i.e, name,userId,role)

GET /api/v1/auth/logout
Output : { "msg" : "user logged out"}

# User Routes

GET /api/v1/user
Output : Array of user related objects only when user with role=admin is authenticated.

GET /api/v1/user/showMe - show current user which is authenticated.

GET /api/v1/user/:id - get single user ,only admin can access this route to get the user with id.

PATCH /api/v1/user/updateUser
Input : { name: userName, userId, role }
Output : Updated User Details

PATCH /api/v1/user/updateUserPassword  
Input : {oldPassword,newPassword}
Output : updated User Details

# Book Routes

GET /api/v1/book?publishedDate={}&author={}
Output : An array of books that matches the search parameters. If no parameter is provided it returns all books.

POST /api/v1/book (only admin can access this route)
Input : {title,author,publicationYear}
Output : {title,author,publicationYear,createdAt,updatedAt}

PATCH /api/v1/book/:id (only admin can access this route)
Input : {title, author,publicationYear} 
Output : {title, author, publicationYear} updated at

DELETE /api/v1/book/:id (only admin can access this route)
Output : {
  "msg": "Success! book removed"
}


To run the server, use npm start from the command line. To test the routes, you can use an application like Postman or Thunder Client.
To run the server, use `node index.js`.
