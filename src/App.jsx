import { useState } from "react";
import "./App.css";
import axios, { Axios } from "axios";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Weather } from "./components/Weather";
import { useLocalStorage } from "./hooks/UseLocalStorage";
function App() {
  const [data, setData] = useLocalStorage("data", {});
  const [location, setLocation] = useState("");

  const API_KEY = "f15a771dd88a9667ae598cd7b812252c";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}&lang=es`;

  const alertError = (error) =>
    toast.error(`Error: ${error.message}`, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  const searchLocation = async (e) => {
    try {
      if (e.key === "Enter") {
        const response = await axios.get(URL);
        setData(response.data);
        console.log(response.data);
        setLocation("");
      }
    } catch (error) {
      alertError(error);
    }
  };
  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="El tiempo en..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
        />
        <ToastContainer />
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
