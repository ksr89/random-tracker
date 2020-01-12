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
      const { username, graphData } = getState();

      fetch('http://121.241.115.123:4096/tracker?username=' + username)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (graphData.length) {
            const lastData = graphData[graphData.length - 1];
            if (lastData.lastUpdatedAt !== data.lastUpdatedAt) {
              if (graphData.length >= 10) {
                graphData.shift();
              }
              graphData.push(data);
              dispatch(refreshGraphData([...graphData]));
            }
          } else {
            dispatch(refreshGraphData([data]));
          }
        });
    };
  },
};
