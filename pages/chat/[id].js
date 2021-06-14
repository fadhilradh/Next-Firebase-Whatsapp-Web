import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import ChatHeader from "../../components/ChatHeader";

function Chat() {
  return (
    <Container>
      <Sidebar />
      <ChatContainer>
        <ChatHeader></ChatHeader>
        {/* <ChatBody></ChatBody>
        <ChatInput></ChatInput> */}
      </ChatContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const ChatContainer = styled.div`
  display: flex;
  flex: 1;
`;
