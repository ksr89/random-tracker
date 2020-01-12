import { connect } from 'react-redux';
import GraphComponent from '../components/Graph';
import { thunks } from '../actions';

const mapStateToProps = (state) => {
  return {
    graphData: state.graphData,
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
