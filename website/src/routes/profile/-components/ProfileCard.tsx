import styled from "styled-components";
import { Text, Button } from "@yamada-ui/react";
import { UserMock } from "../../../../../mock/types/user";

type ProfileCardProps = {
  user: UserMock;
};
export const ProfileCard = (props: ProfileCardProps) => {
  const { user } = props;
  return (
    <ProfileContainer>
      <p
        style={{
          fontSize: "2rem",
          color: "#fff",
        }}
      >
        {user && user?.firstName}
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#fff",
        }}
      >
        {user && user?.lastName}
      </p>
      <EditButton>
        <SText>編集</SText>
      </EditButton>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #333;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const EditButton = styled(Button)`
  margin-left: 20px;
  position: absolute;
  top: 20%;
  right: 10%;
  background-color: #555;
`;

// const SAvatar = styled(Avatar)`
//   width: 150px;
//   height: 150px;
//   position: absolute;
//   top: 60%;
// `;

const SText = styled(Text)`
  color: white;
`;
