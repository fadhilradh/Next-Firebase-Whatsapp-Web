import { Avatar, IconButton, Button } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  containerStyle,
  headerStyle,
  searchContainer,
  searchInput,
  startChatButton,
} from "./sidebarStyle";
import Chat from "./Chat";

function Sidebar() {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatSnapShots] = useCollection(userChatRef);

  const chatAlreadyExist = (inputtedEmail) =>
    !!chatSnapShots?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === inputtedEmail)?.length > 0
    );

  const startChat = () => {
    const recipientEmail = prompt(
      "Please enter the email address of user you want to chat"
    );

    if (!recipientEmail) return null;

    if (
      EmailValidator.validate(recipientEmail) &&
      recipientEmail !== user.email &&
      !chatAlreadyExist(recipientEmail)
    ) {
      db.collection("chats").add({
        users: [user.email, recipientEmail],
      });
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <IconButton onClick={() => auth.signOut()}>
          <Avatar src={user.photoURL} />
        </IconButton>

        <div>
          <IconButton size="small">
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div style={searchContainer}>
        <SearchIcon fontSize="large" />
        <input
          style={searchInput}
          placeholder="Search Chats Here"
          height={20}
        />
      </div>
      <Button style={startChatButton} onClick={startChat}>
        Start New Chat
      </Button>

      {chatSnapShots?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </div>
  );
}

export default Sidebar;
