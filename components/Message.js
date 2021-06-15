import styled from "styled-components";

function Message({ user, message }) {
  return (
    <Container>
      <p>{message.message}</p>
      <p>aaa</p>
    </Container>
  );
}

export default Message;

const Container = styled.div``;
