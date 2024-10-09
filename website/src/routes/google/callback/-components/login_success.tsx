import { Button, Link } from "@yamada-ui/react";
import React from "react";
import { useGetGoogleParams } from "../../../../hooks/useGetGoogleParams";

export const Result: React.FC = () => {
  const { url } = useGetGoogleParams();
  if (!url) return <div>loading...</div>;

  return (
    <>
      <div style={styles.body}>
        <div style={styles.container}>
          <img
            src='../src/assets/check.png'
            alt='チェック'
            style={styles.checkImage}
          />
          <h1 style={styles.title}>ログイン成功</h1>
          <p style={styles.description}>
            ログインが完了しました。 引き続きHALシネマをお楽しみください。
          </p>
          <Link href='/'>
            <Button style={styles.button}>TOPへ戻る</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    margin: 0,
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as const,
  },
  checkImage: {
    width: "80px", // 画像のサイズを調整
    height: "80px",
    marginBottom: "1em",
  },
  title: {
    fontSize: "2em",
    marginBottom: "0.5em",
    fontWeight: "bold", // 文字を太字に設定
    color: "#fff", // 白文字に設定
  },
  description: {
    fontSize: "1.2em",
    color: "#fff", // 白文字に設定
  },
  button: {
    marginTop: "5em",
    padding: "0.5em 1em",
    fontSize: "1em",
    cursor: "pointer",
    backgroundColor: "#555555", // ボタンに色を設定
    color: "#fff", // ボタンの文字を白に設定
    border: "none",
    borderRadius: "5px",
  },
};
