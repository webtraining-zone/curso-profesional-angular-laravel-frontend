// Constants for CarbonLDP Schemas
export const BASE_CARBON_LDP_SCHEMA: any = {
  wt: 'http://www.webtraining.zone/ns#',
  sch: 'https://schema.org/'
};

export const PROJECT_SCHEMA = {
  id: {
    '@type': 'string'
  },
  comments: {
    '@id': 'wt:comment',
    '@container': '@set',
    '@type': '@id'
  }
};

export const USER_SCHEMA = {
  email: {
    '@id': 'sch:email',
    '@type': 'string'
  },
  name: {
    '@id': 'sch:name',
    '@type': 'string'
  },
  comments: {
    '@id': 'wt:comment',
    '@container': '@set',
    '@type': '@id'
  }
};

export const COMMENTS_SCHEMA = {
  author: {
    '@id': 'wt:author',
    '@type': '@id'
  },
  project: {
    '@id': 'wt:project',
    '@type': '@id'
  },
  content: {
    '@type': 'string'
  }
};


export const COMMENTS_CONTAINER = 'comments/';
export const USERS_CONTAINER = 'users/';
export const PROJECTS_CONTAINER = 'projects/';
