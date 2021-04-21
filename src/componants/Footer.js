export function Footer({ count }) {
  console.log(count);

  return (
    <div className="footer">
      <h4>You clicked {count} Times</h4>
    </div>
  );
}
