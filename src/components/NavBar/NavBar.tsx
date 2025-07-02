import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import type { RootState } from "../../redux/store";
import hilalMoon from "../../assets/NavIcons/hilalmoon.svg";
import shiningSun from "../../assets/NavIcons/shiningsun.svg";
import moon from "../../assets/NavIcons/moon.svg";
import sun from "../../assets/NavIcons/sun.svg";
import { modeChange } from "../../redux/slices";
import blackMenu from "../../assets/NavIcons/menu-black.svg";
import whiteMenu from "../../assets/NavIcons/menu-white.svg";
import { useEffect, useState } from "react";
import blackX from "../../assets/NavIcons/menu-xblack.svg";
import whiteX from "../../assets/NavIcons/menu-xwhite.svg";
import AOS from "aos";
import "aos/dist/aos.css";

interface NavBarLinks {
  name: string;
  path: string;
}

const NAV_LINKS: NavBarLinks[] = [
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Newsletter",
    path: "/newsletter",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mode = useSelector((state: RootState) => state.posts.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="px-8 lg:px-28 py-10 lg:pt-10 fixed z-40 top-0 left-0 w-screen h-[60px] flex justify-between items-center transition-colors duration-300 bg-white dark:bg-[#090D1F]">
      <h3 className="text-lg/[24px] lg:text-xl/[24px] dark:text-white font-semibold">
        <Link className="" to="/">
          Younis Issa
        </Link>
      </h3>
      <div className="flex items-center">
        <ul className="hidden md:flex gap-3.5 mr-3.5">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active font-bold border-b pb-0.5 text-lg/[24px] lg:text-xl/[24px] dark:text-white dark:border-white"
                    : "dark:text-white text-lg/[24px] lg:text-xl/[24px] font-normal"
                }
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center justify-center gap-4 rounded-[29px] px-4 py-2 bg-[#090D1F] dark:bg-white">
          <button
            className="cursor-pointer"
            onClick={() => dispatch(modeChange("light"))}
          >
            {mode === "light" ? (
              <img src={shiningSun} alt="shiningsun" />
            ) : (
              <img src={sun} alt="sun" />
            )}
          </button>
          <button
            className="cursor-pointer"
            onClick={() => dispatch(modeChange("dark"))}
          >
            {mode === "dark" ? (
              <img src={hilalMoon} alt="hilalMoon" />
            ) : (
              <img src={moon} alt="moon" />
            )}
          </button>
        </div>
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {mode === "dark" ? (
          <img src={whiteMenu} alt="whiteMenu" />
        ) : (
          <img src={blackMenu} alt="blackMenu" />
        )}
      </button>
      {isOpen && (
        <div
          data-aos="fade-down-left"
          data-aos-delay="100"
          className="absolute z-50 top-0 left-0 w-screen h-screen bg-white dark:bg-[#090D1F] flex flex-col items-center justify-center transition-colors duration-300"
        >
          <div className="flex flex-col items-center justify-center flex-1">
            <h3
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-lg/[24px] dark:text-white font-semibold text-center mb-14"
            >
              Younis Issa
            </h3>
            <ul
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex flex-col items-center justify-center gap-7 mb-7"
            >
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) =>
                      isActive
                        ? "active font-bold border-b text-lg/[24px] dark:text-white dark:border-white"
                        : "dark:text-white text-xl/[24px] font-normal"
                    }
                    to={link.path}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex items-center justify-center gap-4 rounded-[29px] px-4 py-2 bg-[#090D1F] dark:bg-white"
            >
              <button
                className="cursor-pointer"
                onClick={() => dispatch(modeChange("light"))}
              >
                {mode === "light" ? (
                  <img src={shiningSun} alt="shiningsun" />
                ) : (
                  <img src={sun} alt="sun" />
                )}
              </button>
              <button
                className="cursor-pointer"
                onClick={() => dispatch(modeChange("dark"))}
              >
                {mode === "dark" ? (
                  <img src={hilalMoon} alt="hilalMoon" />
                ) : (
                  <img src={moon} alt="moon" />
                )}
              </button>
            </div>
          </div>

          <button className="mb-5" onClick={() => setIsOpen(!isOpen)}>
            {mode === "dark" ? (
              <img src={whiteX} alt="whiteMenu" />
            ) : (
              <img src={blackX} alt="blackMenu" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
