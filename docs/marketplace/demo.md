# Demo & Deployment

## Deploy to Vercel

UUID Generator Pro can be deployed to Vercel with zero configuration.

### Prerequisites

- A [Vercel](https://vercel.com) account
- Git repository access (GitHub, GitLab, or Bitbucket)

### Steps

1. Push the repository to your Git provider.
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New** → **Project**.
4. Import your UUID Generator Pro repository.
5. Vercel will automatically detect Next.js and configure the build settings:

   - **Framework Preset:** Next.js
   - **Build Command:** `next build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)

6. Click **Deploy**.

### Environment Variables

No environment variables are required for the application to run. The following optional variable can be set:

| Variable           | Description              | Required |
|--------------------|--------------------------|----------|
| `NEXT_PUBLIC_APP_URL` | Public URL of the deployed app | No |

### Demo URL

Once deployed, your application will be available at the URL provided by Vercel (e.g., `https://uuid-generator-pro.vercel.app`).

## Alternative Hosting

UUID Generator Pro can also be deployed to:

- **Netlify** — Import from Git, set build command to `pnpm build`, publish directory to `.next`
- **Railway** — Use the Next.js starter template
- **Any Node.js host** — Run `pnpm build` then `pnpm start`

## Notes

- The application requires Node.js 20.x or later at runtime.
- pnpm must be available during the build step.
