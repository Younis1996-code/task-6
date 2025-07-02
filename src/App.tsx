import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store/index";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { modeChange } from "./redux/slices";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.posts.mode);

  useEffect(() => {
    const theme: string | null = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") {
      dispatch(modeChange(theme));
      document.documentElement.classList.toggle("dark", mode === "dark");
    }
  }, [dispatch, mode]);

  return (
    <div className="font-inter text-[#1A1A1A] overflow-hidden lg:px-28 transition-colors duration-300 bg-white dark:bg-[#090D1F] pt-16 lg:pt-24">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
