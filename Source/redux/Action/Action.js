import {NEWS_TYPE} from '../Type/type';

export const newsData = data => {
  return {
    type: NEWS_TYPE,
    payload: data,
  };
};
