import { connect } from 'react-redux';
import GraphComponent from '../components/Graph';
import { thunks } from '../actions';
import { convertData } from '../helpers/graph';

const mapStateToProps = (state) => {
  const graphData = convertData(state.graphData);

  return {
    graphData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refreshGraphData: () => {
      dispatch(thunks.refreshGraphData());
    }
  }
};

const GraphContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphComponent);

export default GraphContainer;
