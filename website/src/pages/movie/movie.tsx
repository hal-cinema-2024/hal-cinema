import React from "react";
import { Image as YamadaImage, Box } from "@yamada-ui/react";
import "./movie.css";

const Movie: React.FC = () => {
  return (
    <div id="parent">
      <h1 id="page-title">作品詳細</h1>
      <div style={{ display: "flex" }}>
        <div id="img">
          <YamadaImage
            src="https://not-found.com/not-found.png"
            fallback="https://via.placeholder.com/512"
            fallbackStrategy="onError"
            size="xl"
            style={{ maxWidth: "339px", maxHeight: "480px" }}
          />
        </div>
        <div>
          <h2 id="work-name">
            作品名 のび太とのび太とのび太とのび太とのび太と
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
        </div>
      </div>
    </div>
  );
};

export default Movie;
