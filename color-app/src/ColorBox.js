import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import "./ColorBox.css";


const styles = {
	ColorBox: {
		height: props => props.showingFullPalette ? '25%' : '50%',
		width: '20%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-3.5px',
		'&:hover button': {
			opacity: 1
		}
	},
	copyText: {
		color: props => chroma(props.background).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.5)' : 'white'
	},
	colorName: {
		color: props => chroma(props.background).luminance() <= 0.085 ? 'white' : 'rgba(0, 0, 0, 0.5)'
	},
	seeMore: {
		color: props => chroma(props.background).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.5)' : 'white',
		background: `rgba(255, 255, 255, 0.3)`,
		position: 'absolute',
		border: 'none',
		right: '0',
		bottom: '0',
		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px',
		textTransform: 'uppercase'
	},
	copyButton: {
		color: props => chroma(props.background).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.5)' : 'white',
		width: '100px',
		height: '30px',
		position: 'absolute',
		display: 'inline-block',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginTop: '-15px',
		textAlign: 'center',
		outline: 'none',
		background: 'rgba(255, 255, 255, 0.3)',
		fontSize: '1rem',
		lineHeight: '30px',
		textTransform: 'uppercase',
		border: 'none',
		textDecoration: 'none',
		cursor: 'pointer',
		opacity: 0
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0px',
		bottom: '0px',
		padding: '10px',
		color: 'black',
		letterPpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px'
	},
	copyOverlay: {
		opacity: '0',
		zIndex: '0',
		width: '100%',
		height: '100%',
		transition: 'transform 0.3s ease-in-out',
		transform: 'scale(0.1)'
	},
	showOverlay: {
		opacity: '1',
		transform: 'scale(50)',
		zIndex: '10',
		position: 'absolute'
	},
	copyMsg: {
		position: 'fixed',
		left: '0',
		right: '0',
		top: '0',
		bottom: '0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '4rem',
		transform: 'scale(0.1)',
		opacity: '0',
		color: 'white',
		"& h1": {
			fontWeight: '400',
			textShadow: '1px 2px black',
			background: 'rgba(255, 255, 255, 0.2)',
			width: '100%',
			textAlign: 'center',
			marginBottom: '0',
			padding: '1rem',
			textTransform: 'uppercase'
		},
		"& p": {
			fontSize: '2rem',
			fontWeight: '100'
		}
	},
	showMsg: {
		opacity: '1',
		transform: 'scale(1)',
		zIndex: '25',
		transition: 'all 0.4s ease-in-out',
		transitionDelay: '0.2s'
	}
}

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}
	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1200);
		});
	}
	render() {
		const { name, background, moreUrl, showingFullPalette, classes } = this.props;
		const { copied } = this.state;
		console.log();
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div className={classes.ColorBox} style={{ background }}>
					<div
						className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
						style={{ background }}
					/>
					<div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
						<h1>copied!</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div>
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
						<button className={classes.copyButton}>Copy</button>
					</div>
					{showingFullPalette && (
						<Link to={moreUrl} onClick={e => e.stopPropagation()}>
							<span className={classes.seeMore}>More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
