export default function Input({ ref, label, textarea, ...props }) {
  const classes =
    'w-full p-1 rounded-sm border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} ref={ref} {...props} />
      ) : (
        <input className={classes} ref={ref} {...props} />
      )}
    </div>
  );
}
