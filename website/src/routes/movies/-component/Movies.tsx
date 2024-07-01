import styled from "styled-components";
import { Card, Link } from "@yamada-ui/react";
import { MovieInterface } from "../../../../../fe-api/interfaces/movie";
interface MoviePropsInterface {
  movies: MovieInterface[];
}

export const Movies = (props: MoviePropsInterface) => {
  const { movies } = props;
  return (
    <>
      <Section>
        {movies.map((item: MovieInterface) => (
          <MoviesContainer key={item.movieId}>
            <SSdev>
              <MovieImage>
                <img src={item.thumbnail} alt="Movie Poster" />
              </MovieImage>
              <MovieTextDiv>
                <MovieFlexdiv>
                  <MoviesTitleName>
                    <b>{item.movieName}</b>
                  </MoviesTitleName>
                </MovieFlexdiv>
                <MovieFlexdiv>
                  <MoviesDirector>監督名：</MoviesDirector>
                  <MoviesDirectorName>{item.director}</MoviesDirectorName>
                </MovieFlexdiv>
              </MovieTextDiv>

              <Link href={`${item.link}`}>
                <DetailsButton>
                  <p>詳細へ </p>
                </DetailsButton>
              </Link>
            </SSdev>
          </MoviesContainer>
        ))}
      </Section>
    </>
  );
};

//-------------------------style-------------------------
const Section = styled.section`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "M PLUS 1 Code", monospace;
`;

const MoviesContainer = styled(Card)`
  padding: 15px;
  margin: 15px 0;
  background-color: rgba(150, 150, 150, 0.8); // 半透明な背景色
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const MovieTextDiv = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
  }
`;

const SSdev = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MovieImage = styled.div`
  text-align: center;
  overflow: hidden;
  border-radius: 10px;
  flex-shrink: 0;

  img {
    height: 150px;
    width: 280px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`;

const DetailsButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  background-color: #333631;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;

  p {
    margin: 0;
    padding-right: 5px;
  }

  &:hover {
    background-color: #000000;
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 15px;
  }
`;

const MovieFlexdiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const MoviesTitleName = styled.h3`
  font-size: 24px;
  margin: 0;
  font-weight: bold;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const MoviesDirector = styled.p`
  font-size: 18px;
  margin: 0;
  color: #ddd;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const MoviesDirectorName = styled.p`
  font-size: 18px;
  margin: 0;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// const MoviePerformer = styled.p`
//   font-size: 18px;
//   margin: 0;
//   color: #ddd;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const MoviePerformerName = styled.p`
//   font-size: 18px;
//   margin: 0;
//   color: #fff;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;
