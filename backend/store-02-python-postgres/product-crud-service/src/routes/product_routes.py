from flask import Blueprint, request, jsonify
from src.models.product import Product

product_bp = Blueprint('product', __name__)

@product_bp.route('/products', methods=['POST'])
def create_product():
    data = request.json
    product = Product(name=data['name'], description=data['description'], price=data['price'])
    product.create()
    return jsonify(product.to_dict()), 201

@product_bp.route('/products', methods=['GET'])
def get_products():
    products = Product.get_all()
    return jsonify([product.to_dict() for product in products]), 200

@product_bp.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = Product.get_by_id(product_id)
    if product:
        return jsonify(product.to_dict()), 200
    return jsonify({'message': 'Product not found'}), 404

@product_bp.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    data = request.json
    product = Product.get_by_id(product_id)
    if product:
        product.name = data['name']
        product.description = data['description']
        product.price = data['price']
        product.update()
        return jsonify(product.to_dict()), 200
    return jsonify({'message': 'Product not found'}), 404

@product_bp.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    product = Product.get_by_id(product_id)
    if product:
        product.delete()
        return jsonify({'message': 'Product deleted'}), 204
    return jsonify({'message': 'Product not found'}), 404