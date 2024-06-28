import styled from "styled-components";
import { Card } from "@yamada-ui/react";
// import sam01 from "/src/assets/sample01.jpg";
// import sam02 from "/src/assets/sample02.jpg";
// import sam03 from "/src/assets/sample03.jpg";

import type { MovieType } from "./MoviesDate";
import { MovieList } from "./MoviesDate";

const Movies = () => {
  return (
    <>
      {MovieList.map((item: MovieType, index: number) => (
        <MoviesContainer key={index}>
          <SSdev>
            <MovieName>
              <MovieImage>
                <img src={item.img} alt='fas8' />
              </MovieImage>
              <MovieTextDiv>
                <MovieFlexdiv>
                  <MoviesTitle></MoviesTitle>
                  <MoviesTitleName>
                    <b>{item.movieName}</b>
                  </MoviesTitleName>
                </MovieFlexdiv>
                <MovieFlexdiv>
                  <MoviesDirector>監督名：</MoviesDirector>
                  <MoviesDirectorName>{item.directorName}</MoviesDirectorName>
                </MovieFlexdiv>
                <MovieFlexdiv>
                  <MoviePerformer>出演者：</MoviePerformer>
                  <MoviePerformerName>{item.performerName}</MoviePerformerName>
                </MovieFlexdiv>
              </MovieTextDiv>
            </MovieName>
            <DetailsButton>
              <p>詳細へ </p>
              <Arrow></Arrow>
            </DetailsButton>
          </SSdev>
        </MoviesContainer>
      ))}
    </>
  );
};

export default Movies;

//-------------------------style-------------------------
// 全体
const MoviesContainer = styled(Card)`
  padding: 15px 15px 40px 15px;
  width: 100vw;
  /* margin: 0 0 15px 0;*/
  margin: 0 auto 30px auto;
  background-color: #969696;
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;

const MovieTextDiv = styled.div`
  margin: 0 0 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* コンテンツを下に配置 */
`;

const SSdev = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

// 作品の画像（仮）
const MovieImage = styled.div`
  background-color: #002200;
  text-align: center;
  overflow: hidden;
  border-radius: 10px;

  img {
    height: 250px;
    width: 400px;
    object-fit: scale-down;
  }
`;

const MovieName = styled.div`
  display: flex;
  margin: 0 0 0 0;
`;

// 詳細の横の矢印
const DetailsButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    margin: 0;
    padding-right: 5px;
  }
`;

const Arrow = styled.div`
  height: 20px;
  width: 20px;
  background-color: #000;
`;

// 作品名、監督名、出演者の全体設定
const MovieFlexdiv = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  align-items: flex-end; /* アイテムを下に配置 */
`;

// タイトル
const MoviesTitle = styled.h3`
  font-size: 30px;
  margin-bottom: -50px;
  margin: 0; /* デフォルトのマージンを削除 */
`;

const MoviesTitleName = styled.h3`
  font-size: 30px;
  margin: 0; /* デフォルトのマージンを削除 */
`;

// 監督名
const MoviesDirector = styled.p`
  font-size: 20px;
  margin: 0; /* デフォルトのマージンを削除 */
`;

const MoviesDirectorName = styled.p`
  font-size: 20px;
  margin: 0; /* デフォルトのマージンを削除 */
`;

// 出演者
const MoviePerformer = styled.p`
  font-size: 20px;
  margin: 0; /* デフォルトのマージンを削除 */
`;

const MoviePerformerName = styled.p`
  font-size: 20px;
  margin: 0; /* デフォルトのマージンを削除 */
`;
