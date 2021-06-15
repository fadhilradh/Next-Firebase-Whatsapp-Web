import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function ChatHeader(props) {
  return (
    <div style={container}>
      <Avatar />
      <p style={{ marginLeft: "15px" }}>{props.recipientEmail}</p>
      <IconButton style={{ marginLeft: "auto" }}>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
}

export default ChatHeader;

const container = {
  display: "flex",
  background: "#EDEDED",
  width: "100%",
  alignItems: "center",
  height: "66px",
  paddingLeft: "20px",
  borderLeft: "1px solid lightgrey",
  position: "sticky",
  zIndex: "100",
  top: "0",
};
