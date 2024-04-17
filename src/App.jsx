import { useState } from "react";
import "./App.css";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-primary text-tertiary">
      <Navbar />
      <Admin />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Zoom
      />
    </main>
  );
}

export default App;
