import Input from './Input.jsx';

export default function NewProject() {
  return (
    <div>
      <menu className="flex justify-end">
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <Input label="Title" />
      <Input label="Description" textarea />
      <Input label="Due Date" />
    </div>
  );
}
