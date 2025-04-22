export default function Input({ label, textarea }) {
  return (
    <div>
      <label>{label}</label>
      {textarea ? <textarea></textarea> : <input />}
    </div>
  );
}
