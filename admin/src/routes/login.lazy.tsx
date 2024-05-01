import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginFormProvider } from "../form/login_form/LoginFormProvider";
import styled from "styled-components";
export const Route = createLazyFileRoute("/login")({
  component: Index,
});

function Index() {
  return (
    <>
      <Sh2>管理者ログイン</Sh2>
      <Container>
        <LoginFormProvider />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
  background-color: #e2e2e2;
  padding-top: 100px;
  padding: 50px 140px;
  border-radius: 20px;
`;

const Sh2 = styled.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;
