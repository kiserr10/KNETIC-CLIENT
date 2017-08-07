// import React from 'react';
// import './RockerSwitch.css';
//
// class RockerSwitch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isToggleOn: false,
//       value: this.props.patchState
//     }
//     this.handleToggle = this.handleToggle.bind(this);
//     console.log(this.props.patchState);
//   }
//
//   handleToggle() {
// 		this.setState(prevState => ({
// 			isToggleOn: !prevState.isToggleOn
// 		}));
//     if (this.state.isToggleOn) {
//       this.setState({value: 1});
//     } else {
//       this.setState({value: 0});
//     }
//     console.log(this.state.value);
//     this.props.sendDispatch(this.props.type, this.props.property, this.state.value);
//   }
//
//   render() {
//     return (
//       <div className="bypass">
//         <h6>BYPASS</h6>
//         <input type="checkbox" className="switch-input" name="switch" />
//         <div htmlFor="switch" className="switch" onClick={this.handleToggle}></div>
//       </div>
//     );
//   }
// }
//
// export default RockerSwitch;

import React from 'react';
import './RockerSwitch.css';
import SwitchButton from 'react-switch-button';
import 'react-switch-button/dist/react-switch-button.css';

class RockerSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      value: this.props.patchState
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
    if (this.state.isToggleOn) {
      this.setState({value: 0});
    } else {
      this.setState({value: 1});
    }
    console.log(this.state.value);
    this.props.sendDispatch(this.props.type, this.props.property, this.state.value);
  }

  render() {
    const initialCondition = this.props.patchState === 1 ? false : true

    return (
      <div className="bypass">
        <h6 className="label-bypass">BYPASS</h6>
        <SwitchButton
          name={this.props.name}
          theme="rsbc-switch-button-flat-square"
          defaultChecked={initialCondition}
          onChange={this.handleToggle}/>
      </div>
    );
  }
}

export default RockerSwitch;
