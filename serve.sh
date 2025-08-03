#!/bin/bash

# Local Development Server Script
# This script starts a local server for portfolio development

echo "🖥️  Starting Local Development Server"
echo "====================================="

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "🐍 Using Python 3 to serve files..."
    echo "📍 Your portfolio will be available at: http://localhost:8000"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "🐍 Using Python to serve files..."
    echo "📍 Your portfolio will be available at: http://localhost:8000"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    python -m http.server 8000
elif command -v php &> /dev/null; then
    echo "🔧 Using PHP to serve files..."
    echo "📍 Your portfolio will be available at: http://localhost:8000"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    php -S localhost:8000
else
    echo "❌ No suitable server found. Please install one of the following:"
    echo "   - Python (python3 -m http.server 8000)"
    echo "   - PHP (php -S localhost:8000)"
    echo "   - Node.js with http-server (npx http-server)"
    echo ""
    echo "Or simply open index.html in your browser."
fi
