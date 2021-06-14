const containerStyle = { display: "flex", flexDirection: "column" };

const headerStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid whitesmoke",
};
const searchContainer = {
  paddingLeft: "1rem",
  display: "flex",
  alignItems: "center",
  borderBottom: "1 solid whitesmoke",
};

const searchInput = {
  outlineWidth: "0",
  border: "none",
  margin: "0 1rem 0 0.5rem",
  flex: "1",
};

const startChatButton = {
  color: "grey",
  borderBottom: "1px solid whitesmoke",
  borderTop: "1px solid whitesmoke",
};

export {
  containerStyle,
  headerStyle,
  searchContainer,
  searchInput,
  startChatButton,
};
