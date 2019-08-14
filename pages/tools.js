import Router from 'next/router';

const Tools = () => {
  return null;
};

const targetRoute = '/tech-stack';
// Redirect to /tech-stack
Tools.getInitialProps = async context => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: targetRoute });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(targetRoute);
  }
  return {};
};
export default Tools;
