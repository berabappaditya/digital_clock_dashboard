export function Content({ timeArray }) {
  const timeDivs = timeArray.map((timeRecord) => {
    return (
      <div>
        <p>You Clicked At{timeRecord}</p>
      </div>
    );
  });
  return <div className="content">{timeDivs}</div>;
}
