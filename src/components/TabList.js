// Code based on code from Discussion Section Week 7

import React, { Component } from "react";
import Tab from "./Tab";
import './style.css';

class TabList extends Component {

  render() {
    console.log("id is "+this.props.activeTab)

    return (
      this.props.tabs.map((tab)=>
        <Tab out ={tab} activeTab = {this.props.activeTab} ctab = {this.props.ctab}/>
      )
    );
  }
}

export default TabList;
