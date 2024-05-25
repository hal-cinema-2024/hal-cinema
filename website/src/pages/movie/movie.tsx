import React from "react";
import { Image as YamadaImage, Box } from "@yamada-ui/react";
import { ScrollArea } from "@yamada-ui/react";
import "./movie.css";

const Movie: React.FC = () => {
  return (
    <div id="parent">
      <h1 id="page-title">作品詳細</h1>
      <div style={{ display: "flex" }}>
        <div id="img">
          <YamadaImage
            src="https://ogre.natalie.mu/media/news/comic/2016/0408/koenokatachi_visual_160408.jpg"
            fallback="https://cdn.discordapp.com/attachments/590844974120042536/1243941004646813736/110_20240525235712.png?ex=66534dd6&is=6651fc56&hm=649e0817af247f3d33dee008dd99297beeae23de30a6345f8fbae5394142139e&"
            fallbackStrategy="onError"
            style={{ maxWidth: "508.5px", maxHeight: "720px" }}
          />
        </div>
        <div>
          <h2 id="work-name">聲の形</h2>
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
          <span id="synopsis">あらすじ</span>
          <ScrollArea id="synopsis-detail" h="180px">
            <p>
              地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。人さらいのウーロンや盗賊のヤムチャらを巻き込んだボール探しの末、世界征服を企むピラフ一味にボールを奪われ神龍を呼び出されるが、ウーロンがとっさに言い放った下らない願いを叶えてもらうことで一味の野望を阻止する。その後、悟空は旅の途中に知り合った武術の達人・亀仙人の下で、後に親友となるクリリンと共に8か月間にわたる修行を積み、その成果を確かめるために世界一の武術の達人を決める天下一武道会に出場し、変装して出場していた亀仙人に敗れるも準優勝を果たす。悟空は再び修行の旅へと出発し、ドラゴンボールの悪用を企むレッドリボン軍との闘いや、孫悟飯との再会などを経てさらに強さを増していく。さらに3年後の天下一武道会では、亀仙流のライバルである鶴仙流の天津飯（てんしんはん）と闘うが、あと一歩のところで敗れ、前回と同じく準優勝に終わる。
            </p>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Movie;
