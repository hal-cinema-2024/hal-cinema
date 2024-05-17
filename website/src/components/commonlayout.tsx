import { Outlet, Link } from "@tanstack/react-router";

const style = {
  width: "200px",
  height: "400px",
  backgroundImage: `url(../images/bg.jpg)`,
  backgroundSize: "cover",
};

export const CommonLayout = () => {
  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          LOGO
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/movies">映画一覧</Link>
            </li>
            <li>
              <Link to="">スクリーン一覧</Link>
            </li>
            <li>
              <Link to="">チケット購入</Link>
            </li>
            <li>
              <Link to="">上映スケジュール</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section style={style}></section>

      <div></div>

      <Outlet />
    </div>
  );
};

export default CommonLayout;
