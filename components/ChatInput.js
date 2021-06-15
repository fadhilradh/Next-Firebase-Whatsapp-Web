import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import { useState } from "react";
import { db } from "../firebase";
import * as firebase from "firebase";
import "firebase/firestore";
import { useRouter } from "next/router";

function ChatInput(props) {
  const router = useRouter();
  const user = props.user;
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    // update lastSeen
    db.collection("users").doc(user.uid).set(
      {
        // lastSeen: firebase.firestore.FieldValue.serverTimeStamp(),
      },
      { merge: true }
    );

    db.collection("chats").doc(router.query.id).collection("messages").add({
      // timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
      message: input,
      user: user.email,
      photo: user.photoURL,
    });

    setInput("");
  };
  return (
    <form style={form}>
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
      <IconButton>
        <AttachFileIcon />
      </IconButton>
      <input
        style={inputStyle}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button hidden disabled={!input} type="submit" onClick={sendMessage}>
        Send Message
      </button>
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
