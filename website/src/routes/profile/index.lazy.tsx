import { createLazyFileRoute } from "@tanstack/react-router";
import { OrderCard } from "./-components/OrderCard";
import { ProfileCard } from "./-components/ProfileCard";
import styled from "styled-components";
import { Suspense } from "react";
import { useOrderByUser } from "../../../../mock/hooks/useOrderByUser";
import { useUser } from "../../../../mock/hooks/useUser";
export const Route = createLazyFileRoute("/profile/")({
  component: Index,
});

function Index() {
  const { user } = useUser("1");
  const { orders } = useOrderByUser(user?.id ?? "1");

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileCard user={user!} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <OrderCard orders={orders!} />
      </Suspense>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto 20px auto;
`;
