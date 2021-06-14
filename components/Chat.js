import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import getRecipientEmail from "../lib/getRecipientEmail";
import { useRouter } from "next/router";

function Chat({ id, users }) {
  const router = useRouter();

  const [user] = useAuthState(auth);

  const recipientEmail = getRecipientEmail(users, user);

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  return (
    <ChatContainer onClick={enterChat}>
      <Avatar src={user.image} />
      <p style={{ marginLeft: "10px" }}>{recipientEmail}</p>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  display: flex;
  border-bottom: 1px solid whitesmoke;
  padding: 10px;
  align-items: center;
  height: 72px;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
`;
