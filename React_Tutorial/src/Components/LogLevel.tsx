interface LogType {
  status: "Info" | "Warn" | "Error";
}

const LogLevel = (props: LogType) => {
  let status;
  if (props.status === "Info") {
    status = "Info";
  } else if (props.status === "Warn") {
    status = "Warn";
  } else if (props.status === "Error") {
    status = "Error";
  }
  return (
    <>
      <h2>4. Condition Checking</h2>
      {status}
    </>
  );
};

export default LogLevel;
