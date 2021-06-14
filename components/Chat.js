import { Avatar } from "@material-ui/core";
import styled from "styled-components";

function Chat({ id, user }) {
  return (
    <ChatContainer>
      <Avatar />
      <p style={{ marginLeft: "10px" }}>Recipient Email</p>
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
