import styled from "styled-components";
import { Text, Button, Avatar } from "@yamada-ui/react";
import { useUser } from "../../../hooks/services/useUser";
import { useContext } from "react";
import { UserIdContext } from "../../../-store/useUserIdContext";

export const ProfileCard = () => {
  const { userId } = useContext(UserIdContext);
  const { user } = useUser(userId!);

  return (
    <ProfileContainer>
      <SAvatar src={user?.userId} alt='Avatar' />
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

const SAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 60%;
`;

const SText = styled(Text)`
  color: white;
`;
