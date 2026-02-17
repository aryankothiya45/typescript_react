export default function Panel({ title, isActive, onShow, children }) {
  return(
    <div>
      <h3 onClick={onShow}>{title}</h3>
      {isActive && <p>{children}</p>}
    </div>
  );
}