# Medicine-index
 
A basic web application where a user can view and search different medicine from the system and an admin can create, read, update and delete items from the system. For the frontend part, i used React and django is used for the backend.

To run this in your machine:
 
 1. go to crud directory and type "python manage.py runserver" in the terminal to run the backend.
 2. then go to frontend directory and type npm install to install all the node modules and type "npm start" to start the frontend.

A user can only view and search items by name or generic name of a medicine where if you logged in as admin you can perform the CRUD operations.
There is no authentication and authorization by using JWT token here for this simple project.

Credentials for admin:
email : admin@gmail.com
password: 1234
