from flask import Flask, jsonify, request, send_from_directory
from dotenv import load_dotenv
from flask_cors import CORS
import os

load_dotenv()  # Load environment variables from .env

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)  # Enable CORS for development. Consider tightening in production.

# Simple data endpoint for testing
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Data from Flask Backend!"})

@app.route('/api/echo', methods=['POST'])
def echo():
    data = request.json.get('data', '')
    return jsonify({"echo": data})

# -------------------------
# Blog Endpoints
# -------------------------
blog_posts_data = [
    {
        'id': 1,
        'title': 'Maximizing Engagement on Instagram',
        'content': 'This post explores advanced strategies for increasing your Instagram engagement...',
        'author': 'Tibeb Team',
        'date': '2025-05-20'
    },
    {
        'id': 2,
        'title': 'Top 5 Social Media Trends in 2025',
        'content': 'Discover the leading trends shaping social media marketing in the current year...',
        'author': 'Tibeb Team',
        'date': '2025-05-15'
    }
]

@app.route('/api/blog-posts', methods=['GET'])
def get_blog_posts():
    return jsonify(blog_posts_data)

@app.route('/api/blog-posts', methods=['POST'])
def add_blog_post():
    new_post = request.json
    if not new_post or not all(k in new_post for k in ('title', 'content', 'author', 'date')):
        return jsonify({'error': 'Missing required fields'}), 400
    new_post['id'] = len(blog_posts_data) + 1
    blog_posts_data.append(new_post)
    return jsonify(new_post), 201

# -------------------------
# Testimonials Endpoints
# -------------------------
testimonials_data = [
    {
        'id': 1,
        'client': 'Client A',
        'feedback': 'Tibeb transformed our social strategy!',
        'date': '2025-05-10'
    }
]

@app.route('/api/testimonials', methods=['GET'])
def get_testimonials():
    return jsonify(testimonials_data)

@app.route('/api/testimonials', methods=['POST'])
def add_testimonial():
    new_testimonial = request.json
    if not new_testimonial or not all(k in new_testimonial for k in ('client', 'feedback', 'date')):
        return jsonify({'error': 'Missing required fields'}), 400
    new_testimonial['id'] = len(testimonials_data) + 1
    testimonials_data.append(new_testimonial)
    return jsonify(new_testimonial), 201

# -------------------------
# Services Endpoint
# -------------------------
services_data = [
    {
        'id': 1,
        'name': 'Social Media Strategy',
        'description': 'Customized strategies to boost your online presence.'
    },
    {
        'id': 2,
        'name': 'Content Creation',
        'description': 'Engaging content tailored to your brand.'
    },
    {
        'id': 3,
        'name': 'Analytics & Reporting',
        'description': 'Comprehensive analytics to drive informed decisions.'
    }
]

@app.route('/api/services', methods=['GET'])
def get_services():
    return jsonify(services_data)

# -------------------------
# Contact Endpoint
# -------------------------
@app.route('/api/contact', methods=['POST'])
def contact():
    contact_data = request.json
    if not contact_data or not all(k in contact_data for k in ('name', 'email', 'subject', 'message')):
        return jsonify({'error': 'Missing required fields'}), 400
    # Real-world: send an email or save data to a database
    return jsonify({'status': 'success', 'message': 'Thank you for your inquiry!'}), 200

# -------------------------
# Newsletter Subscription Endpoint
# -------------------------
@app.route('/api/newsletter-subscribe', methods=['POST'])
def newsletter_subscribe():
    data = request.json
    if not data or 'email' not in data:
        return jsonify({'error': 'Email is required'}), 400
    # Real-world: store email and send confirmation email
    return jsonify({'status': 'success', 'message': 'Successfully subscribed to our newsletter!'}), 200

# -------------------------
# Serve Frontend for all other Routes
# -------------------------
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
