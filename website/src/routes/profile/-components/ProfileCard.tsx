import styled from "styled-components";
import { Text, Button } from "@yamada-ui/react";
import {
  GetUserResponseInterface,
  UserInterface,
} from "../../../../../fe-api/interfaces/user";

type ProfileCardProps = {
  user: GetUserResponseInterface;
};
export const ProfileCard = (props: ProfileCardProps) => {
  const { user } = props;
  const data = user as UserInterface;
  console.log(data);
  return (
    <ProfileContainer>
      {data && data?.firstName}
      {data && data?.lastName}
      <EditButton>
        <SText>編集</SText>
      </EditButton>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #f0f0f0;
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
