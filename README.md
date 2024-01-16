
# Angular CRUD App with Local Database
This Angular application demonstrates basic CRUD operations (Create, Read, Update, Delete) using a local database, to manage employee details. It allows users to manage data records efficiently within the app.

**Features**
Login/Logout with authentication
Create new records.
Read and display existing records.
Update records.
Delete records.
Local database for data storage.

**Prerequisites**
Before running the app, ensure you have the following dependencies installed:

**Node.js** - JavaScript runtime.
**Angular CLI**- Command Line Interface for Angular.
**Angular** - The Angular framework.

Navigate to the project directory, install project dependencies:

```bash
npm install
```
Usage
 
Start up the JSON Server by typing this command into your terminal:

```bash
json-server --watch db.json
```

This will run the server on "https://localhost:3000" by default. You could also view the raw database on your browser with the given link

Start the angular application by navigating to the main directory and typing this command into your terminal:

```bash
ng serve
```

The app will be available at http://localhost:4200/. The development server will automatically reload the app when you make changes to the source code.

Open your web browser and access the app at http://localhost:4200/.

Use the app to perform CRUD operations on the local database.

**Database**
The application uses a local database to store data records. The database is initialized with sample data for demonstration purposes.

**Technologies Used**
Angular - Front-end framework for building web applications.
TypeScript - Superset of JavaScript for type-checking and tooling.
LocalStorage - Using db.json for a mock database server. 






