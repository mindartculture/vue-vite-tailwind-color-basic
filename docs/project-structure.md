# Nuxt Project Structure

This document outlines the standard directory structure of a Nuxt 3 project.

## Core Directories

### `assets/`
- Contains uncompiled assets like SCSS, images, or fonts
- Files in this directory are processed by webpack/Vite
- Example: `assets/css/main.css`, `assets/images/logo.png`

### `components/`
- Vue components used in your pages
- Auto-imported by Nuxt
- Can be organized in subdirectories
- Example: `components/UI/Button.vue`, `components/Layout/Header.vue`

### `composables/`
- Vue composables (reusable composition functions)
- Auto-imported by Nuxt
- Example: `composables/useAuth.ts`, `composables/useState.ts`

### `content/`
- Used with Nuxt Content module
- Store your Markdown, JSON, YAML, XML files
- Creates a Git-based CMS
- Example: `content/articles/`, `content/docs/`

### `layouts/`
- Page layouts with common UI elements
- Available through the `layout` property
- Example: `layouts/default.vue`, `layouts/admin.vue`

### `middleware/`
- Navigation guards and route middleware
- Run before rendering a page
- Example: `middleware/auth.ts`, `middleware/guest.ts`

### `pages/`
- Application views and routes
- Automatically generates routes based on file structure
- Example: `pages/index.vue`, `pages/users/[id].vue`

### `plugins/`
- Vue plugins and additional functionality
- Run before mounting the application
- Example: `plugins/vuetify.ts`, `plugins/analytics.ts`

### `public/`
- Static files served at root URL
- Files here are served as-is
- Example: `public/favicon.ico`, `public/robots.txt`

### `server/`
- Server-side logic and API routes
- API endpoints and server middleware
- Example: `server/api/users.ts`, `server/middleware/logger.ts`

### `utils/`
- Utility functions and helpers
- Auto-imported by Nuxt
- Example: `utils/formatDate.ts`, `utils/validation.ts`

## Configuration Files

### `nuxt.config.ts`
- Main configuration file
- Define modules, plugins, and build settings
- Configure runtime behavior

### `app.config.ts`
- Runtime app configuration
- Define public variables accessible in components
- Environment-independent settings

### `tsconfig.json`
- TypeScript configuration
- Compiler options and type definitions

### `tailwind.config.js`
- Tailwind CSS configuration
- Custom themes and plugins

## Special Files

### `app.vue`
- Main application template
- Entry point of your application
- Can be used instead of layouts

### `.env`
- Environment variables
- Not version controlled
- Example: API keys, database URLs

## Best Practices

1. **Component Organization**
   ```
   components/
   ├── UI/           # Reusable UI components
   ├── Layout/       # Layout-specific components
   └── Features/     # Feature-specific components
   ```

2. **Page Organization**
   ```
   pages/
   ├── index.vue
   ├── about.vue
   └── users/
       ├── index.vue
       └── [id].vue
   ```

3. **API Routes**
   ```
   server/
   ├── api/
   │   └── v1/
   │       ├── users.ts
   │       └── auth.ts
   └── middleware/
       └── auth.ts
   ```

4. **Assets Organization**
   ```
   assets/
   ├── css/
   ├── images/
   ├── fonts/
   └── icons/
   ```

## Auto-imports

Nuxt 3 automatically imports:
- Components from `components/`
- Composables from `composables/`
- Utils from `utils/`
- Vue APIs (ref, computed, etc.)
- Nuxt APIs (useRoute, useRouter, etc.)
