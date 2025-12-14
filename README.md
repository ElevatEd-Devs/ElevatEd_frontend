# ElevatEd Frontend

<div align="center">
  
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

  **Team of Students building tools for Students**

</div>

## 📚 About

ElevatEd is a student-driven initiative focused on creating educational tools designed by students, for students. Our frontend application provides an intuitive and modern interface to help students enhance their learning experience.

## 🚀 Tech Stack

- **React** - A JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling for blazing fast development
- **TailwindCSS** - Utility-first CSS framework for rapid UI development
- **ESLint** - Code quality and consistency enforcement

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or later recommended)
- **npm** (comes with Node.js)

To verify your installation, run:

```bash
node -v
npm -v
```

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ElevatEd-Devs/ElevatEd_frontend.git
cd ElevatEd_frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
ElevatEd_frontend/
├── public/              # Static assets
├── src/                 # Source files
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── assets/          # Images, fonts, and other assets
│   ├── styles/          # Global styles and Tailwind config
│   ├── utils/           # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API services and external integrations
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Application entry point
├── .gitignore           # Git ignore rules
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 💻 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Code Style

This project uses ESLint for maintaining code quality and consistency. The configuration includes:

- React-specific rules
- Modern JavaScript best practices
- Automatic code formatting recommendations

To check your code:

```bash
npm run lint
```

## 🤝 Contributing

We welcome contributions from students and developers! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes thoroughly before submitting
- Update documentation as needed
- Be respectful and constructive in discussions

## 👥 Team

This project is maintained by the ElevatEd development team:

- [@redhulkgod](https://github.com/redhulkgod)
- [@brando-lang](https://github.com/brando-lang)
- [@JohnEdwards700](https://github.com/JohnEdwards700)
- [@kennethezee](https://github.com/kennethezee)
- [@darthblanc](https://github.com/darthblanc)

## 📝 Learning Resources

### React + Vite

This template uses Vite for an optimal development experience:

- **Fast HMR (Hot Module Replacement)** - See changes instantly
- **Optimized builds** - Production-ready bundles
- **Plugin ecosystem** - Extend functionality easily

#### Official Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) - Uses Babel for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) - Uses SWC for Fast Refresh

### Expanding ESLint Configuration

For production applications, consider enabling type-aware lint rules:

1. Configure the top-level `parserOptions`:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
3. Optionally add `...tseslint.configs.stylisticTypeChecked`
4. Install and configure [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) for React-specific rules

## 🐛 Reporting Issues

Found a bug or have a feature request? Please [open an issue](https://github.com/ElevatEd-Devs/ElevatEd_frontend/issues) on GitHub.

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 🌟 Acknowledgments

Special thanks to all contributors and the student community for supporting this initiative!

---

<div align="center">
  
  **Built by students, for students**
  
  [Report Bug](https://github.com/ElevatEd-Devs/ElevatEd_frontend/issues) · [Request Feature](https://github.com/ElevatEd-Devs/ElevatEd_frontend/issues)

</div>
