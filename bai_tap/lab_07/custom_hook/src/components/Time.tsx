import CurrentTime from "../hooks/CurrentTime";

function Time() {
  const { currentTime } = CurrentTime();
  return (
    <>
      <h3>Current Time: {currentTime.toLocaleTimeString()}</h3>
    </>
  );
}

export default Time;
