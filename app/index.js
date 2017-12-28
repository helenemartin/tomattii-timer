class PomodoroTimer extends React.Component {

      constructor(){
          super();
          this.state = {timeElapsed: 0
        };
      }

      totalTime(timeOne, timeTwo) {
          return timeOne + timeTwo;

      }

      componentDidMount() {
        this.interval = setInterval(this.elapseTime.bind(this),1000)
        this.setState({start: new Date()});

      }

      elapseTime() {
        // how much time has elapsed?
        // var timeElapsed = CURRENT TIME -START TIME
        var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);
        this.setState({timeElapsed: timeElapsed});
        // if timeElapsed = 25 minutes -> then alert
        if(this.state.timeElapsed >= this.props.workingTime * 60) {
          clearInterval(this.interval);
          alert("Time for a break!");
        }
      }

      render() {

        return(
          <div>This timer runs for {this.props.workingTime} minutes, 
          followed by rest of {this.props.restingTime} minutes.
          <br />For a total time of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
          <br />There are {this.state.timeElapsed} seconds elapsed.
          </div>
        
        )

     }
 }

ReactDOM.render (
  <PomodoroTimer workingTime={25} restingTime={5}/>,
  document.getElementById('app')
 

);