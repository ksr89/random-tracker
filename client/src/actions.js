export const USER_NAME = 'USER_NAME';
export const GRAPH_DATA = 'GRAPH_DATA';

export const addUserName = (data) => {
  return { type: USER_NAME, data };
};

export const refreshGraphData = (data) => {
  return { type: GRAPH_DATA, data };
};

export const thunks = {
  refreshGraphData: () => {
    return (dispatch, getState) => {
      dispatch(refreshGraphData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    };
  },
};
