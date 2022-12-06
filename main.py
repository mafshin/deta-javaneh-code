from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return "Welcome to Javaneh Code Academy 2022, Deployed by Github Actions"

@app.route('/profile', methods=['GET'])
def get_profile():
    return "<html><body>User: mohsen</body></html>"

@app.route('/product/<product_id>', methods=['GET'])
def get_product_info(product_id):
    return f"<html><body>Product Code: {product_id}</body></html>"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)