# GitHub Publishing Scripts

Here are scripts you can copy and paste into a bash terminal (like Git Bash on Windows or any terminal on macOS/Linux) to publish your code to GitHub.

---

## Scenario 1: Pushing Updates to an Existing Repository

Use this script when you have already published your repository and just want to upload new changes. This is the most common scenario for your `BenTran_CV` project.

```bash
# 1. Navigate to your project directory in the terminal
cd "d:\My Documents\BenTran_CV\BenTran_CV"

# 2. Pull the latest changes from the GitHub remote to prevent errors
#    (This is the most important step to avoid rejection)
git pull origin main

# 3. Check the status of your files to see what has changed
git status

# 4. Add all new and modified files to be committed
git add .

# 5. Commit your changes with a descriptive message
#    (You can change the message inside the quotes)
git commit -m "🏆 BenTran CV Vercel: 140826"

# 6. Push your committed changes to GitHub
git push origin main
```

---

## Scenario 2: Publishing a New Project for the First Time

Use this script only when you are uploading a brand new project to GitHub that doesn't exist online yet.

```bash
# 1. Navigate to your new project's folder
# cd /path/to/your/new-project

# 2. Initialize a new Git repository
git init

# 3. Add all files to be committed
git add .

# 4. Create the first commit
git commit -m "Initial commit"

# 5. Link it to the new repository you created on GitHub.com
#    (Replace the URL with your new repository's URL)
git remote add origin https://github.com/BenBinhTran/Your-New-Repo-Name.git

# 6. Push your project to GitHub
git push -u origin main
```
==================
git credential-manager github logout BenBinhTran
git credential-manager github list 2>&1
git push origin main

=========
git credential-manager github logout PhoenixWeaver
git credential-manager github list 2>&1
git push origin main

<!-- git remote set-url origin https://github.com/BenBinhTran/BenBinhTran.github.io.git -->

git remote add origin https://github.com/PhoenixWeaver/BT-utility-tools-demo.git 
git remote set-url origin https://github.com/PhoenixWeaver/BT-utility-tools-demo.git 
# 2. Check the status of your files to see what has changed
git status

# 3. Add all new and modified files to be committed
git add .

# 4. Commit your changes with a descriptive message
#    (You can change the message inside the quotes)
git commit -m "🛠 BenTran Utilities Tools"

# 5. Push your committed changes to GitHub
git push
