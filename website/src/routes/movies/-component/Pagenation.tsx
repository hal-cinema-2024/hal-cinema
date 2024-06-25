import { Pagination } from "@yamada-ui/react";
import styled from "styled-components";

export function Pagenation() {
  return <SPagination showControls total={10} initialPage={1} />;
}

const SPagination = styled(Pagination)`
  margin: 100px 0 0 0;
`;
