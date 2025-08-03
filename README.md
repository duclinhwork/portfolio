# Nguyen Duc Linh - Portfolio

A modern, responsive portfolio website showcasing my experience as a Data Engineer and Analyst.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with a smooth transition
- **Interactive Content**: Expandable sections for detailed information
- **Modern UI**: Clean, professional design with smooth animations
- **GitHub Pages Ready**: Optimized for deployment on GitHub Pages

## 🚀 Live Demo

Visit the portfolio at: [https://duclinhwork.github.io/portfolio/](https://duclinhwork.github.io/portfolio/)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with CSS Variables for theming
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)
- **Deployment**: GitHub Pages with GitHub Actions

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Features Overview

### Theme Toggle
- Switch between light and dark themes
- Preference saved in localStorage
- Smooth transitions between themes

### Interactive Sections
- Expandable professional summary
- Detailed work experience with collapsible descriptions
- Project descriptions with full details on demand
- Mobile-friendly navigation with hamburger menu

### Professional Sections
- **About**: Professional summary with expand/collapse functionality
- **Experience**: Timeline-based work history with detailed descriptions
- **Skills**: Categorized technical skills with hover effects
- **Projects**: Featured projects with technology stacks and GitHub links
- **Education**: Academic background and certifications

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/duclinhwork/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

The portfolio is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Triggers on push to the `main` branch
2. Uses GitHub Pages action to deploy the static files
3. Makes the site available at `https://duclinhwork.github.io/portfolio/`

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with theme support
├── script.js           # JavaScript functionality
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment workflow
└── README.md           # Project documentation
```

## 🎯 Key Features Implemented

### 1. Expandable Content
- Professional summary with "Read More" functionality
- Work experience with detailed job descriptions
- Project descriptions with full information on demand

### 2. Theme System
- CSS custom properties for easy theme switching
- Dark and light theme support
- Persistent theme selection using localStorage

### 3. Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with smooth animations
- Active link highlighting based on scroll position

### 4. Performance Optimizations
- Efficient CSS with minimal redundancy
- Optimized JavaScript with event delegation
- Lazy loading for animations using Intersection Observer

### 5. Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators for interactive elements
- ARIA labels where appropriate

## 🔧 Customization

### Updating Content
- Edit `index.html` to update personal information, experience, and projects
- Modify the profile data directly in the HTML structure

### Styling Changes
- Edit `styles.css` to customize colors, fonts, and layout
- Use CSS custom properties in `:root` for easy theme modifications

### Adding Features
- Extend `script.js` to add new interactive functionality
- Follow the existing patterns for consistency

## 📈 Performance Features

- Smooth scrolling navigation
- CSS animations with GPU acceleration
- Optimized font loading
- Minimal JavaScript for fast load times
- Compressed CSS and organized code structure

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact

- **GitHub**: [@duclinhwork](https://github.com/duclinhwork)
- **Email**: [Update with your email]
- **LinkedIn**: [Update with your LinkedIn profile]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Nguyen Duc Linh
