// Code based on code from Discussion Section Week 7
// Hover Over Tabs: https://www.edwardbeazer.com/how-to-add-hover-events-to-any-react-component/

import React, { Component } from "react";
import './style.css';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {
    console.log(this.props)
    var linkStyle;
    if(this.state.hover) {
      linkStyle = {color: "white", backgroundColor: "black", textalign: "center", padding: "14px 16px"}
    } else if(this.props.out.id === this.props.activeTab) {
      linkStyle = {color: "#333", backgroundColor: "white", textalign: "center", padding: "14px 16px"}
    } else {
      linkStyle = {display: "block", color: "black",textalign: "center", padding: "14px 16px"}
    }
    return (
      <div style = {linkStyle} onClick = {this.props.ctab.bind(this,this.props.out.id)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}> {this.props.out.title} </div>
    );
  }
}

export default Tab;