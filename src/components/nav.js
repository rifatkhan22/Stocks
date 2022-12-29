import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/stocks">Home</Link>
      &nbsp; || &nbsp;
      <Link to="/about">About</Link>
    </div>
  );
}
