import styled from 'styled-components';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
  return (
    <Container>
      <Header>
        <IconButton>
          <UserAvatar/>
        </IconButton>
      
        <IconsContainer>
            <IconButton>
               <ChatIcon/>
            </IconButton>
            <IconButton>
               <MoreVertIcon/>
            </IconButton>
        </IconsContainer>
      </Header>
    </Container>
  )
}

export default Sidebar

const Header = styled.div`
 display: flex;
`

const IconsContainer = styled.div``

const UserAvatar = styled(Avatar)`

`;

const Container = styled.div`
    display: flex;
`








