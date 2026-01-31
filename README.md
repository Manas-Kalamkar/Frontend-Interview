# 📝 MKBlog – Professional Blog Application

This repository contains my solution for the **CA Monk Frontend Internship – Blog Application Website**. I elevated the project requirements by migrating the initial local JSON Server to a **live Cloud Backend (Supabase)**, creating a fully functional, deployable full-stack experience.

**🚀 Live Demo:** [https://manas-kalamkar.github.io/Blog_Website/](https://manas-kalamkar.github.io/mkblog/)

---

## 🚀 Tech Stack

* **React + TypeScript** – Core frontend framework
* **Supabase** – PostgreSQL Cloud Database & API layer
* **TanStack Query (v5)** – Advanced server-state management & caching
* **Tailwind CSS** – Utility-first styling
* **shadcn/ui** – Accessible and reusable UI components
* **Vite** – Modern build tool for high-performance development

---

## ✨ Features Implemented

* 📄 **Dynamic Data Fetching**: Real-time retrieval of blog posts from a remote PostgreSQL database.
* 🔍 **Single Blog View**: Deep-linking and fetching specific articles by unique identifiers.
* ➕ **Cloud Persistence**: Ability to publish new blog posts directly to the cloud via a custom creation form.
* 🔄 **Smart Invalidation**: Automatic UI synchronization using TanStack Query mutations.
* ⏳ **Loading & Error States**: Comprehensive UI feedback using skeletons and error boundaries.
* 📱 **Responsive UI**: A fluid, mobile-first design built with Tailwind.

---

## 📂 Project Structure

```text
src/
│── api/               # Supabase client and API service functions
│── components/        # Reusable UI components (shadcn/ui + custom)
│── hooks/             # Custom TanStack Query hooks (useBlogs, useBlog)
│── types/             # TypeScript interfaces for database schema
│── lib/               # Utility functions (cn, etc.)
│── App.tsx            # Main application logic
└── main.tsx           # Entry point with QueryClientProvider
