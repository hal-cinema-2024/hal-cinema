import styled from "styled-components";

const CustomerInfo = () => {
  return (
    <>
      <TitleP>お客様情報</TitleP>
      <TableCustom>
        <TrCustom>
          <ThCustom>お名前</ThCustom>
          <TdCustom>海野翔太</TdCustom>
        </TrCustom>
        <TrCustom>
          <ThCustom>フリガナ</ThCustom>
          <TdCustom>ウンノショウタ</TdCustom>
        </TrCustom>
        <TrCustom>
          <ThCustom>メールアドレス</ThCustom>
          <TdCustom>nagg@hal.ac.jp</TdCustom>
        </TrCustom>
      </TableCustom>
    </>
  );
};

export default CustomerInfo;

// ----style----
const TitleP = styled.p`
  font-size: 20px;
`;

const TableCustom = styled.table`
  border: 1px solid #fff;
  width: 100%;
`;

const TrCustom = styled.tr`
  color: #000000;
`;

const ThCustom = styled.th`
  width: 30%;
  text-align: center;
  background-color: #b7b7b7;
`;

const TdCustom = styled.td`
  width: 70%;
  text-align: center;
  background-color: #ffffff;
`;
