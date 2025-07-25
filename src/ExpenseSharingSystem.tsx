{
    "name": "expense-splitter-app",
    "version": "0.1.0",
    "private": true,
    "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
    "dependencies": {
      "@testing-library/jest-dom": "^5.17.0",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^13.5.0",
      "firebase": "^10.x.x", // Ensure this matches your installed version
      "lucide-react": "^0.x.x", // Ensure this matches your installed version
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-scripts": "5.0.1",
      "web-vitals": "^2.1.4"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "predeploy": "npm run build", // This command runs before deploy
      "deploy": "gh-pages -d build" // This command deploys the 'build' folder
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "devDependencies": {
      "gh-pages": "^6.1.1" // Ensure this matches your installed version
    }
  }