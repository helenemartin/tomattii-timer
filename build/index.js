class PomodoroTimer extends React.Component {

  render() {

    return React.createElement(
      'div',
      null,
      'This timer runs for ',
      this.props.workingTime,
      ' minutes, followed by rest of ',
      this.props.restingTime,
      ' minutes.',
      React.createElement('br', null),
      'For a total time of of 30 minutes.',
      React.createElement('br', null),
      'There are 88 seconds elapsed.'
    );
  }
}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));