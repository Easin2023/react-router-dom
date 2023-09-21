import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" flex gap-10 m-20 ">
      <div className="border-2 w-96 m-20 p-10">
        <Link to="/dashboard">
          <h1>Dashboard</h1>
        </Link>
        <Link to="/dashboard/Profile">
          <h1>Profile</h1>
        </Link>
        <Link to="/dashboard/editProfile">
          <h1>Edit Profile</h1>
        </Link>
      </div>
      <div>
          <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
