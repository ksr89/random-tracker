export const convertData = (data) => {
  const graphData = [];
  for (let index = 0; index < data.length; index++) {
    graphData.push(data[index].value);
  }
  return graphData;
};
