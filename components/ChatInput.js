function ChatInput() {
  return (
    <div style={container}>
      <input style={inputStyle} placeholder="Type a message..." />
    </div>
  );
}

export default ChatInput;

const container = {
  background: "#EDEDED",
  display: "flex",
  width: "100%",
  height: "62px",
  justifyContent: "center",
};

const inputStyle = {
  margin: "10px",
  borderRadius: "21px",
  border: "none",
  width: "800px",
  outlineWidth: "0",
  padding: "15px",
};
