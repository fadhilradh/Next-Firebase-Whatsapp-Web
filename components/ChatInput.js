import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";

function ChatInput() {
  return (
    <form style={form}>
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
      <IconButton>
        <AttachFileIcon />
      </IconButton>
      <input style={inputStyle} placeholder="Type a message..." />
      <IconButton>
        <MicIcon />
      </IconButton>
    </form>
  );
}

export default ChatInput;

const form = {
  background: "#EDEDED",
  display: "flex",
  width: "100%",
  height: "62px",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 15px 0 15px",
  position: "sticky",
  bottom: "0",
  zIndex: "100",
};

const inputStyle = {
  margin: "10px",
  borderRadius: "21px",
  border: "none",
  flexGrow: "1",
  outlineWidth: "0",
  padding: "15px",
};
