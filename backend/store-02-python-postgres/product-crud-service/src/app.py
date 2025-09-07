from flask import Flask
from src.routes.product_routes import product_routes

app = Flask(__name__)

# Middleware can be added here

app.register_blueprint(product_routes)

if __name__ == "__main__":
    app.run(debug=True)