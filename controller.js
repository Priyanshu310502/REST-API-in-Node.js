const { ProductModel } = require('./model');

class ProductController {
    // Create a new product
    static createProduct = async (req, res) => {
        try {
            const { name, description, price, quantity, category, inStock } = req.body;

            if (!name || !description || !price || !quantity || !category) {
                return res.status(400).json({
                    error: 'All fields (name, description, price, quantity, category) are required',
                });
            }

            const product = await ProductModel.create({
                name,
                description,
                price,
                quantity,
                category,
                inStock,
            });

            res.status(201).json({
                message: 'Product created successfully',
                product,
            });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to create product',
                details: error.message,
            });
        }
    };

    // Get all products
    static getProducts = async (req, res) => {
        try {
            const products = await ProductModel.find();

            // if No products available
            if (products.length === 0) {
                return res.status(404).json({
                    message: 'No products found',
                });
            }

            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch products',
                details: error.message,
            });
        }
    };

    // Get a single product by ID
    static getProductById = async (req, res) => {
        try {
            const { id } = req.params;

            const product = await ProductModel.findById(id);

            // if Product not found
            if (!product) {
                return res.status(404).json({
                    error: 'Product not found',
                });
            }

            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch product',
                details: error.message,
            });
        }
    };

    // Update a product by ID
    static updateProduct = async (req, res) => {
        try {
            const { id } = req.params;

            const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });

            // if  Product not found
            if (!updatedProduct) {
                return res.status(404).json({
                    error: 'Product not found',
                });
            }

            res.status(200).json({
                message: 'Product updated successfully',
                product: updatedProduct,
            });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to update product',
                details: error.message,
            });
        }
    };

    // Delete a product by ID
    static deleteProduct = async (req, res) => {
        try {
            const { id } = req.params;

            const deletedProduct = await ProductModel.findByIdAndDelete(id);

            // if Product not found
            if (!deletedProduct) {
                return res.status(404).json({
                    error: 'Product not found',
                });
            }

            res.status(200).json({
                message: 'Product deleted successfully',
            });
        } catch (error) {
            res.status(500).json({
                error: 'Failed to delete product',
                details: error.message,
            });
        }
    };
}

module.exports = { ProductController };
