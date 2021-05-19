import { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <div>
        <h1>About This App</h1>
        <p>App to search Github users</p>
        <p>Version: 1.0.0</p>
        <p>
          Github repo:{' '}
          <a href='https://github.com/AwMalka/github-finder'>github-finder</a>
        </p>
        <p>Author: Avi Malka</p>
      </div>
    </Fragment>
  );
};

export default About;
