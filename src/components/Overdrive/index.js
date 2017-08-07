import React, { Component } from 'react';
import Knob from '../Knob';
import RockerSwitch from '../RockerSwitch';
import './Overdrive.css';

class Overdrive extends Component {
	render() {
		const efxProp = this.props.patch.effectBus;
		const findOverdrive = efx => efx.type === "overdrive";
		const overdrive = efxProp.find(findOverdrive);
		return(
			<div>
				<div className="bypass-container">
					<h4>OVERDRIVE</h4>
					<RockerSwitch
						patchState={overdrive.bypass}
						sendDispatch={this.props.sendDispatch}
						type="overdrive"
						property="bypass"
						/>
				</div>

				<div className="overdrive-grid">
					<div className="controller">
						<Knob
							patchState={overdrive.drive}
							sendDispatch={this.props.sendDispatch}
							type="overdrive"
							property="drive"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="overdrive-control">DRIVE</label>
					</div>

					<div className="controller">
						<Knob
							patchState={overdrive.outputGain}
							sendDispatch={this.props.sendDispatch}
							type="overdrive"
							property="output_gain"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="overdrive-control">GAIN</label>
					</div>

					<div className="controller">
						<Knob
							patchState={overdrive.curveAmount}
							sendDispatch={this.props.sendDispatch}
							type="overdrive"
							property="curve_amount"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="overdrive-control">CURVE AMOUNT</label>
					</div>

					<div className="controller">
						<Knob
							patchState={overdrive.algorithmIndex}
							sendDispatch={this.props.sendDispatch}
							type="overdrive"
							property="algorithm_index"
							min={0}
							max={5}
							step={1}
							/>
						<label htmlFor="overdrive-control">ALGORITHM INDEX</label>
					</div>

					{/*<div className="controller">
						<Knob
							patchState={overdrive.bypass}
							sendDispatch={this.props.sendDispatch}
							type="overdrive"
							property="bypass"
							min={0}
							max={1}
							step={1}
							/>
						<label htmlFor="overdrive-control">BYPASS</label>
					</div>*/}

				</div>
				<hr/>
			</div>
		);
	}
}

export default Overdrive;
