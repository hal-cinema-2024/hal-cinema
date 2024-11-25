import { Outlet } from 'react-router-dom';
import "./style.css";

export const Home = () => {
  return (
  <>
    <div className="headerWrap">
      <div>
        <h1>HAL Cinema</h1>
        <nav>
          <ul>
            <li>映画情報</li>
            <li>上映スケジュール</li>
            <li>利用者情報</li>
            <li>予約情報</li>
          </ul>
        </nav>
      </div>
      <p>ログアウト</p>
    </div>

    <Outlet />
  </>
  );
};

