import { logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <div className="w-full bg-primary py-4 px-6 flex items-center justify-between">
      <img src={logo} alt="Logo" className="w-[124px] h-[32px]" />

      <ul className="flex flex-row gap-6 text-white">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
