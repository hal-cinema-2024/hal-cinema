import React from "react";
import "./Top.css";
import { LoginButton } from "../../feature/auth/utils/LoginButton";

export const Top = () => {
  return (
    <>
      <section className='main'>
        <div className='main-image'></div>
      </section>

      <section className='concept'>
        <div className='concept-left'>
          <h2>コンセプトタイトル</h2>
          <p>
            ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
            ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
          </p>
        </div>
        <div className='concept-right'>
          <div className='concept-image top'></div>
          <div className='concept-image bottom'></div>
        </div>
      </section>

      <section className='movies'>
        <h2>上映中の作品</h2>

        <div className="movies-list">
          <div className="movie-card">
            <div className="movie-image">
              <img src="/src/assets/sample01.jpg" alt="fas8" height={"150px"} />
            </div>
            <div className="movie-info">
              <p>2020.10.01</p>
              <p>映画名</p>
              <p>監督名</p>
              <p>出演者</p>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-image">
              <img src="/src/assets/sample01.jpg" alt="fas8" height={"150px"} />
            </div>
            <div className="movie-info">
              <p>2020.10.01</p>
              <p>映画名</p>
              <p>監督名</p>
              <p>出演者</p>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-image">
              <img src="/src/assets/sample01.jpg" alt="fas8" height={"150px"} />
            </div>
            <div className="movie-info">
              <p>2020.10.01</p>
              <p>映画名</p>
              <p>監督名</p>
              <p>出演者</p>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-image">
              <img src="/src/assets/sample01.jpg" alt="fas8" height={"150px"} />
            </div>
            <div className="movie-info">
              <p>2020.10.01</p>
              <p>映画名</p>
              <p>監督名</p>
              <p>出演者</p>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-image">
              <img src="/src/assets/sample01.jpg" alt="fas8" height={"150px"} />
            </div>
            <div className="movie-info">
              <p>2020.10.01</p>
              <h1>映画名</h1>
              <p>監督名</p>
              <p>出演者</p>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-image">
              <img src="/src/assets/sample01.jpg" alt="fas8" height={"150px"} />
            </div>
            <div className="movie-info">
              <p>2020.10.01</p>
              <p>映画名</p>
              <p>監督名</p>
              <p>出演者</p>
            </div>
          </div>
        </div>
      </section>

      <section className='upcoming-movies'>
        <h2>公開予定の作品</h2>

        <div className="movies-list">
          <div className="movie-card">
            <div className="movie-image">
              <img src="/src/assets/sample01.jpg" alt="fas8" height={"150px"} />
            </div>
            <div className="movie-info">
              <p>2020.10.01</p>
              <p>映画名</p>
              <p>監督名</p>
              <p>出演者</p>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-image">
              <img src="/src/assets/sample01.jpg" alt="fas8" height={"150px"} />
            </div>
            <div className="movie-info">
              <p>2020.10.01</p>
              <p>映画名</p>
              <p>監督名</p>
              <p>出演者</p>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-image">
              <img src="/src/assets/sample01.jpg" alt="fas8" height={"150px"} />
            </div>
            <div className="movie-info">
              <p>2020.10.01</p>
              <p>映画名</p>
              <p>監督名</p>
              <p>出演者</p>
            </div>
          </div>
          <div className='movie-card'>
            <div className='movie-image'></div>
            <div className='movie-info'>
              <p>2020.10.01</p>
              <p>映画名</p>
              <p>監督名</p>
              <p>出演者</p>
            </div>
          </div>
        </div>
      </section>
      <LoginButton />
    </>
  );
};

// 映画情報(上映日、映画名、監督名、出演者)
// ここにcssを設定するように書き直す
