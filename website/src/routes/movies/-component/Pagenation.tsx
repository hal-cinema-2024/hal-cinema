import { Pagination } from "@yamada-ui/react";
import styled from "styled-components";

export function Pagenation() {
  return (
    <Pa
      showControls
      total={10}
      size="lg"
      initialPage={1}
      colorScheme="secondary"
    />
  );
}

const Pa = styled(Pagination)`
  margin: 10px 0 50px 0;

  .ui-pagination__item {
    color: white; // ページ番号の文字を白くする
  }

  .ui-pagination__item--active {
    color: white; // 現在のページ番号の文字を白くする
  }
`;
