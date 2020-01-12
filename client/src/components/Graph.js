import React from 'react';
import Chart from "chart.js";

class GraphComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: props.graphData,
    }
    this.chart = '';
    this.graphData = props.graphData;
    this.chartRef = React.createRef();

    this.refreshData = this.refreshData.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.graphData) !== JSON.stringify(nextProps.graphData)) {
      this.chart.data.datasets[0].data = nextProps.graphData;
      this.chart.update();
      this.graphData = nextProps.graphData;
    }
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    this.chart = new Chart(myChartRef, {
      "type": "line",
      "data": {
        "labels": new Array(10),
        "datasets": [
          {
            "data": [],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "lineTension": 0
          }
        ]
      },
      "options": {
        tooltips: {
          enabled: false,
        },
        title: {
          display: false,
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
              },
              ticks: {
                fontColor: "black", // To format the ticks, coming on the axis/lables which we are passing.
                fontSize: 12,
                max: 10,
                min: 1,
                stepSize: 1,
                beginAtZero: true,
              }
            }
          ],
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
              },
              ticks: {
                fontColor: "#FFFFFF",
                fontSize: 1,
              },
            }
          ]
        },
        maintainAspectRatio: false,
        responsiveAnimationDuration: 200,
      }
    });
  }

  refreshData() {
    this.props.refreshGraphData();
  }

  render() {
    return (
      <div className="graph-container">
        <div className="canvas-container">
          <canvas
            width="500"
            height="300"
            ref={this.chartRef}
          />
        </div>
        <button onClick={this.refreshData} className="refresh-btn">Refresh</button>
      </div>
    );
  }
}

export default GraphComponent;
