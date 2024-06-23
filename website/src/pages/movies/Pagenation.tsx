import { Pagination } from "@yamada-ui/react";
import styled from "styled-components";

export function Pagenation() {
  return <Pa showControls total={10} initialPage={1} />;
}

const Pa = styled(Pagination)`
  margin: 100px 0 0 0;
`;
