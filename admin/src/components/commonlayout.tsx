import { Outlet } from "@tanstack/react-router";
import styled from 'styled-components';

function CommonLayout() {
  return (
    <Sdiv>
      <Outlet />
    </Sdiv>
  );
}

export default CommonLayout;

const Sdiv = styled.div `
  background-color  : #ddd;
`