# Kin Shoji LLC Landing Page

This is a landing page for Kin Shoji LLC (合同会社琴商事), built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Interactive Animations**: Smooth fade-ins and transitions using Framer Motion.
- **Google Maps Integration**: Embedded maps for Head Office and Branch Office.
- **Contact Form**: A styled contact form (frontend only).

## Deployment to Vercel

This project is optimized for deployment on Vercel.

1.  Push this code to a GitHub repository.
2.  Log in to Vercel and click "Add New Project".
3.  Import the repository.
4.  Vercel will automatically detect the Vite framework and configure the build settings.
5.  Click "Deploy".

## Updating Google Maps

The Google Maps in `src/components/LandingPage.tsx` use embedded iframes. To update the location:

1.  Go to Google Maps and search for your specific address.
2.  Click "Share" -> "Embed a map".
3.  Copy the `src` URL from the provided HTML.
4.  Update the `src` attribute in the `iframe` tag in `src/components/LandingPage.tsx`.

## Customization

-   **Colors**: The color scheme uses Tailwind's `slate`, `blue`, and `teal` palettes. You can customize these in `src/components/LandingPage.tsx` or `tailwind.config.js` (if you eject/configure it further).
-   **Images**: Replace the Unsplash URLs with your own images in `src/components/LandingPage.tsx`.
