# product-crud

<div>
  <img src="https://ik.imagekit.io/Theryston/Screenshot_20210514-161905__1__Vcll3_Oqz.png">
</div>

### 🔖 about
this is a product management system, in which you can register, change and delete your store's products

### technologies 
- Javascript
- Node.js
- Typescript
- Angular
- MySQL
- Express

### installing

#### cloning repository
```bash
# cloning repository
git clone https://github.com/Theryston/product-crud.git

# accessing the project
cd blog product-crud

# accessing the backend
cd backend

# installing the backend dependencies
npm i

# accessing the root folder
cd ..

# accessing the frontend
cd frontend

# installing the frontend dependencies
npm i

# accessing the root folder
cd ..
```

#### database
after cloning the project to your machine you need to set up a database so that the application can store product data.

we use MySQL as the default database. if you do not have MySQL installed on your machine, it is necessary to do the installation!  if you have problems with this search on YouTube!

now you need to create a database within MySQL to save your product data (the database can have any name that does not interfere with the project's operation)

#### environment variables
after having followed all the previous steps now it's time to set the environment variables!

inside the backend folder create a file with the name .env

inside this file paste the following structure:

```shell
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
```
place after the symbol = the following data:
> DB_NAME enter the name of the database you created

> DB_USER enter your MySQL user

> DB_PASSWORD enter your MySQL user password

> DB_HOST enter the host from which your MySQL database is running (by default it is localhost)

#### starting application
run:
```bash
cd backend
npm start
```
open a new terminal tab and run:
```bash
# don't forget the frontend prefix at the end of the path
cd path/to/project/frontend
npm start
```

now you can use the application accessing: http://localhost:4200