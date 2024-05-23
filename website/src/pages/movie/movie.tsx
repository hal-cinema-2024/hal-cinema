import React from "react";
import { Kbd } from "@yamada-ui/react";
import { Image } from "@yamada-ui/react";
import "./movie.css";

const Movie: React.FC = () => {
  return (
    <div>
      <div>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </div>
      <div id="img">
        <Image
          src="https://dragon-ball-official.com/assets/img/intro/intro_1.png"
          size="xl"
        />
      </div>
    </div>
  );
};

export default Movie;
