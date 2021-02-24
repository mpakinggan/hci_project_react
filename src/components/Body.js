// Code based on code from Discussion Section Week 7

import React, { Component } from "react";
import Textdata from "./tabs/text.js"
import Imagedata from "./tabs/image.js"
import Videodata from "./tabs/video.js"
import Tabledata from "./tabs/table.js"
import Emaildata from "./tabs/email.js"

class Body extends Component {
    render() {
        var displayContent = () => {
            var activeTab = this.props.activeTab;
            if(activeTab===1) {
                return <Textdata/>
            } else if(activeTab===2) {
                return <Imagedata/>
            } else if(activeTab===3) {
                return <Videodata/>
            } else if(activeTab===4) {
                return <Tabledata/>
            } else {
                return <Emaildata/>
            }
        }

        return(displayContent())
    }
}

export default Body;