import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="fixed top-0 left-0 flex w-screen py-4">
        <div className="basis-2/5">Tim Silva</div>
        <div className="flex justify-between basis-1/5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="basis-2/5">hello</div>
      </div>
      <Outlet />
    </>
  );
}
