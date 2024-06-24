import styled from "styled-components";
import { Card } from "@yamada-ui/react";
import { SimpleGrid, GridItem, Image, Text, Button } from "@yamada-ui/react";

type MovieType = {
  img: string;
  movieName: string;
  date: string;
  screen: string;
};
const MovieList = [
  {
    img: "/src/assets/sample02.jpg",
    movieName: "映画タイトル",
    date: "2021/10/10",
    screen: "1",
  },
  {
    img: "/src/assets/sample02.jpg",
    movieName: "映画タイトル",
    date: "2021/10/10",
    screen: "1",
  },
  {
    img: "/src/assets/sample02.jpg",
    movieName: "映画タイトル",
    date: "2021/10/10",
    screen: "1",
  },
];

export const MovieCard = () => {
  return (
    <>
      <Container columns={2}>
        {MovieList.map((movie: MovieType, index: number) => (
          <SGridItem key={index}>
            <SCard>
              <ImageContainer>
                <SImage src={movie.img} />
              </ImageContainer>
              <div>
                <TextContainer>
                  <Text>映画</Text>
                  <Text>{movie.movieName}</Text>
                </TextContainer>
                <TextContainer>
                  <Text>日付</Text>
                  <Text>{movie.date}</Text>
                </TextContainer>
                <TextContainer>
                  <Text>上映スクリーン</Text>
                  <Text>
                    スクリーン{""}
                    {movie.screen}
                  </Text>
                  <SButton>
                    <Text>もっと見る</Text>
                  </SButton>
                </TextContainer>
              </div>
            </SCard>
          </SGridItem>
        ))}
      </Container>
    </>
  );
};

const SImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.div`
  height: 300px;
  width: 200px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  margin-bottom: 10px;
`;

const SGridItem = styled(GridItem)`
  width: 100%;
`;

const SCard = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  padding: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  padding: 5px;
`;
const Container = styled(SimpleGrid)`
  margin: 0 auto;
  width: 70%;
  padding: 10px;
  gap: 20px;
  padding-top: 80px;
`;

const SButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 30px;
`;
