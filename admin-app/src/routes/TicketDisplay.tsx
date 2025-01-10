import { useParams } from "react-router";
import styled from "styled-components";
import { OrdersDetail } from "../../../mock/types/orders";
import { useOrderById } from "../../../mock/hooks/useOrderById";
const TicketContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.p`
  font-weight: bold;
  color: #333;
`;

const Detail = styled.div`
  border-top: 1px solid #eee;
  padding-top: 10px;
`;

export const TicketDisplay = () => {
  const { id } = useParams();
  const { order } = useOrderById(id!);
  if (!order || order.orderDetail === undefined || order.orderDetail === null)
    return <div>loading...</div>;

  return (
    <TicketContainer key={order.id}>
      <Title>注文ID: {order.id}</Title>
      <Title>映画名: {order.movieName}</Title>

      {order.orderDetail.map((detail: OrdersDetail) => (
        <Detail key={detail.seatName}>
          <p>座席: {detail.seatName}</p>
          <p>
            料金種別:{" "}
            {detail.priceType === 0
              ? "一般"
              : detail.priceType === 1
              ? "大学生等"
              : detail.priceType === 2
              ? "中学 高校"
              : detail.priceType === 3
              ? "小学生 幼児"
              : detail.priceType === 4
              ? "幼児"
              : ""}
          </p>
          <p>料金: {detail.price}</p>
        </Detail>
      ))}
    </TicketContainer>
  );
};
