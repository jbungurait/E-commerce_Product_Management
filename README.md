# E-commerce_Product_Management
A database designed to track products by item, category and tag. 

## User Story

```md
AS A manager at an internet retail company

I WANT a back end for my e-commerce website that uses the latest technologies

SO THAT my company can compete with other e-commerce companies

```

## Acceptance Criteria

```md
GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia

THEN I am able to successfully create, update, and delete data in my database
```

## Uses
This App is designed to manage E-Commerce Products in a database. 

## Install
```md
To use the App, Download the packacge from GitHub.

To initialize the packages run 'npm i' in the comand line.

Set up the Database in mysql by sourcing the 'schema.sql' file.

After the Database has been initialized run 'node seeds/index.js' to initialize the Database seeds.

From there you can initialize the App by running 'node server.js' in the comand line. 
```

## Running the App
```md

Once the App is running open the local host in Insomnia.

You will be able to do a 'GET' request from the 'api' root on 'products', 'categories', and 'tag' routes.

Add the id tag to the 'GET' request to select and individual product, category or tag.

A 'POST' request to each route will create a new item. 

For 'products' the body will look like this- 
"{
      "product_name": "House Stabs",
      "price": 30.00,
      "stock": 4,
	  "category_id": 3,
      "tagIds": [8, 9]
 }"

For 'tags' the body will look like this- 
"{
    "tag_name": "House Music"
}

For 'categories' the body will look like this- 
"{
    "category_name": "Dance Music"
}"

To update info do a 'PUT' request to the specific ID route.

To remove an item do a 'DELETE' request to the specfic ID route.

```

## Video 
[Video](https://drive.google.com/file/d/17XWOi1PF2Uk3FIMfe0GDofXvBNastzbM/view)



## Credits
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [Express](https://www.npmjs.com/package/express)

## Creator
Josh Ungurait
[GitHub](https://github.com/jbungurait/Babylon_Social)