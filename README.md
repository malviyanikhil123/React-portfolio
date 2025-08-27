# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Nikhil Malviya - Portfolio Website

A modern, responsive portfolio website built with **Vite**, **React**, and **TypeScript**. This project showcases my professional experience, technical skills, and projects in an interactive and visually appealing format.

## 🚀 Features

- **Modern Tech Stack**: Built with Vite, React 19, and TypeScript
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Animations**: Smooth scroll animations and micro-interactions
- **Contact Form**: Integrated with EmailJS for direct communication
- **Skills Showcase**: Infinite scrolling animation of technical skills
- **Project Portfolio**: Filterable and paginated project gallery
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

### Frontend
- **React 19** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with custom properties and animations

### Integrations
- **EmailJS** - Contact form functionality
- **React Router** - Client-side routing (ready for future expansion)

### Development Tools
- **ESLint** - Code linting and formatting
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn**

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Copy .env and add your EmailJS keys
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📧 Contact

**Nikhil Malviya**
- Email: [your.email@example.com](mailto:your.email@example.com)
- LinkedIn: [linkedin.com/in/nikhilmalviya](https://linkedin.com/in/nikhilmalviya)
- GitHub: [github.com/malviyanikhil123](https://github.com/malviyanikhil123)

---

⭐ Star this repo if you found it helpful!

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
