import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";
import getRecipientEmail from "../lib/getRecipientEmail";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";

function Chat({ id, users }) {
  const router = useRouter();

  const [user] = useAuthState(auth);
  const [recipientSnapshots] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const recipientData = recipientSnapshots?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  return (
    <ChatContainer onClick={enterChat}>
      {recipientData ? (
        <Avatar src={recipientData?.photoURL} />
      ) : (
        <Avatar>{recipientEmail[0]}</Avatar>
      )}
      <p style={{ marginLeft: "10px" }}>{recipientEmail}</p>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ededed;
  padding: 10px;
  align-items: center;
  height: 72px;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
`;
