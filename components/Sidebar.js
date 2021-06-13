import styled from "styled-components";
import { Avatar, IconButton, Button } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";

function Sidebar() {
  const startChat = () => {
    const userInput = prompt(
      "Please enter the email address of user you want to chat"
    );

    if (!input) return null;

    if (EmailValidator.validate(input)) {
    }
  };

  return (
    <Container>
      <Header>
        <IconButton>
          <UserAvatar />
        </IconButton>

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <SearchContainer>
        <SearchIcon fontSize="large" />
        <SearchInput placeholder="Search Chats Here" height={20} />
      </SearchContainer>
      <StartChatButton onClick={startChat}>Start New Chat</StartChatButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid whitesmoke;
`;

const IconsContainer = styled.div``;

const UserAvatar = styled(Avatar)``;

const SearchContainer = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1 solid whitesmoke;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  margin: 0 1rem 0 0.5rem;
  flex: 1;
`;

const StartChatButton = styled(Button)`
  color: grey;

  &&& {
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
  }
`;
