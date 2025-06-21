import { Link } from "@remix-run/react";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is your Remix project starting point.</p>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
