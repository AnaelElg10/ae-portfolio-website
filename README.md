# Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Software Engineer.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional interface with smooth animations
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessible**: Follows web accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Development**: ESLint for code quality
- **Deployment**: Ready for Vercel, Netlify, or similar platforms

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ae-portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
bun run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/        # shadcn/ui components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Projects.tsx
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Images and static files
```

## Deployment

This project is optimized for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply build the project and upload the `dist` folder contents to your hosting provider.

## Contact

Feel free to reach out if you have any questions or would like to collaborate on a project.

## License

This project is open source and available under the [MIT License](LICENSE).
