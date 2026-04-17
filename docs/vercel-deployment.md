# Vercel Deployment Guide

## Prerequisites

- Neon PostgreSQL database set up (with DATABASE_URL)
- GitHub repository connected to Vercel
- Vercel account

## Environment Variables

You must add the following environment variable to your Vercel project:

### Required
- **`DATABASE_URL`** - Your Neon PostgreSQL connection string
  - Format: `postgresql://user:password@host/database?sslmode=require&channel_binding=require`
  - Get this from your Neon dashboard → Project Settings → Connection String (Pooling)

## Setting Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `DATABASE_URL`
   - **Value:** Your Neon connection string
   - **Environments:** Select `Production`, `Preview`, and `Development`
4. Click **Add** and then redeploy

## Build Configuration

The project includes:
- `prisma.config.ts` - Prisma configuration with DATABASE_URL
- `.npmrc` - npm configuration for build scripts
- `.pnpmrc` - pnpm configuration for build scripts
- `next.config.ts` - Next.js configuration for Turbopack

## Database Migrations

Prisma migrations are stored in `prisma/migrations/`. When deploying:

1. ✅ Migrations are automatically applied during build
2. ✅ No manual migration steps needed
3. ✅ Database schema is created on first deploy

## Dynamic Pages

The following pages are marked as `dynamic = 'force-dynamic'`:
- `/directory` - Requires database access, rendered on demand

This prevents build-time database connection errors.

## Troubleshooting

### Build fails with "Can't reach database server"
- ✅ **Solution:** Ensure `DATABASE_URL` is added to Vercel Environment Variables
- Check the connection string format
- Verify Neon database is accessible from Vercel

### "Unsupported metadata viewport" warnings
- These are non-fatal warnings about Next.js 16 metadata configuration
- Can be safely ignored or fixed by migrating to `generateViewport()` export

### Page shows "No results"
- Ensure you've run `pnpm prisma:seed` locally to populate sample data
- Or manually add records through the UI

## Deployment Steps

1. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

2. Vercel automatically detects changes and starts build

3. Monitor deployment in Vercel dashboard

4. Once deployed, test at your Vercel URL

## Security

- ✅ Never commit `.env.local` to GitHub
- ✅ DATABASE_URL is kept in Vercel Environment Variables only
- ✅ Connection uses SSL/TLS to Neon (sslmode=require)

## Monitoring

- Check Vercel Analytics for performance
- Monitor Neon database connections in your Neon dashboard
- View build logs in Vercel for any errors

## Next Steps

1. Add `DATABASE_URL` to Vercel environment variables
2. Redeploy your project
3. Test functionality on your Vercel URL
4. Monitor build and runtime performance
