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
const TitleP = styled.p``;

const TableCustom = styled.table``;

const TrCustom = styled.tr``;

const ThCustom = styled.th``;

const TdCustom = styled.td``;
