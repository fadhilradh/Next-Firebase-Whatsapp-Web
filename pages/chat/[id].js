import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import ChatHeader from "../../components/ChatHeader";
import ChatsContainer from "../../components/ChatsContainer";
import ChatInput from "../../components/ChatInput";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../lib/getRecipientEmail";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";
import Message from "../../components/Message";

function Chat({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [messagesSnapshots] = useCollection(
    db
      .collection("chats")
      .doc(router.query.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const showMessages = () => {
    if (messagesSnapshots) {
      return messagesSnapshots.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            // timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ));
    }
  };

  return (
    <Container>
      <Sidebar />
      <ChatScreen>
        <ChatHeader
          recipientEmail={getRecipientEmail(chat.users, user)}
        ></ChatHeader>
        <ChatsContainer>{showMessages()}</ChatsContainer>
        <ChatInput></ChatInput>
      </ChatScreen>
    </Container>
  );
}

export default Chat;

export async function getServerSideProps(context) {
  const ref = db.collection("chats").doc(context.query.id);

  // prepare message in the server
  const messagesRef = await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get();

  const messages = messagesRef.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  // prep the chats in the server
  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  console.log(chat, messages);

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;

const ChatScreen = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
