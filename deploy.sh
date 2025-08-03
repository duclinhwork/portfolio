#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy the portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Script"
echo "================================"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please run this script from your portfolio directory."
    exit 1
fi

# Check if main branch exists
if ! git show-ref --verify --quiet refs/heads/main; then
    echo "📝 Creating main branch..."
    git checkout -b main
fi

# Ensure we're on the main branch
git checkout main

# Add all files
echo "📁 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
else
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Update portfolio - $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Push to GitHub
echo "🌐 Pushing to GitHub..."
if git push origin main; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Your portfolio will be available at:"
    echo "   📍 https://duclinhwork.github.io/portfolio/"
    echo "   📍 https://duclinhwork.github.io/Portfolio/ (redirects to above)"
    echo ""
    echo "⏱️  GitHub Pages deployment may take a few minutes..."
    echo "   Check the Actions tab in your GitHub repository for deployment status."
else
    echo "❌ Failed to push to GitHub. Please check your remote repository configuration."
    exit 1
fi

echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to Pages section"
echo "3. Set Source to 'GitHub Actions'"
echo "4. Your site will be automatically deployed!"
