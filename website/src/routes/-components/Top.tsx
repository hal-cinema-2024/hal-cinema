import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Skeleton } from "@yamada-ui/react";

export const Top: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2秒後に読み込み完了とする

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <MainSection>
          <Skeleton height="450px" width="100%" color="#f0f0f0" />
        </MainSection>

        <Inner>
          <Box>
            <BoxBody>
              <BoxTitle>
                <Skeleton height="40px" width="150px" />
              </BoxTitle>
              <BoxText>
                <Skeleton height="20px" width="300px" />
                <Skeleton height="20px" width="300px" />
              </BoxText>
            </BoxBody>
            <BoxImage>
              <Skeleton height="450px" width="100%" />
            </BoxImage>
          </Box>
        </Inner>

        <Main>
          <Title>
            <Skeleton height="25px" width="200px" />
          </Title>
          <Cards>
            {Array.from({ length: 6 }).map((_, index) => (
              <CardItem key={index} index={index}>
                <Card>
                  <CardImage>
                    <Skeleton height="auto" width="100%" />
                  </CardImage>
                  <CardContent>
                    <CardTitle>
                      <Skeleton height="20px" width="350px" />
                    </CardTitle>
                    <CardText>
                      <Skeleton height="15px" width="100%" />
                      <Skeleton height="15px" width="100%" />
                    </CardText>
                    <Skeleton height="40px" width="100%" />
                  </CardContent>
                </Card>
              </CardItem>
            ))}
          </Cards>
          <MoreButtonWrapper>
            <MoreButton>もっと見る</MoreButton>
          </MoreButtonWrapper>
        </Main>
      </>
    );
  }

  return (
    <>
      <MainSection>
        <MainImage className="main-image"></MainImage>
      </MainSection>

      <Inner>
        <Box>
          <BoxBody>
            <BoxTitle>CONCEPT</BoxTitle>
            <BoxText>
              <TextLine fontSize="24px" fontWeight="bold">
                HALシネマへようこそ。
              </TextLine>
              <TextLine>
                夜の闇が深まる時間、特別なナイトシネマの扉が開きます。
              </TextLine>
              <TextLine>
                大スクリーンに映し出される鮮やかな映像と、響き渡る臨場感溢れる音響が、未知の世界へと誘います。
              </TextLine>
            </BoxText>
          </BoxBody>
          <BoxImage>
            <img src="/src/assets/cinema.jpeg" alt="コンセプト画像" />
          </BoxImage>
        </Box>
      </Inner>

      <Main>
        <Title>上映映画一覧</Title>
        <Cards>
          {cardData.map((card, index) => (
            <CardItem key={card.id} index={index}>
              <Card>
                <CardImage>
                  <img src={card.image} alt={`Card ${card.id}`} />
                </CardImage>
                <CardContent>
                  <CardTitle>{card.title}</CardTitle>
                  <CardText>監督名：{card.text1}</CardText>
                  <CardText>出演者：{card.text2}</CardText>
                  <Button>詳細を見る</Button>
                </CardContent>
              </Card>
            </CardItem>
          ))}
        </Cards>
        <MoreButtonWrapper>
          <MoreButton>もっと見る</MoreButton>
        </MoreButtonWrapper>
      </Main>
    </>
  );
};

// 映画情報(上映日、映画名、監督名、出演者)
// ここにcssを設定するように書き直す
// const MainText = styled.section``;

const MainSection = styled.section`
  height: 400px;
  background: url("src/assets/top02.jpg") no-repeat center center;
  background-size: cover;
`;

const MainImage = styled.div`
  /* ここに必要なスタイルを追加できます */
`;

const Inner = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-right: auto;
  margin-bottom: 90px;
  margin-left: auto;
  padding: 50px 20px 50px;
`;

const BoxBody = styled.div`
  height: auto;
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 25px;
  }
`;

const BoxTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  font-family: "Kaisei Tokumin", serif;
  margin-bottom: 25px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 3px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #ffffff;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100px;
  }
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TextLine = styled.p<{ fontSize?: string; fontWeight?: string }>`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  line-height: 1.8;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  margin-top: 80px;

  border-radius: 15px;
  padding: 30px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 60px;
    padding: 20px;
  }
`;

const BoxImage = styled.figure`
  width: 50%;
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 30px;
    width: 100%;
  }
`;

// ダミーデータの生成
const generateDummyData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/500/300/?image=${i + 10}`,
    title: `映画タイトル ${i + 1}`,
    text1: "",
    text2: "",
  }));
};

const cardData = generateDummyData(6);

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 70px; /* フッターの高さ分のパディングを追加 */
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  color: white;
  font-family: "Kaisei Tokumin", serif;
`;

const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
`;

const CardItem = styled.li<{ index: number }>`
  display: flex;
  padding: 1rem;
  position: relative;
  margin-bottom: 60px;
  transform: translateY(${(props) => props.index * 20}px);

  @media (min-width: 40rem) {
    width: 50%;
  }

  @media (min-width: 56rem) {
    width: 33.3333%;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  }
`;

const CardImage = styled.div`
  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
`;

const CardContent = styled.div`
  padding: 1rem;
  background: linear-gradient(to bottom left, #a6038b 40%, #bf66b9 60%);
`;

const CardTitle = styled.h2`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
`;

const CardText = styled.p`
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

const MoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const MoreButton = styled.button`
  background-color: rgb(70, 70, 70);
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(95, 95, 95);
  }
`;
