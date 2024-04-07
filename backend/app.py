from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

users = []
@app.route('/login', methods =['POST'])
def authenticate():
    data = request.get_json()
    entered_username = data.get('username')
    entered_password = data.get('password')
    
    if data['form-type'] == 'signup':
        for user in users:
            if user['username']== entered_username:
                return jsonify({'message': 'Username already taken.'}), 400
        entered_email = data.get('email')
        users.append({'username':entered_username, 'password':entered_password, 'email': entered_email})
        print(users)
        return jsonify({'message': 'Signup successful!'}), 200
    
    elif data['form-type']=='login':
        # for user in users:
        #     if user['username'] == True:
        #         if user['password'] == entered_password:
        #             return jsonify({'message':'Successful login'}), 200
        return jsonify({'message': 'Incorrect Username or Password'}), 400
        
products = [
    {
    "id": 1,
    "name": "Product 1",
    "description": "Description for Product 1",
    "price": 10.99,
    "image": 'images/product1.png'
    },
    {
    "id": 2,
    "name": "Product 2",
    "description": "Description for Product 2",
    "price": 20.99,
    "image": 'images/product2.jpg'
    },
    {
    "id": 3,
    "name": "Product 3",
    "description": "Description for Product 3",
    "price": 10.99,
    "image": 'images/product3.jpg'
    },
    {
    "id": 4,
    "name": "Product 4",
    "description": "Description for Product 4",
    "price": 10.99,
    "image": 'images/product4.jpg'
    },
    {
    "id": 5,
    "name": "Product 5",
    "description": "Description for Product 5",
    "price": 10.99,
    "image": 'images/product5.jpg'
    },
    {
    "id": 6,
    "name": "Product 6",
    "description": "Description for Product 6",
    "price": 10.99,
    "image": 'images/product6.jpg'
    },
    {
    "id": 7,
    "name": "Product 7",
    "description": "Description for Product 7",
    "price": 10.99,
    "image": 'images/product7.jpg'
    },
    {
    "id": 8,
    "name": "Product 8",
    "description": "Description for Product 8",
    "price": 10.99,
    "image": 'images/product8.jpg'
    },
    {
    "id": 9,
    "name": "Product 9",
    "description": "Description for Product 9",
    "price": 10.99,
    "image": 'images/product9.jpg'
    },
    {
    "id": 10,
    "name": "Product 10",
    "description": "Description for Product 10",
    "price": 10.99,
    "image": 'images/product10.jpg'
    }
]    

# @app.route('/ProductList', methods =['GET'])

@app.route ('/products' , methods =['GET']) 
# @app.route ('/products/<int:product_id>' ,methods =['GET']) 

def get_products (product_id = None) : 
    testProducts = products
    return testProducts 
    
if __name__ == '__main__':
    app.run()