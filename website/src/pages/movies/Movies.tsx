import styled from "styled-components";

const Movies = () => {
  return (
    <>
      <Sh1>上映映画一覧</Sh1>
      <div>
        <h3>作品名</h3>
        <p>監督名：</p>
        <p>出演者：</p>
        <p>詳細へ</p>
      </div>
    </>
  );
};

export default Movies;

// style
const Sh1 = styled.h1`
  color: red;
`;
