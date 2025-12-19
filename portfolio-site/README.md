# Personal Portfolio Website - Naufal Syafi' Hakim

A modern, responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop)

## 🚀 Features

- **Fully Responsive Design** - Looks great on mobile, tablet, and desktop
- **Modern Dark Theme** - Elegant purple and gray color scheme
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **SEO Optimized** - Comprehensive meta tags for search engines and social media
- **Accessible** - ARIA labels and semantic HTML
- **Contact Form** - Functional form with validation (Formspree integration)
- **Performance Optimized** - Fast loading with Next.js App Router

## 📦 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Deployment:** Vercel (recommended) or Netlify

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization Guide

### 1. Personal Information

Update the following files with your information:

#### `app/layout.tsx` - SEO Metadata
```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio Title",
  description: "Your custom description",
  // Update social media URLs
  openGraph: { url: "https://yourdomain.com" },
  twitter: { creator: "@yourhandle" },
};
```

#### `components/Hero.tsx`
- Change name and description
- Update interest tags to match your skills

#### `components/About.tsx`
- Rewrite bio paragraphs
- Update skills array with your technologies
- Change skill icons (use emojis or icon libraries)

### 2. Projects Section

Edit `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "https://your-image-url.com/screenshot.jpg",
    tech: ["Tech1", "Tech2", "Tech3"],
    demo: "https://live-demo-url.com",
    github: "https://github.com/yourusername/project",
  },
  // Add more projects...
];
```

**Image Options:**
- Use your own project screenshots (place in `/public` folder)
- Use [Unsplash](https://unsplash.com/) for placeholder images
- Use [Lorem Picsum](https://picsum.photos/) for random placeholders

### 3. Experience & Education

Edit `components/Experience.tsx`:

- Update `experiences` array with your work experience
- Update `education` array with your educational background
- Modify dates, descriptions, and achievements

### 4. Contact Form Setup

Edit `components/Contact.tsx`:

**Option 1: Formspree (Recommended)**
1. Go to [formspree.io](https://formspree.io/)
2. Create a free account and get your form ID
3. Replace `YOUR_FORM_ID` in the fetch URL:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

**Option 2: Development Mode**
- For testing, uncomment the setTimeout section (line ~88)
- This shows success without sending emails

### 5. Social Media Links

Update in both `components/Contact.tsx` and `components/Footer.tsx`:

```typescript
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/YOUR_USERNAME' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_USERNAME' },
  { name: 'Email', url: 'mailto:your.email@example.com' },
  { name: 'Instagram', url: 'https://instagram.com/YOUR_USERNAME' },
];
```

### 6. Styling & Colors

The site uses a purple/gray dark theme. To change colors, edit `components/*.tsx`:

**Primary Color (Purple):**
- `text-purple-400` → Change to `text-blue-400`, `text-green-400`, etc.
- `bg-purple-600` → Change to `bg-blue-600`, `bg-green-600`, etc.
- `border-purple-500` → Change to `border-blue-500`, etc.

**Background Colors:**
- `bg-gray-900` (darkest)
- `bg-gray-800` (medium)
- Replace with other Tailwind colors

### 7. Favicon & Images

Add your own branding:

1. **Favicon:** Replace files in `/public`:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `favicon-16x16.png`

2. **Open Graph Image:** Add `/public/og-image.jpg` (1200x630px)
   - This appears when sharing on social media

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest option for Next.js apps:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Custom Domain:** Add your domain in Vercel project settings

### Deploy to Netlify

1. Build the site:
   ```bash
   npm run build
   ```

2. Create `netlify.toml` in root:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. Connect your repository to Netlify
4. Deploy!

### Deploy to Other Platforms

The site can also deploy to:
- **GitHub Pages** (with static export)
- **AWS Amplify**
- **DigitalOcean App Platform**
- **Railway**

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linter
```

## 🎨 Customization Tips

### Adding New Sections

1. Create component in `/components`:
   ```typescript
   'use client';
   import { motion } from 'framer-motion';
   
   const NewSection = () => {
     return (
       <section id="newsection" className="py-20 bg-gray-900">
         {/* Your content */}
       </section>
     );
   };
   
   export default NewSection;
   ```

2. Import in `app/page.tsx`:
   ```typescript
   import NewSection from '@/components/NewSection';
   
   // Add to return statement
   <NewSection />
   ```

3. Add to navigation in `components/Navbar.tsx`

### Animation Customization

Framer Motion animations can be adjusted:

```typescript
// Fade in from bottom
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Slide from left
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}

// Scale up
initial={{ scale: 0.8 }}
animate={{ scale: 1 }}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Naufal Syafi' Hakim
- Email: your.email@example.com
- LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- GitHub: [github.com/yourusername](https://github.com/yourusername)

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion
