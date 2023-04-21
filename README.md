# TechReal

An ecommerce FullStack application built utilizing Javascript, Node.js, Express, postgreSql, React and the Stripe API.

## Description

A functional ecommerce application where users can buy different pieces of tech. Its purpose is to provide shoppers with a seamless way to purchase tech, using Stripe to checkout, from an online store. Customers can browse the catalog, read more about a specific product and select an amount to add to their cart. Once the customer is ready to checkout, they can select their cart, look through their items before checking out along with updating the quantity, or removing any products. They can also see the price per product and the total price of their cart. Currently 5 items can be added per product and up to 10 can be bought in the checkout page. Finally, once the customer is done, they can checkout and pay with Stripe. They will be redirected to a Stripe checkout page where they can see the products currently being purchased, the quantity of each product and the total price one last time before paying. Customer will be redirected to the home page indicating a successful purchase. The company will recieve the order to ship the items completing the online shopping experience.

## How to Install

1. Clone this Project
2. Assuming you have Node.js and npm installed, run "npm install" to install all the dependencies needed.
3. Create an ElephantSQL account to add your own products to your table and set up your URL connection string in the .env file. - https://customer.elephantsql.com/login
4. Create a Stripe account and add the public Stripe api key to your frontend .env file and the private Stripe api key to your backend .env file. - https://dashboard.stripe.com/test/dashboard
5. In the root directory run `npm run dev` to get the server up and running on your selected port.
6. In the root directory, cd into the client folder and run `npm run dev` to get your frontend running on port 5173.

## Currently Working On

1. Integrating a Successful checkout page after making a purchase through Stripe instead of just redirecting to the Home products page.
2. Showing an item being out of stock
3. Filtering items based on type of tech looking for
