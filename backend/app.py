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
        #code for login authentication
        print()
if __name__ == '__main__':
    app.run()