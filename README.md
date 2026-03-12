# Kitchen Stoves Affiliate Application

This is a functional, minimalist single-page React application built with Vite and Tailwind CSS. It serves as an affiliate comparison tool for electric and induction stoves.

## Getting Started

To run the project locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## Replacing Dummy Data with Real Affiliate Links

The application currently uses dummy data to demonstrate the UI layout and filter capabilities. Before deploying, you should replace this dummy data with your real affiliate links and actual product images.

**Instructions:**

1. Open the data file: `src/data/stoves.js`.
2. Delete the dummy stove objects or modify them.
3. For each object, supply your real parameters. You should update:
   - `name`: Product title
   - `price`: Actual product price
   - `wattage`: Integer wattage for filtering (e.g., 2000)
   - `pros`: An array of pro features
   - `cons`: An array of con features
   - `imageColor`: This was a placeholder for images. You can replace this key with an `imageUrl` and then modify `src/components/ProductCard.jsx` to render an `<img src={stove.imageUrl} />` instead of the background color div.
4. Once your new data object is set, update `src/components/ProductCard.jsx` to swap the placeholder `#` link with your real Amazon Affiliate link:
   ```jsx
   <a href={stove.productUrl} ...>Click Here to Buy</a>
   ```

## Deployment on Vercel

This project uses the standard Vite build command (`npm run build`). When deploying to Vercel, the platform will automatically detect it as a Vite framework and configure the build settings seamlessly.
