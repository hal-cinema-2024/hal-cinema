import styled from "styled-components";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Pagenation } from "./-component/Pagenation";
import { useMovies } from "./-hooks/useMovies";
import { Movies } from "./-component/Movies";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/movies")({
  component: Index,
});

function Index() {
  const { movies } = useMovies();
  return (
    <>
      <Moviesboxdiv>
        <Pagetitle>上映映画一覧</Pagetitle>
        <Moviesdiv>
          <Suspense fallback={<div>Loading...</div>}>
            <Movies movies={movies!} />
          </Suspense>
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
  background-color: #151515; //後で消す
`;

const Pagetitle = styled.h1`
  position: relative;
  text-align: center;
  padding-top: 4vh;
  margin-bottom: -2.5vh;
  font-size: 2rem;
  color: white;
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
