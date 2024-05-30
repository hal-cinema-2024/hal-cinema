import { Outlet, Link } from "@tanstack/react-router";
import React from "react";
import "./Commonlayout.css";
import headerImage from "/src/assets/bg.jpg";

function CommonLayout() {
  return (
    <>
      <body style={{ backgroundImage: `url(${headerImage})` }}>
        <header className="header">
          <Link to="/" className="logo1">
            LOGO
          </Link>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">TOP</Link>
              </li>
              <li>
                <Link to="/movies">映画一覧</Link>
              </li>

              <li>
                <Link to="/movie">チケット購入</Link>
              </li>
              <li>
                <Link to="/schedules">上映スケジュール</Link>
              </li>
              <li>
                <Link to="/profile">マイページ</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />

        <footer className="footer">
          <Link to="/" className="logo2">
            LOGO
          </Link>

          <ul className="nav">
            <li>
              <Link to="/">TOP</Link>
            </li>
            <li>
              <Link to="/movies">映画一覧</Link>
            </li>
            <li>
              <Link to="/schedules">スクリーン一覧</Link>
            </li>
            <li>
              <Link to="/movie">チケット購入</Link>
            </li>
          </ul>
          <p className="copyright">©HALCinema.All rights Reserved.</p>
        </footer>
      </body>
    </>
  );
}

export default CommonLayout;
