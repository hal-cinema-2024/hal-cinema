import { Pagination } from "@yamada-ui/react";
import styled from "styled-components";

export function Pagenation() {
  return <Pa total={10} size="lg" defaultPage={1} colorScheme="secondary" />;
}

const Pa = styled(Pagination)`
  margin: 10px 0 50px 0;
`;
