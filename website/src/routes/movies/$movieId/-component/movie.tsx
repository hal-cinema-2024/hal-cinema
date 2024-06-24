import React from "react";
import { Image as YamadaImage, Box, ScrollArea } from "@yamada-ui/react";
import "./movie.css";

const Movie: React.FC = () => {
  return (
    <div id="parent">
      <h1 id="page-title">作品詳細</h1>
      <div id="wrap">
        <div style={{ display: "flex" }}>
          <div>
            <div id="img">
              <YamadaImage
                src="https://ogre.natalie.mu/media/news/comic/2016/0408/koenokatachi_visual_160408.jpg"
                fallback="/public/not-found.png"
                fallbackStrategy="onError"
                style={{
                  maxWidth: "348.5px",
                  maxHeight: "460px",
                  minWidth: "348.5px",
                  minHeight: "460px",
                }}
              />
            </div>
            <div>
              <p id="official-links">
                <a
                  href="https://koenokatachi-movie.com/theater/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  公式リンク
                </a>
              </p>
            </div>
          </div>
          <div>
            <h2 id="work-name">
              <b>聲の形</b>
            </h2>
            <Box
              id="release-date"
              p="md"
              rounded="md"
              bg="danger"
              color="white"
              backgroundColor={"#61c1b0"}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              2024
              <span
                style={{
                  fontSize: "1.5rem",
                  marginTop: "-6px",
                  marginLeft: "3px",
                  marginRight: "3px",
                }}
              >
                5/1(金)
              </span>
              公開
            </Box>
            <div>
              <h3 id="box-1">あらすじ</h3>
              <ScrollArea id="synopsis-detail" h="180px">
                <p>
                  "退屈すること"を何よりも嫌う少年、石田将也。ガキ大将だった小学生の彼は、転校生の少女、西宮硝子へ無邪気な好奇心を持つ。彼女が来たことを期に、少年は退屈から解放された日々を手に入れた。しかし、硝子とのある出来事がきっかけで将也は周囲から孤立してしまう。やがて五年の時を経て、別々の場所で高校生へと成長したふたり。"ある出来事"以来、固く心を閉ざしていた将也は硝子の元を訪れる。これはひとりの少年が、少女を、周りの人たちを、そして自分を受け入れようとする物語――。嗚呼ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                </p>
              </ScrollArea>
            </div>
            <div>
              <h3 id="box-2">監督</h3>
              <p id="manager">山田尚子</p>
            </div>
            <div>
              <h3 id="box-3">出演者</h3>
              <p id="cast">入野自由、早見沙織、悠木碧、小野賢章</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
