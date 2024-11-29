import { Link, Outlet } from "react-router-dom";
import "./style.css";

export const Layout = () => {
  const user = { id: 1, name: "John Doe" };

  return (
    <>
      <div className='headerWrap'>
        <div>
          <h1>HAL Cinema</h1>
          <nav>
            <ul>
              <li>
                <Link to='/movies'>映画情報</Link>
              </li>
              <li>
                <Link to='/schedules'>上映スケジュール</Link>
              </li>
              <li>
                <Link to='/useres' state={{ user }}>
                  利用者情報
                </Link>
              </li>
              <li>
                <Link to='/reserved'>予約情報</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p>ログアウト</p>
      </div>
      <Outlet />
    </>
  );
};
