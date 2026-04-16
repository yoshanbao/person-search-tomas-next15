# Deploying Yoshanbao to Vercel - Step-by-Step Guide

This guide will help you deploy your Yoshanbao Next.js application to Vercel for a live deployment.

---

## Prerequisites

Before starting, make sure you have:
- ✅ A GitHub account (https://github.com)
- ✅ A Vercel account (https://vercel.com)
- ✅ Your project code pushed to GitHub
- ✅ Node.js 20.9+ installed locally

---

## Step 1: Push Your Code to GitHub

### 1.1 Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `yoshanbao` (or your preferred name)
3. Choose **Public** or **Private** (your choice)
4. Do NOT initialize with README (you already have one)
5. Click **Create repository**

### 1.2 Push Your Local Code

Open PowerShell in your project directory and run:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Yoshanbao - Person Search & Contact Manager"

# Add remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/yoshanbao.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Expected Output:**
```
Enumerating objects: 45, done.
...
To https://github.com/YOUR-USERNAME/yoshanbao.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ Your code is now on GitHub!

---

## Alternative Step 1: Fork an Existing Repository (If Working with Multiple Laptops)

If you want to fork an existing repository and update it from a different laptop, follow these steps instead:

### 1A. Fork the Repository

1. Go to the original repository URL (e.g., https://github.com/original-owner/yoshanbao)
2. Click **Fork** button in the top-right corner
3. GitHub creates a copy in your account: https://github.com/YOUR-USERNAME/yoshanbao
4. You now have your own version to modify

### 1B. Clone to Your Laptop

```bash
# Clone YOUR forked repository (not the original)
git clone https://github.com/YOUR-USERNAME/yoshanbao.git
cd yoshanbao

# Install dependencies
pnpm install
```

### 1C. Make Changes & Push Updates

```bash
# Make edits to files
# ... edit files ...

# Commit changes
git add .
git commit -m "Your update message"

# Push to YOUR forked repository
git push origin main
```

✅ Changes are now in YOUR fork on GitHub!

---

## Step 2: Connect to Vercel

### 2.1 Sign Up / Log In to Vercel

1. Go to https://vercel.com
2. Click **Sign Up** or **Log In** with your GitHub account
3. Authorize Vercel to access your GitHub account
4. Choose your account name and continue

### 2.2 Import Your Project

1. On the Vercel dashboard, click **Add New** → **Project**
2. Select **Import Git Repository**
3. Find and select your `yoshanbao` repository
4. Click **Import**

---

## Step 3: Configure Your Project

### 3.1 Project Settings

The Vercel import wizard will auto-detect your Next.js project. You should see:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Root Directory** | ./ (or leave blank) |
| **Build Command** | `pnpm run build` |
| **Install Command** | `pnpm install` |
| **Output Directory** | `.next` |

**Note:** These are already configured in your `vercel.json` file, so Vercel should auto-fill them.

### 3.2 Environment Variables (if needed)

If your app requires environment variables:

1. Click **Environment Variables** section
2. Add any necessary variables (e.g., API keys, database URLs)
3. For now, you can skip this as the app works without external variables

### 3.3 Deploy

1. Review all settings
2. Click **Deploy**
3. Wait for the build to complete (usually 2-3 minutes)

**You should see:** ✅ **Deployment Complete!**

---

## Step 4: Access Your Live Application

### 4.1 Get Your Live URL

After deployment completes:

1. Vercel automatically generates a URL like: `https://yoshanbao-******.vercel.app`
2. Click the link to visit your live site
3. Your app is now live! 🎉

### 4.2 Custom Domain (Optional)

To use a custom domain:

1. On your Vercel project page, go to **Settings** → **Domains**
2. Click **Add**
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (can take up to 24 hours)

---

## Step 5: Future Updates & Deployments

### 5.1 Automatic Deployments

Great news! Vercel automatically deploys your app whenever you push to GitHub:

```bash
# Make changes locally
# ... edit files ...

# Commit and push to GitHub
git add .
git commit -m "Your commit message"
git push origin main

# Vercel automatically detects the push and deploys! ✅
```

### 5.2 Manual Redeployment

If you need to manually redeploy:

1. Go to your Vercel project dashboard
2. Click **Deployments**
3. Find the deployment you want to redeploy
4. Click the three-dot menu (⋯) → **Redeploy**

---

## Working with Forks from Multiple Laptops

### Setup Instructions for Different Laptops

**Laptop 1 (Original):**
```bash
# Clone your forked repository
git clone https://github.com/YOUR-USERNAME/yoshanbao.git
cd yoshanbao
pnpm install
```

**Laptop 2 (Different device):**
```bash
# Same command - clone your fork
git clone https://github.com/YOUR-USERNAME/yoshanbao.git
cd yoshanbao
pnpm install
```

Both laptops now have the code from your forked repository.

### Workflow: Update from Different Laptops

**On Laptop 1:**
```bash
# Make changes
# ... edit files ...

# Push to GitHub
git add .
git commit -m "Feature: Add new functionality"
git push origin main
```

**On Laptop 2 (later, different device):**
```bash
# Pull latest changes from GitHub
git pull origin main

# Make more changes
# ... edit files ...

# Push to GitHub
git add .
git commit -m "Fix: Improve user interface"
git push origin main
```

✅ Vercel automatically detects each push and deploys!

---

### Important Notes on Forking

**Fork Benefits:**
- ✅ Work from any laptop by cloning your fork
- ✅ Each `git push` triggers automatic Vercel deployment
- ✅ Keep your own version of the code
- ✅ Easy to sync updates from the original repository later

**Keep Your Fork Updated:**

If the original repository gets updates and you want them:

```bash
# Add the original repository as upstream
git remote add upstream https://github.com/original-owner/yoshanbao.git

# Fetch updates from original
git fetch upstream main

# Merge updates into your fork
git merge upstream/main

# Push merged updates to your fork
git push origin main
```

---

## Troubleshooting

### Build Fails with "pnpm: not found"

**Solution:** Vercel might be using npm instead of pnpm. The `vercel.json` file should fix this, but if it persists:

1. Go to **Settings** → **Build & Development Settings**
2. Ensure **Install Command** is set to `pnpm install`
3. Ensure **Build Command** is set to `pnpm run build`
4. Click **Save** and redeploy

### Deploy Succeeds but Site Shows Error

1. Check the **Deployment Logs**:
   - Go to your project → **Deployments** → click the failed build
   - Look for error messages in the logs
2. Common fixes:
   - Clear build cache: **Settings** → **Advanced** → **Clear Cache** → **Redeploy**
   - Check for missing environment variables

### Database Not Persisting

Since you're using in-memory data storage, data won't persist between deployments. To add persistence:

1. Set up a PostgreSQL database (e.g., Neon, Supabase)
2. Connect via Prisma
3. Add connection string as environment variable
4. See [docs/upgrading-next-16.md](upgrading-next-16.md) for more architecture details

---

## Verification Checklist

✅ Verify your deployment:

- [ ] GitHub repository created and code pushed
- [ ] Vercel project imported successfully
- [ ] Build completed without errors
- [ ] Live URL is accessible
- [ ] Directory page loads with all 30 contacts
- [ ] Search functionality works
- [ ] Add/Edit/Delete buttons are functional
- [ ] Dark/Light theme toggle works
- [ ] All navigation links work (Home, Directory, About, Database, GitHub)
- [ ] Responsive design works on mobile devices

---

## Performance Tips

To optimize your Vercel deployment:

1. **Enable Image Optimization**: Vercel automatically optimizes Next.js images
2. **Use Edge Functions**: For future API endpoints
3. **Monitor Performance**: Check **Analytics** tab in Vercel dashboard
4. **Enable Caching**: Set cache headers for static assets (configured by default)

---

## Next Steps

After deployment:

1. **Share your live URL** with others
2. **Monitor performance** via Vercel Analytics
3. **Collect feedback** from users
4. **Plan database integration** for persistent data storage
5. **Consider authentication** with AuthJS for multi-user support

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Vercel Community**: https://vercel.com/support
- **GitHub Issues**: Create issues in your repository for tracking bugs

---

## Summary

Your Yoshanbao app is now live on Vercel! Every time you push to GitHub, it automatically deploys. You have a professional, production-ready contact management application accessible to anyone with your live URL.

🚀 **Congratulations on your first deployment!**
