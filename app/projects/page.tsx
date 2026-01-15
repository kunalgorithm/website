import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects built by Kunal Shah - games, AI tools, and startups.'
};

const projects = [
  {
    name: 'Promise Match',
    url: 'https://promisematch.com',
    description:
      'A voice AI matchmaker for dating. It conducts high-signal phone call interviews and matches people based on outlier likelihoods of forming meaningful connections.'
  },
  {
    name: 'AI Slop',
    url: 'https://aislop.com',
    description:
      'A party game using AI to roast the room, create illusions of artwork, and other multiplayer games to enjoy with friends and family.'
  },
  {
    name: 'Sayla',
    url: 'https://sayla.com/',
    description:
      'A voice interface to your computer. Control your desktop, launch apps, and get things done using natural speech.'
  },
  {
    name: 'Cocomo',
    url: 'https://cocomo.ai',
    description:
      'A marketing optimization platform using deep learning to manage ad budgets across platforms. Managing $100M+ for clients like USAA, Bain, Yum Brands, and Coca Cola.'
  },
  {
    name: 'Brotherload',
    url: 'https://brotherload.rip/',
    description:
      'A faithful browser-based rebuild of the classic Miniclip XGen Studios game "Motherload". Dig deep, collect minerals, and upgrade your mining pod.'
  },
  {
    name: 'Down Bad',
    url: 'https://downbad.rip',
    description:
      'A Brotato-like retro roguelike survivor shooter game. Fight waves of enemies, collect upgrades, and see how long you can survive—all in the browser.'
  },
  {
    name: 'Audio Meme',
    url: 'https://audiomeme.lovable.app',
    description:
      'Create little audio memes from text prompts. Type a phrase, generate a sound, and share your audio creations.'
  },
  {
    name: 'Dazzle',
    url: 'https://dazzle.ad',
    description:
      'Generate polished ads for any product instantly. Input your product details and get professional ads with logos and taglines.'
  },
  {
    name: 'Ascend',
    url: 'https://rideascend.com',
    description:
      'Electric motorcycles with breakthrough driving range. Experience the future of two-wheeled transportation.'
  },
  {
    name: 'Compose AI',
    url: 'https://compose.ai',
    description:
      'One of the first AI-powered writing tools in the browser. YC W21 batch, scaled to 500k monthly active users.'
  }
];

export default function ProjectsPage() {
  return (
    <div className="mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
        Projects
      </h1>

      <div className="space-y-8">
        {projects.map((project) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                {project.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {project.description}
              </p>
              <span className="text-sm text-indigo-600 dark:text-indigo-400">
                {project.url.replace('https://', '').replace(/\/$/, '')} →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
