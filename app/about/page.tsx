import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Kunal Shah - founder, engineer, and builder.'
};

export default function AboutPage() {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-6 mb-8">
        <Image
          src="/prof_pic.jpeg"
          alt="Kunal Shah"
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
          About Me
        </h1>
      </div>

      <div className="prose prose-lg dark:prose-invert">
        <p className="mb-8">
          I like building creative and useful things for the world.
        </p>
      </div>

      <div className="prose prose-lg mb-12 leading-6 dark:prose-invert">
        <p className="mb-4">Here's some stuff I've done:</p>

        <ul className="mb-4 ml-6 list-disc">
          <li>
            Co-founder of <a href="http://Cocomo.ai" target="_blank" rel="noopener noreferrer">Cocomo.ai</a>, a marketing optimization platform. We use deep learning algorithms to manage marketing budgets across ad platforms. We manage over $100M across clients like USAA, Bain, Yum Brands, Coca Cola, and more.
          </li>
          <li>
            Built electric motorcycles with a 200-mile driving range by pioneering a novel battery pack configuration and cooling method. This allowed us to utilize high-energy density cylindrical lithium-ion cells in a 12.5kWh pack, delivering 20-30% greater range than any competitive motorcycle on the market.
          </li>
          <li>
            Founded <a href="http://compose.ai" target="_blank" rel="noopener noreferrer">compose.ai</a>, one of the first AI-powered writing tools in the browser. Joined YC's w21 batch and scaled to 500k monthly active users.
          </li>
          <li>
            Joined <a href="https://joinodf.com/" target="_blank" rel="noopener noreferrer">On Deck</a> as their first engineering hire and grew into Head of Engineering.
          </li>
          <li>
            Studied CS at Rice, where I started the blockchain club, ran D1 Track, and served as an academic advisor for the computer science department.
          </li>
          <li>
            In high school, I was New York state champion in the mile run and was voted best dressed.
          </li>
        </ul>
      </div>

      <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-indigo-800 dark:text-indigo-400">
        Featured Video
      </h2>

      <div className="aspect-video max-w-xl">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FKunal.shah239%2Fvideos%2F1901088213435427%2F&show_text=false&width=560&t=0"
          width="560"
          height="314"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
