import { Link, Outlet } from "react-router-dom";
import Four from "./Footer"
import './style.css'
import info from "/media/info1.png"

function Layout() {
  return (
    <>
    <header>
      <nav>
      <h1>The Info Dump</h1>
      <img src={info} alt="Info" />
      <ul>
        <li>
          <Link to="Info">Yes Info</Link>
        </li>

        <li>
          <Link to="">No Info</Link>
        </li>

      </ul>
      </nav>
      </header>
      <main>
        <h2>Click either link above if you want info or if you don't</h2>
        <Outlet />
      </main>
      <footer>
        <h1>Did you find this info helpful?</h1>
        <Four />
      </footer>
    </>
  );
}

export default Layout;
