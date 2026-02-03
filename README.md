# LinkedIn-Style Home Page

A responsive LinkedIn-style home page built with Next.js 15 and Material UI (MUI), featuring a 3-column feed layout that adapts seamlessly across different screen sizes.

## Features

- **3-Column Responsive Layout**
  - Left Sidebar: User profile card and quick navigation links
  - Center Feed: Post creation and news feed
  - Right Sidebar: LinkedIn news and connection suggestions

- **Fully Responsive Design**
  - Desktop (≥900px): Full 3-column layout
  - Tablet/Mobile (<900px): Center feed takes priority, sidebars hidden

- **MUI Default Theme**
  - Uses Material UI components with no custom styling
  - Clean, professional appearance following MUI design guidelines

## Tech Stack

- **Next.js 15** - React framework with App Router
- **Material UI (MUI)** - Component library
- **TypeScript** - Type safety
- **Emotion** - CSS-in-JS styling (MUI dependency)

## Project Structure

```
linkedin-layout/
├── app/
│   ├── layout.tsx          # Root layout with MUI theme provider
│   ├── page.tsx             # Main home page with 3-column grid
│   ├── theme.ts             # MUI theme configuration (default)
│   └── globals.css          # Minimal global styles
├── components/
│   ├── Navbar.tsx           # Top navigation bar
│   ├── LeftSidebar.tsx      # Profile and navigation
│   ├── CenterFeed.tsx       # Main feed content
│   └── RightSidebar.tsx     # News and suggestions
└── public/                  # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd linkedin-layout
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Responsive Breakpoints

The layout uses MUI's default breakpoints:

- **xs** (0px+): Mobile - Single column (center feed only)
- **sm** (600px+): Small tablet - Single column (center feed only)
- **md** (900px+): Desktop - 3 columns (left 25%, center 50%, right 25%)
- **lg** (1200px+): Large desktop - 3 columns in wider container

## Components Overview

### Navbar
- Sticky top navigation
- Search bar (hidden on mobile)
- Navigation icons for Home, Network, Jobs, Messages, Notifications
- Profile avatar

### LeftSidebar (hidden on <900px)
- User profile card with avatar and bio
- Profile statistics (viewers, impressions)
- Quick links (My items, Groups, Events)

### CenterFeed (always visible)
- Post creation card
- News feed with sample posts
- Like, Comment, Share actions

### RightSidebar (hidden on <900px)
- LinkedIn News section
- "Add to your feed" suggestions
- Promoted content/ads

## Design Decisions

1. **No Custom Styling**: Uses MUI components as-is with default theme
2. **Responsive-First**: Mobile users see the most important content (center feed)
3. **Component-Based**: Modular structure for easy maintenance
4. **Type-Safe**: Full TypeScript support

## Future Enhancements

Potential additions (not implemented to keep it simple):

- User authentication
- Real data fetching from API
- Post creation functionality
- Like/comment interactions
- Infinite scroll
- Dark mode toggle
- Search functionality

## License

This is a demonstration project for learning purposes.

## Acknowledgments

- Design inspired by LinkedIn
- Built with Material UI components
- Powered by Next.js
