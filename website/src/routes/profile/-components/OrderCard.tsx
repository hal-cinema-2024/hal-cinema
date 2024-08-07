import styled from "styled-components";
import { Card } from "@yamada-ui/react";
import { SimpleGrid, GridItem, Text, Button } from "@yamada-ui/react";
import {
  GetOrdersResponseInterface,
  OrdersInterface,
} from "../../../../../fe-api/interfaces/order";

type OrderCardProps = {
  orders: GetOrdersResponseInterface;
};

export const OrderCard = (props: OrderCardProps) => {
  const { orders } = props;
  const data = orders as OrdersInterface[];
  return (
    <>
      <Container columns={2}>
        <DText>予約確認</DText>

        {data &&
          data.map((data: OrdersInterface, index: number) => (
            <SGridItem key={index}>
              <SCard>
                <div>
                  <TextContainer>
                    映画
                    <Text></Text>
                  </TextContainer>
                  <TextContainer>
                    <Text>日付</Text>
                  </TextContainer>
                  <TextContainer>
                    <Text>上映スクリーン：</Text>
                    <Text>
                      スクリーン{""}
                      {data.screen}
                    </Text>
                    <br />
                    <SButton></SButton>
                  </TextContainer>
                </div>
              </SCard>
            </SGridItem>
          ))}
      </Container>
    </>
  );
};

// const SImage = styled(Image)`
//   width: 100%;
//   height: 100%;
// `;
// const ImageContainer = styled.div`
//   height: 300px;
//   width: 200px;
//   overflow: hidden;
//   border-radius: 10px;
//   position: relative;
//   margin-bottom: 10px;
// `;

const SGridItem = styled(GridItem)`
  width: 100%;
`;

const SCard = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  padding: 10px;
  background-color: rgba(150, 150, 150, 0.8);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  padding: 5px;
  color: white;
`;
const Container = styled(SimpleGrid)`
  margin: 0 auto;
  width: 70%;
  padding: 10px;
  gap: 20px;
  padding-top: 110px;
`;

const SButton = styled(Button)`
  // position: absolute;
  // bottom: 20px;
  // right: 30px;
  background-color: #333631;
`;

const DText = styled(Text)`
  color: white;
`;
