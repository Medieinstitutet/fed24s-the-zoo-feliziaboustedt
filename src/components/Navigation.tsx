import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <ul className="flex flex-row gap-3 text-amber-700 text-[1.20rem]">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `transition duration-150 ${
              isActive ? "underline font-bold" : "hover:font-bold"
            }`
          }
        >
          Hem
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/animals"}
          className={({ isActive }) =>
            `transition duration-150 ${
              isActive ? "underline font-bold " : "hover:font-bold"
            }`
          }
        >
          Djuren
        </NavLink>
      </li>
    </ul>
  );
};
