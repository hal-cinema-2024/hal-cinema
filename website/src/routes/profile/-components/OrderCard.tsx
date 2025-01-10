import styled from "styled-components";
import { Card } from "@yamada-ui/react";
import { SimpleGrid, GridItem, Text } from "@yamada-ui/react";
import { OrdersDetail, OrdersMock } from "../../../../../mock/types/orders";

type OrderCardProps = {
  orders: OrdersMock[];
};

export const OrderCard = (props: OrderCardProps) => {
  const { orders } = props;

  return (
    <PageContainer>
      <Title>予約確認</Title>
      <Container>
        {orders &&
          orders.map((data: OrdersMock, index: number) => (
            <SGridItem key={index}>
              <SCard>
                <TextContainer>
                  <TextTitle>映画</TextTitle>
                  <TextContent>{data.movieName}</TextContent>
                  <TextTitle>スクリーン</TextTitle>
                  <TextContent>{data.theater}</TextContent>
                  <SeatContainer>
                    {data.orderDetail &&
                      data.orderDetail.map(
                        (detail: OrdersDetail, index: number) => (
                          <SeatInfo key={index}>
                            {detail.seatName} - {detail.priceType}円
                          </SeatInfo>
                        )
                      )}
                  </SeatContainer>
                </TextContainer>
              </SCard>
            </SGridItem>
          ))}
      </Container>
    </PageContainer>
  );
};

// スタイリング
const PageContainer = styled.div`
  position: relative;
  padding-top: 100px;
  width: 100%;
  color: white;
`;

const Title = styled.h1`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const Container = styled(SimpleGrid)`
  margin: 0 auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding-top: 20px; /* タイトルとの間隔を確保 */
`;

const SGridItem = styled(GridItem)`
  width: 100%;
`;

const SCard = styled(Card)`
  width: 100%;
  min-height: 200px; /* カードの高さを固定 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  background-color: rgba(50, 50, 50, 0.9);
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextTitle = styled(Text)`
  font-size: 1rem;
  font-weight: bold;
`;

const TextContent = styled(Text)`
  font-size: 0.9rem;
  word-wrap: break-word; /* 長いテキストの折り返し */
  overflow-wrap: break-word;
`;

const SeatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 横2列に配置 */
  gap: 10px;
  width: 100%;
  margin-top: 10px;
`;

const SeatInfo = styled.div`
  background-color: rgba(100, 100, 100, 0.8);
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 0.9rem;
`;
