import styled from "styled-components";

{
  /* <Movies img={} movieName="" /> */
}
type MovieType = {
  // img: File;
  movieName: string;
  directorName: string;
  performerName: string;
};

const MovieList: MovieType[] = [
  {
    movieName: "名探偵コナン 漆黒の白",
    directorName: "山田太郎",
    performerName: "江戸川コナン",
  },
  {
    movieName: "名探偵コナン 2",
    directorName: "山田太郎",
    performerName: "江戸川コナン",
  },
  {
    movieName: "名探偵コナン 純白の黒",
    directorName: "山田太郎",
    performerName: "江戸川コナン",
  },
  {
    movieName: "名探偵コナン 4",
    directorName: "山田太郎",
    performerName: "江戸川コナン",
  },
];

const Movies = () => {
  return (
    <>
      {MovieList.map((item, index) => (
        <MoviesContainer key={index}>
          <MovieName>
            <MovieImage>ここに画像</MovieImage>
            <MovieTextDiv>
              <MovieFlexdiv>
                <MoviesTitle>作品名：</MoviesTitle>
                <MoviesTitleName>{item.movieName}</MoviesTitleName>
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
        </MoviesContainer>
      ))}
    </>
  );
};

export default Movies;

//-------------------------style-------------------------
// 全体
const MoviesContainer = styled.div`
  padding: 10px;
  margin: 0 0 15px 0;
  background-color: #d9d9d9;
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;
const MovieTextDiv = styled.div`
  margin: 0 0 0 25px;
`;

// 作品の画像（仮）
const MovieImage = styled.div`
  margin: 0 10px 0 0;
  height: 250px;
  width: 400px;
  background-color: #002200;
  text-align: center;
  padding: 100px 0;
`;
const MovieName = styled.div`
  display: flex;
  margin: 0 0 0 0;
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
