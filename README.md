# Luis Bermúdez Web Application

> Modern dashboard built with React 19.2, Vite, and Javascript. Website for browsing for game keys from diferent platforms (Playstation, Xbox, Steam).

## Tech Stack

| Category             | Technology                          |
| -------------------- | ----------------------------------- |
| **Library**          | React 19.2                          |
| **Build Tool**       | Vite 8.0.10                         |
| **Language**         | Javascript (ECMAScript 2026)        |
| **Routing**          | React Router V7                     |
| **State Management** | Zustand 5.0.13                      |
| **Forms**            | EmailJS                             |
| **UI Framework**     | TailwindCSS 4  (4.2.4)              |
| **Backend**          | Supabase (Log in, Log out)          |
| **Library**          | React Lucide Icons                  |


## Prerequisites

- **Node.js** v24.14.0
- **Npm** 11.9.0
- **Git** for version control

## Getting Started

1. **Install dependencies**

  npm install
  


2. **Start development server**

   npm run dev
   

   Server runs at `http://localhost:5173` but if it is occuped, it will run at `http://localhost:5174` :D

## Scripts

| Commands                 | Description                    |
| ------------------------ | ------------------------------ |
| `npm run install`        | Start development server       |
| `npm run dev`            | Build for production           |
| `npm run build`          | Serve production build locally |
| `npm run preview`        | Preview of the build           |
| `npm run lint`           | Run ESLint                     |
| `npm install -D prettier`| Format code with Prettier      |

## Architecture

The website follows the structure of **Bullet Proof React** with clear separation of folders.

### Project Structure

```
src/
├── app/                  # Render Features (independent).
│   ├── home/             # Renders Home Feature.
│   ├── catalog/          # Renders Catalog Feature.
│   ├── random-keys/      # Renders Random Keys Feature.
│   ├── wishlist/         # Renders Wishlist Feature.
│   └── cart/             # Renders cart features.
├── common/               # Reusable code.
│   ├── components/       # Reusable UI components.
│   ├── hooks/            # Custom hooks.
│   ├── lib/              # Utilities.
│   └── providers/        # Context providers.
├── core/                 # Log-in and Log-out Logic.
│   └── components/       # Supabase setup.
├─── features/            # Feature modules (independent).
│   ├── principal-store/  # Main page with hero port and products.
│   ├── catalog/          # Principal research of products.
│   ├── random-keys/      # Buy random keys for different platforms.
│   ├── wishlist/         # Personal liked products category.
│   └── cart/             # Personal Cart for buying products.
└─── router/              # Safe Route.
    └── router/           # React Router Setup.
```

## Key Features

- **Robust Authentication** with Supabase (Google Provider).
- **Wide game information** (API RAWG VIDEOGAMES).
- **Type-Safe Routing** with React Router.
- **Email Submission** with EmailJS.


## Development

### Creating a New Feature

1. Create folder in `src/features/my-feature/`
2. Structure:
   ```
   my-feature/
   ├── components/
   ├── hooks/
   ├── pages/
   │    └── myfeature
   │          └── export function MyFeaturePage() {...}
   ├── services/
   └── utils/
   ```
3. Render new feature:
   ```
   app/
   └──  myfeature/
         └── myfeature.jsx/
               └── "export function MyFeature() {"
                    └── return( <MyfeaturePage/> )}
   ```
4. Follow the this structure to add your new feature to the Router
   Inside of PrincipalLayout's Children
     ```
   router/
   └──  router/
         └── structure
              |── path: "my-feature", 
              └── Component: MyFeature
   ```

## Code Quality

- **ESLint** for linting.
- **Prettier** for formatting (no semicolons, single quotes)

Run code checks:

```bash
npm run check
```

## Contributing

1. Create feature branch: `git checkout -b feature/name`
2. Make changes and commit: `git commit -m "feat: description"`
3. Verify code: `npm run check`
4. Open Pull Request

### Commit Convention

```
feat: add feature
fix: fix bug
docs: documentation
style: formatting
refactor: code refactoring
test: add tests
chore: dependencies
```

## Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Supabase Docs](https://supabase.com/docs)
- [TailwindCSS](https://tailwindcss.com)
- [API RAWG Docs](https://api.rawg.io/docs/)
- [Lucide React Docs](https://lucide.dev/guide/react/)
- [EmailJS Docs](https://www.emailjs.com/docs/)

## License

Proprietary - Luis Bermúdez FuegoGaming.com