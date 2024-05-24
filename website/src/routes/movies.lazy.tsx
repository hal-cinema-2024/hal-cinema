import styled from "styled-components";

import { createLazyFileRoute } from "@tanstack/react-router";
import Movies from "../pages/movies/Movies";
import { Pagenation } from "../pages/movies/Pagenation";

export const Route = createLazyFileRoute("/movies")({
  component: Index,
});

function Index() {
  return (
    <>
      <Moviesboxdiv>
        <Pagetitle>上映映画一覧</Pagetitle>
        <Moviesdiv>
          <Movies />
        </Moviesdiv>
        <Pagenationdiv>
          <Pagenation />
        </Pagenationdiv>
      </Moviesboxdiv>
    </>
  );
}

//-------------------------style-------------------------
const Moviesboxdiv = styled.div`
  width: 100vw;
  margin: 0 auto;
  background-color: #67e3e6; //後で消す
`;

const Pagetitle = styled.h1`
  text-align: center;
  color: #fff;
`;

const Moviesdiv = styled.div`
  /* margin: 0 auto; */
`;

const Pagenationdiv = styled.div`
  width: fit-content; /* コンテンツに合わせた幅 */
  margin: 0 auto; /* 水平方向に中央寄せ */
  display: flex; /* Flexboxを使用してコンテンツを中央寄せ */
  justify-content: center;
`;

export default Index;
