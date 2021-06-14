import { Avatar } from "@material-ui/core";

function ChatHeader() {
  return (
    <div style={container}>
      <Avatar />
      <p>Chat Recipient</p>
    </div>
  );
}

export default ChatHeader;

const container = {
  display: "flex",
  background: "whitesmoke",
  width: "100%",
  alignItems: "center",
  height: "66px",
};
