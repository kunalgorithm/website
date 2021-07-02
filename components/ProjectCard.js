import * as Fathom from 'fathom-client';

const trackGoal = (title) => {
  const goalCodes = {
    'React 2025': '5WGDOKV0',
    'Mastering Next.js': 'HV9HDL0O'
  };

  Fathom.trackGoal(goalCodes[title], 0);
};

export default function ProjectCard({ title, description, href }) {
  return (
    <a
      className="mb-4 hover:shadow w-full"
      href={href}
      onClick={() => trackGoal(title)}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 dark:hover:border-gray-600 transition ease duration-300 rounded p-6">
        <div>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
