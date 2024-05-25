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
        <Box
          id="release-date"
          p="md"
          rounded="md"
          bg="danger"
          color="white"
          backgroundColor={"#61c1b0"}
          style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}
        >
          2024
          <span style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}>
            5月1日
          </span>
          公開
        </Box>
      </div>
    </div>
  );
};

export default Movie;
