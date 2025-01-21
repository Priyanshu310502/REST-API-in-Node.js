# Product Management REST API

This is a REST API built using Node.js and Express to manage products. It allows you to perform CRUD (Create, Read, Update, Delete) operations on products.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
  - [Create Product](#create-product)
  - [Get All Products](#get-all-products)
  - [Get Product By ID](#get-product-by-id)
  - [Update Product](#update-product)
  - [Delete Product](#delete-product)
- [Testing](#testing)
- [License](#license)

## Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://npmjs.com)

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/product-api.git
    cd product-api
    ```

2. Initialize a new Node.js project (if not already done):
    ```bash
    npm init -y
    ```

3. Install required dependencies:
    ```bash
    npm install express mongoose
    ```

## Usage

1. Create the necessary directories:
    ```bash
    mkdir controllers routes models
    ```

2. Create the following files:

    - **app.js** - Main entry point for the application.
    - **controllers/productController.js** - Handle the business logic for product-related operations.
    - **routes/productRoutes.js** - Define the API routes.
    - **models/product.js** - Define the product schema.

### app.js
```javascript
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use product routes
app.use('/api/products', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
