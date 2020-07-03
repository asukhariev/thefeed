import {get} from './api';
export const POST_TYPES = {
  LINK: 'link',
  VIDEO: 'video',
};

export const postApi = {
  getPostType: (type) => get(`${type}_json.json`),
};
