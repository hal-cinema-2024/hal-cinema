import styled from "styled-components";

export const Top = () => {
  return (
    <>
      <MainSection>
        <MainImage className='main-image'></MainImage>
      </MainSection>

      <Inner>
        <Box>
          <BoxBody>
            <BoxTitle>
              <b>CONCEPT</b>
            </BoxTitle>
            <BoxText>
              HALCinemaへようこそ。
              <br />
              ナイトシネマで、忘れられない映画の夜をお過ごしください。
            </BoxText>
          </BoxBody>
          <BoxImage>
            <img src='/src/assets/cinema.jpeg' alt='コンセプト画像' />
          </BoxImage>
        </Box>
      </Inner>

      <Main>
        <Title>
          <b>上映映画一覧</b>
        </Title>
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
  margin-left: auto;
  padding: 50px 20px 50px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  & + & {
    margin-top: 80px;
  }
  @media screen and (max-width: 767px) {
    display: block;
    & + & {
      margin-top: 60px;
    }
  }
`;

const BoxBody = styled.div`
  height: 300px;
  width: 50%;
  padding: 50px;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;

const BoxTitle = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
  color: white;
  font-family: "Kaisei Tokumin", serif;
`;

const BoxText = styled.p`
  font-size: 17px;
  margin-top: 20px;
  color: white;
`;

const BoxImage = styled.figure`
  width: 50%;
  img {
    // width: 100%;
    height: 450px;
    object-fit: cover;
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;
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
  font-size: 25px;
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
  //  font-family: "Kaisei Tokumin", serif;
`;

const CardText = styled.p`
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 400;
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
export default Top;
