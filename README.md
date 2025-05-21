# Mini Jackpot Manager Frontend

This is the React frontend for the Mini Jackpot Manager application.

## Prerequisites

- Node.js (v22.12.0 or later)
- npm (v10.9.0 or later)

## Setup and Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Configure the API URL:
   
   Open `src/services/api.ts` and update the `API_URL` constant to match your backend API URL:
   ```typescript
   const API_URL = 'https://localhost:7176/api'; // Update with your backend URL
   ```

3. Start the development server:
   ```
   npm start
   ```

   The application will be available at http://localhost:3000

## Features

- View all jackpots in a table format
- Contribute to jackpots with a specified amount
- Visual highlighting when a jackpot resets after reaching its threshold
- Auto-refresh of jackpot data after contributions

## Project Structure

- `src/components/` - React components
- `src/models/` - TypeScript interfaces and types
- `src/services/` - API communication services
- `src/hooks/` - Custom React hooks
- `src/App.tsx` - Main application component
- `src/index.tsx` - Application entry point

## Technologies Used

- React 19.1.0
- TypeScript
- React Bootstrap for UI components
- Axios for API communication

## Building for Production

To build the application for production:

```
npm run build
```

This will create a `build` folder with optimized production files.
