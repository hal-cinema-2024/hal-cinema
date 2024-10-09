import { createLazyFileRoute } from "@tanstack/react-router";
import { OrderCard } from "./-components/OrderCard";
import { ProfileCard } from "./-components/ProfileCard";
import styled from "styled-components";
import { useOrders } from "../../hooks/services/useOrders";
import { useUserId } from "../../hooks/useUserId";
import { Suspense } from "react";
import { useUser } from "../../hooks/services/useUser";

export const Route = createLazyFileRoute("/profile/")({
  component: Index,
});

function Index() {
  const { userId } = useUserId();
  const { user } = useUser(userId!);
  const { orders } = useOrders(userId!);

  console.log("user", user);

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
