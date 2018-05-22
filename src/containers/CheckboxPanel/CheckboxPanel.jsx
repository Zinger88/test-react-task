import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import './checkboxPanel.css';

class CheckboxPanel extends Component {
	

	handleChange = () => {
		this.props.switchUnit(!this.props.unit.CheckboxPanel.checked);
	}

	render() {
		const { checked } = this.props.unit.CheckboxPanel;
		return (
			<div className="checkboxPanel">
				
				<input 
					type="checkbox"
					id="ch_1"
					defaultChecked = {checked}
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
    	unit: state
    }
};

let mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxPanel);