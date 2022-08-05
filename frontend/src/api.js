export const apiBaseUrl = process.env.REACT_APP_API_PATH === "dev"
    ? "http://localhost:9000"
    : "https://ehv-backend.herokuapp.com"