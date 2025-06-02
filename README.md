# madnanrizqu.com / Personal Website of Muhammad Adnan R

## Description

This is my personal website to showcase my profile, bio, photo, links, social media, companies, projects, blog posts, services, and more. It serves as a central hub for my professional and personal endeavors.

## Deployment URL

The live website can be accessed at: [https://madnanrizqu.com](https://madnanrizqu.com)

## Getting Started

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rizquadnan/madnanrizqu.com.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd madnanrizqu.com
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
    (or `pnpm install` or `yarn install` if you prefer)

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    This will start the development server, typically at `http://localhost:4321`.

5.  **Build for production:**
    ```sh
    npm run build
    ```
    This will create a production-ready build in the `dist/` directory.

## Tech Stack

This website is built using a modern and efficient tech stack:

*   **Framework:** [Astro](https://astro.build/) - A web framework for building fast, content-focused websites.
*   **UI Components:**
    *   [React](https://react.dev/) (via `@astrojs/react`) for interactive components.
    *   Astro components (`.astro`) for templating and server-side rendering.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via `@astrojs/tailwind`) - A utility-first CSS framework.
    *   Custom theme and utilities defined in `madnanrizqu.com/tailwind.config.mjs`.
    *   CSS Modules for component-scoped styles (e.g., `madnanrizqu.com/src/components/Alert.module.css`).
*   **Content Management:** [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) for managing blog posts, projects, and testimonies (MDX).
*   **State Management (for React components):** React Hooks (`useState`, `useEffect`), `react-hook-form` for form handling.
*   **Image Optimization:** `astro:assets` for optimizing images.
*   **SEO:** `astro-seo` for search engine optimization.
*   **Sitemap:** `@astrojs/sitemap` for generating a sitemap.
*   **Deployment:** Configured for Vercel (via `@astrojs/vercel`) and Cloudflare (via `@astrojs/cloudflare`).
*   **Linting/Formatting:**
    *   [Prettier](https://prettier.io/) for code formatting.
    *   `prettier-plugin-astro` for Astro-specific formatting.
*   **Type Checking:** [TypeScript](https://www.typescriptlang.org/) (via `@astrojs/check`).
*   **Other Libraries:**
    *   `clsx` for constructing class names conditionally.
    *   `typed.js` for animated typing effects.

The `madnanrizqu.com/package.json` file contains the full list of dependencies.

## Links

- GitHub Repo: <https://github.com/rizquadnan/madnanrizqu.com>
- Figma File: <https://www.figma.com/file/ifjWJ23xjCUhn1uM9kWYpN/madnanrizqu.com?type=design&node-id=0%3A1&mode=design&t=x3N2mFtZ48UBhXPL-1>

Social media:

- Telegram: [t.me/madnanrizqu](https://t.me/madnanrizqu)
- LinkedIn: [linkedin.com/in/madnanrizqu](https://linkedin.com/in/madnanrizqu)
- GitHub: [github.com/rizquadnan](https://github.com/rizquadnan)
- Twitter/X: [twitter.com/madnanrizqu](https://twitter.com/madnanrizqu)
- YouTube: [youtube.com/@madnanrizqu](https://youtube.com/@madnanrizqu)
