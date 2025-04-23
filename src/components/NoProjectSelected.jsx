import image from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={image}
        alt="An empty task list"
      />
      <h2 className="font-bold text-xl text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-8">
        Select a project or get started with a new one
      </p>
      <Button onClick={onStartAddProject}>Create new project</Button>
    </div>
  );
}
