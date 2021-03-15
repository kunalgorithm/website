import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Graduated College 🤘🏻">
        One of my most cherished accomplishments. I worked my ass off to get
        this degree.
      </Step>
      <Step title="Travelled throughout Asia 🌎">
        Spent 6 months after graduation travelling solo throughout Singapore,
        Thailand, Bali, Vietnam, Malaysia, and Taiwan.
      </Step>
      <Step title="Started at TrustedFor">
        A few months into my travels I started to realize that If I wanted to
        bring my skills to the next level, I needed to work with other people. I
        got introduced to <a href="https://trustedfor.com">TrustedFor</a> and
        got started (remotely, while in Vietnam) as their first engineering
        hire. The job was as challenging as it was rewarding, and I eventually
        took ownership of the client-side code as I grew more comfortable with
        the stack.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Started Rice Blockchain 🎓">
        Worked with a talented group of classmates to organize a set of talks
        and tutorials on decentralized applications, cryptocurrencies, and
        consensus algorithms.
      </Step>
      <Step title="Started Subculture Zero, my first company">
        Subculture Zero was an ecommerce apparel store for techno enthusiasts. I
        started it with a friend while in college, and we made nearly $400 in
        sales our first day in business.
      </Step>
    </ul>
    <Divider />

    {/* <Year>2014</Year>
    <ul>
      <Step title="Graduated High School">
        
      </Step>
      <Step title="Learned How To Program">
        CS 140. Our professor asked a simple question - "Who here has prior
        programming experience?". About 80% of the class raised their hands. I
        knew it was going to be an uphill battle from here.
      </Step>
    </ul>
    <Divider /> */}

    <Year>1996</Year>
    <ul>
      <Step title="Hello, world! 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-indigo-800 dark:text-indigo-400">
        Timeline
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title="Moved to Taiwan 🇹🇼">
          I'm excited to be joining the most recent Hacker Fellowship in Taiwan.
        </Step>
        {/* <Step title="MTN compound ">Ski'd and hacked in Salt Lake City with a great group of people.</Step> */}
        <Step title="Launched Compose.ai">
          Build an AI-powered writing augmentation tool and{' '}
          <a
            href="https://www.producthunt.com/posts/compose-ai"
            className="text-indigo-500"
          >
            launched it
          </a>{' '}
          to great reception
        </Step>
        <Step title="Became a tech lead">
          Great year for a wedding, huh? We had a small ceremony with family and
          it was better than I could have imagined.
        </Step>
        <Step title="Built Mindstreaks">
          Starting at the beginning of 2020, I moved into a tech leadership role
          on an e-commerce development team at Hy-Vee.
        </Step>
        {/* <Step title="Quit my job">
          I taught hundreds of students from all over the world how to build web
          applications. Exceeded my wildest expectations.
        </Step> */}
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Moved to San Francisco">
          Led design system architecture at Hy-Vee, building new components with
          React, Storybook, and styled-components.
        </Step>
        <Step title="Joined On Deck">
          Joined On Deck as the second employee and first engineer. It was the
          greatest and most fulfilling job of my career.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
