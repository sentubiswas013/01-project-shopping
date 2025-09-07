import psycopg2
from db.connection import get_db_connection

class Product:
    def __init__(self, id, name, description, price):
        self.id = id
        self.name = name
        self.description = description
        self.price = price

    @classmethod
    def create(cls, name, description, price):
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO products (name, description, price) VALUES (%s, %s, %s) RETURNING id;",
            (name, description, price)
        )
        product_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
        return cls(product_id, name, description, price)

    @classmethod
    def read(cls, product_id):
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("SELECT id, name, description, price FROM products WHERE id = %s;", (product_id,))
        row = cur.fetchone()
        cur.close()
        conn.close()
        if row:
            return cls(*row)
        return None

    @classmethod
    def update(cls, product_id, name, description, price):
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            "UPDATE products SET name = %s, description = %s, price = %s WHERE id = %s RETURNING id;",
            (name, description, price, product_id)
        )
        updated_id = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()
        if updated_id:
            return cls(product_id, name, description, price)
        return None

    @classmethod
    def delete(cls, product_id):
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("DELETE FROM products WHERE id = %s;", (product_id,))
        conn.commit()
        cur.close()
        conn.close()
        return True