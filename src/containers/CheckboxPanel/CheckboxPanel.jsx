import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import './checkboxPanel.css';

class CheckboxPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false
		}
	}

	handleChange = () => {
		this.setState({
			checked: !this.state.checked
		});

		this.props.switchUnit();

		console.log(this.state);
	}

	render() {
		return (
			<div className="checkboxPanel">
				<input 
					type="checkbox"
					id="ch_1"
					defaultChecked = {this.state.checked}
					onChange={this.handleChange}
				/>
				<label htmlFor="ch_1"></label>
			</div>
		)
	}
}

//export default CheckboxPanel;

let mapStateToProps = (state) => {
    return {
    	check: state.checked
    }
};

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxPanel);