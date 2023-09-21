import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between shadow p-10">
        <NavLink to="/">
          <h1 className="font-bold text-2xl">
            <span className="text-red-500">a</span>mazon.com
          </h1>
        </NavLink>
        <div className="flex gap-4">
          <NavLink className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            } to="/product">Product</NavLink>
          <NavLink className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            } to="/dashboard">Dashboard</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
