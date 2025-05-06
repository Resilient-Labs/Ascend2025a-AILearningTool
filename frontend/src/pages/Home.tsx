import { useEffect, useState } from "react";
import apiService from "../services/apiService";
import { AxiosError } from "axios";

interface ApiResponse {
  message: string;
}

function App() {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const response = await apiService.get<ApiResponse>("/api/example");
        setMessage(response.message);
      } catch (err) {
        const axiosError = err as AxiosError;

        if (axiosError.response) {
          setError(
            `Error ${axiosError.response.status}: ${
              axiosError.response.statusText || "Unknown error"
            }`
          );
        } else {
          setError("Network error. Please check your connection.");
        }

        console.error("API error:", axiosError);
      }
    })();
  }, []);

  return (
    <>
      <div>
        <h1>Message from backend:</h1>
        {error ? <p style={{ color: "red" }}>{error}</p> : <p>{message}</p>}
      </div>
    </>
  );
}

export default App;
