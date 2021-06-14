import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <div style={loadingStyle}>
      <Circle color="#6DBCF7" size={80} />
    </div>
  );
}

export default Loading;

const loadingStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};
