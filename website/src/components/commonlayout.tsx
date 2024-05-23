import { Outlet, Link } from "@tanstack/react-router";
import React from "react";
import "./Commonlayout.css";

function CommonLayout() {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo1">
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
            <li>
              <Link to="">マイページ</Link>
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
            <Link to="">マイページ</Link>
          </li>
          <li>
            <Link to="">マイページ</Link>
          </li>
          <li>
            <Link to="">マイページ</Link>
          </li>
          <li>
            <Link to="">マイページ</Link>
          </li>
          <li>
            <Link to="">マイページ</Link>
          </li>
        </ul>
        <p className="copyright">©HALCinema.All rights Reserved.</p>
      </footer>
    </>
  );
}

export default CommonLayout;
