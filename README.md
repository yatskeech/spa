# 🖼️ API & SPA

Welcome to the *API & SPA* project! This application allows users to browse through albums and users, with each album containing a list of photos. Each album and user has its own dedicated page for detailed information. Built with React, TypeScript, Material UI, and React Router, this project provides a smooth navigation experience and displays album and user data in an organized and interactive layout.

## Table of Contents
1. [📖 Project Overview](#-project-overview)
2. [✨ Features](#-features)
3. [📂 Project Structure](#-project-structure)
4. [🧩 Components and Layouts](#-components-and-layouts)

## 📖 Project Overview
*API & SPA* enables users to:

- 📸 View a list of all albums, each containing a collection of photos.
- 👥 View a list of all users and explore their individual pages.
- 📄 Access detailed pages for each album and user, displaying all relevant information.
- 🔍 Enjoy smooth navigation between pages with React Router and styled components using Material UI.

The project is built with TypeScript for type safety, React Router for routing, and Material UI for a modern and responsive design.

## ✨ Features
- 📸 **Album Listings**: Users can view all available albums in a list format and click to explore individual albums containing photos.
- 👥 **User Listings**: Users can view all available users and navigate to detailed pages for each user.
- 📄 **Individual Album and User Pages**: Each album and user has its own dedicated page displaying detailed information.
- 🔄 **Dynamic Routing**: React Router enables smooth transitions and dynamic loading of pages for albums and users.
- 🎨 **Material UI Integration**: The app uses Material UI components for a polished and responsive design.
- ⏳ **Loading States**: Displays loading indicators for asynchronous data fetching and page rendering.

## 📂 Project Structure
```plaintext
api-spa/
├── index.html
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── declarations.d.ts
│   ├── index.scss
│   ├── layouts/
│   ├── main.tsx
│   ├── pages/
│   ├── router/
│   ├── theme/
│   └── types/
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🧩 Components and Layouts

### Components
- 🎨 **Header**: Displays the title and navigation links of the application.
- 📝 **Footer**: A simple footer component to provide additional information and links.
- 🔗 **NavigationLink**: A reusable link component used for routing between pages.
- 📃 **Paragraph**: Displays textual content, used across various pages.
- 🏷️ **Title**: Used to display titles on different pages for better readability.

### Layouts
- **Layout**: A shared layout for the entire app that includes the header, footer, and navigation components. It wraps around the content of each page.

### Pages
- **HomePage**: The landing page of the application.
- **AlbumListPage**: Displays a list of all albums.
- **AlbumPage**: Displays detailed information about a specific album, including photos.
- **UserListPage**: Displays a list of all users.
- **UserPage**: Displays detailed information about a specific user.
- **ErrorPage**: Shows a generic error message for any issues in the app.
- **NotFoundPage**: Displays when a user navigates to a non-existent route.
- **LoadingPage**: A loading screen shown when data is being fetched.

