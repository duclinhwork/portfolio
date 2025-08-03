# Portfolio Deployment Guide

## 🚀 Quick Deployment to GitHub Pages

### Method 1: Using the Deployment Script (Recommended)

1. **Run the deployment script:**
   ```bash
   ./deploy.sh
   ```

2. **Enable GitHub Pages:**
   - Go to your GitHub repository: `https://github.com/duclinhwork/portfolio`
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The site will be automatically deployed!

### Method 2: Manual Deployment

1. **Add and commit your files:**
   ```bash
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

2. **Enable GitHub Pages** (same as above)

## 🌐 URL Access

After deployment, your portfolio will be available at:

- **Primary URL**: `https://duclinhwork.github.io/portfolio/`
- **Alternative URL**: `https://duclinhwork.github.io/Portfolio/` (automatically redirects to primary)

Both URLs work thanks to the `404.html` redirect handler that manages case-insensitive routing.

## 🛠️ Local Development

### Start Local Server
```bash
./serve.sh
```
Or manually:
```bash
python3 -m http.server 8000
```

### Test Your Changes
1. Edit `index.html`, `styles.css`, or `script.js`
2. Refresh your browser at `http://localhost:8000`
3. See changes immediately

## 📁 File Structure Explanation

```
portfolio/
├── index.html              # Main portfolio page
├── styles.css              # All styling and themes
├── script.js               # Interactive functionality
├── 404.html               # Handles URL redirects
├── robots.txt             # SEO optimization
├── sitemap.xml            # SEO sitemap
├── deploy.sh              # Deployment automation
├── serve.sh               # Local development server
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment
└── README.md              # Project documentation
```

## 🎨 Customization Guide

### Update Personal Information
1. **Edit `index.html`**:
   - Update name, title, contact information
   - Modify work experience, projects, skills
   - Add/remove sections as needed

2. **Update Links**:
   - GitHub profile links
   - Email address
   - LinkedIn profile
   - Project repository links

### Theme Customization
1. **Edit `styles.css`**:
   - Modify CSS custom properties in `:root`
   - Change colors, fonts, spacing
   - Adjust responsive breakpoints

### Add New Features
1. **Edit `script.js`**:
   - Add new interactive elements
   - Extend existing functionality
   - Add animations or effects

## 🔧 Advanced Configuration

### Custom Domain (Optional)
If you want to use a custom domain:

1. Create a `CNAME` file in the repository root:
   ```
   yourdomain.com
   ```

2. Configure DNS settings with your domain provider
3. Update canonical URLs in `index.html`

### Analytics (Optional)
Add Google Analytics or other tracking:

1. Add tracking code to `index.html` before `</head>`
2. Update privacy policy if needed

### Performance Optimization
The portfolio is already optimized with:
- Minified external resources
- Efficient CSS and JavaScript
- Optimized images and fonts
- SEO meta tags
- Responsive design

## 🚀 Deployment Checklist

Before deploying:

- [ ] Update personal information in `index.html`
- [ ] Add your email and social links
- [ ] Test locally with `./serve.sh`
- [ ] Check responsive design on different screen sizes
- [ ] Verify all links work correctly
- [ ] Test theme toggle functionality
- [ ] Run deployment with `./deploy.sh`
- [ ] Enable GitHub Pages in repository settings
- [ ] Test live site at `https://duclinhwork.github.io/portfolio/`

## 📞 Support

If you encounter any issues:

1. Check the GitHub Actions tab for deployment errors
2. Ensure GitHub Pages is enabled in repository settings
3. Verify all files are committed and pushed to main branch
4. Test locally first to isolate issues

## 🎉 Success!

Once deployed, your professional portfolio will be live and accessible worldwide at `https://duclinhwork.github.io/portfolio/`!

The portfolio includes:
- ✅ Responsive design for all devices
- ✅ Dark/light theme toggle
- ✅ Interactive expandable content
- ✅ Professional timeline layout
- ✅ Modern animations and effects
- ✅ SEO optimization
- ✅ Case-insensitive URL handling
