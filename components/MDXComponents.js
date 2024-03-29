import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';

import ProsCard from 'components/ProsCard';
import ConsCard from 'components/ConsCard';

import Analytics from 'components/metrics/Analytics';
import Step from 'components/Step';
import ErrorMessage from 'components/ErrorMessage';
import SuccessMessage from 'components/SuccessMessage';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  Analytics,
  ConsCard,
  ProsCard,
  Step,
  Tweet,
  ErrorMessage,
  SuccessMessage
};

export default MDXComponents;
