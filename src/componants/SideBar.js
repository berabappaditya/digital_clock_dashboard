export function SideBar({
  time,
  timeArray,
  updateTimeArray,
  UpdateCount,
  count,
}) {
  function printTime() {
    updateTimeArray(() => [...timeArray, time]);
    UpdateCount(count + 1);
  }

  return (
    <div className="SideBar d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-primary m-5"
        id="clkbtn"
        onClick={() => printTime()}
      >
        click here
      </button>
    </div>
  );
}
