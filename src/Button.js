import React from "react";
import "./Button.css";

class Button extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			active: false,
			deltaX: 0,
			deltaY: 0
		}
		this.myRef = React.createRef();
	}
	redDot(event){
		
		let {clientX, clientY} = event;
		let {x,y} = this.myRef.current.getBoundingClientRect();
		let deltaX = clientX - x -10;
		let deltaY = clientY - y -10;
		this.setState({
			active: true,
			deltaX: deltaX,
			deltaY: deltaY
		})

	}
	cancelDot(){
		this.setState({
			active: false
		})
	}
	render(){
		return(
			<button className="btn1"
							onClick={this.redDot.bind(this)}	
							ref={this.myRef}
			>
				{this.state.active === true ? <span className="dot" 
					style={{ left: this.state.deltaX, top: this.state.deltaY }}
					onAnimationEnd={this.cancelDot.bind(this)}></span> : ''}
				{this.props.value}
			</button>
		)
	}
}

export default Button;
