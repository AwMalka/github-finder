import PropTypes from 'prop-types';

import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

Repos.protoTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
