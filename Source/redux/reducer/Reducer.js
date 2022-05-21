import {NEWS_TYPE} from '../Type/type';

const intialState = {};

export const DataReducer = (state = intialState, action) => {
  switch (action.type) {
    case NEWS_TYPE: {
      return {
        ...state,
      };
    }
  }
};
