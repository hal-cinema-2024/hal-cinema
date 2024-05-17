import styled from "styled-components";


const Movies = () => {
  return (
    <>
      <h1>上映映画一覧</h1>
      <MoviesContainer>
        <MovieName>
        <MovieImage>ここに画像</MovieImage>
          <div>
            <MovieFlexdiv>
              <MoviesTitle>作品名：</MoviesTitle>
              <MoviesTitleName>さくひんめい</MoviesTitleName>
            </MovieFlexdiv>
            <MovieFlexdiv>
              <MoviesDirector>監督名：</MoviesDirector>
              <MoviesDirectorName>かんとく</MoviesDirectorName>
            </MovieFlexdiv>
            <MovieFlexdiv>
              <MoviePerformer>出演者：</MoviePerformer>
              <MoviePerformerName>しゅつえんしゃ</MoviePerformerName>
            </MovieFlexdiv>
            
          
          </div>
        </MovieName>
        <DetailsButton>
          <p>詳細へ  </p>
          <Arrow></Arrow>
        </DetailsButton>
      </MoviesContainer>
      
    </>
  );
};

export default Movies;

// style
// 全体
const MoviesContainer = styled.div`
  padding: 10px;
  background-color: #D9D9D9;
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;
// 作品の画像（仮）
const MovieImage = styled.div`
margin: 0 10px 0 0;
  height: 250px;
  width: 400px;
  background-color: #002200;
  text-align: center;
  padding: 100px 0 ;
`;
const MovieName = styled.div`
  display: flex;
`;
// 詳細の横の矢印
const DetailsButton = styled.div`
  display: flex;
  
`;
const Arrow = styled.div`
  margin: 0 0 0 10px;
  height: 20px;
  width: 20px;
  background-color: #000;
`;

// 作品名、監督名、出演者の全体設定
const MovieFlexdiv = styled.div`
  display: flex;
  margin: 0 0 20px 0;
`;
// タイトル
const MoviesTitle = styled.h3`
  font-size: 30px;
`;
const MoviesTitleName = styled.h3`
  font-size: 30px;
`;
// 監督名
const MoviesDirector = styled.p`
  font-size: 20px;
`;
const MoviesDirectorName = styled.p`
  font-size: 20px;
`;

// 出演者
const MoviePerformer = styled.p`
  font-size: 20px;
`;
const MoviePerformerName = styled.p`
  font-size: 20px;
`;