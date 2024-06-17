import styled from "styled-components";

const BuyContent = () => {
  return (
    <>
      <TitleContainer>
        <p>購入内容</p>
      </TitleContainer>
      <TableCustom>
        <TrCustom>
          <ThCustom>映画名</ThCustom>
          <TdCustom>海野翔太</TdCustom>
        </TrCustom>
        <TrCustom>
          <ThCustom>スクリーン</ThCustom>
          <TdCustom>ウンノショウタ</TdCustom>
        </TrCustom>
        <TrCustom>
          <ThCustom>座席</ThCustom>
          <TdCustom>nagg@hal.ac.jp</TdCustom>
        </TrCustom>
        <TrCustom>
          <ThCustom>上映時間</ThCustom>
          <TdCustom>nagg@hal.ac.jp</TdCustom>
        </TrCustom>
        <TrCustom>
          <ThCustom>金額</ThCustom>
          <TdCustom>nagg@hal.ac.jp</TdCustom>
        </TrCustom>
      </TableCustom>
    </>
  );
};

export default BuyContent;

// ----style----
const TitleContainer = styled.div`
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 20px;
  }
  button {
    padding: 3px 30px;
    font-size: 14px;
    background-color: #fff;
    color: #000;
    border-radius: 5px;
  }
`;

const TableCustom = styled.table`
  width: 100%;
`;

const TrCustom = styled.tr`
  color: #000000;
  border-bottom: 1px solid #333;
`;

const ThCustom = styled.th`
  width: 30%;
  padding: 20px 0;
  text-align: center;
  border-right: 1px solid #333;
  background-color: #b7b7b7;
`;

const TdCustom = styled.td`
  width: 70%;
  padding: 20px 0;
  text-align: center;
  background-color: #ffffff;
`;
