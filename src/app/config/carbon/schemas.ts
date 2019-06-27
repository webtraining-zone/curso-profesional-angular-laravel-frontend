export const PROJECT_SCHEMA = {
  id: {
    '@type': 'string'
  }
};

export const USER_SCHEMA = {
  email: {
    '@type': 'string'
  }
};

export const COMMENTS_SCHEMA = {
  user: {
    '@type': '@id'
  },
  project: {
    '@type': '@id'
  },
  content: {
    '@type': 'string'
  }
};
