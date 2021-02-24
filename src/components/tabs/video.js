// Event Handlers: https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/

import React, { Component } from "react";
import "../style.css";

class Videodata extends Component {
    constructor() {
        super();
        this.state = {url :""};
        this.videoOn = this.videoOn.bind(this);
    }
    
    videoOn(event) {
        document.getElementById("vidoverlay").style.display = "block";
        var x = event.currentTarget.src.replace("https://i3.ytimg.com/vi/", "");
        x = x.replace("/hqdefault.jpg", "");
        this.setState({ url: x});
    }
    off() {
        document.getElementById("vidoverlay").style.display = "none";
    }

    render() {
        return(
            <div>
                <body>
                    <div class="grid-container">
                        <img id="vid1" src="https://i3.ytimg.com/vi/fhWwBs-W2wk/hqdefault.jpg" data="fhWwBs-W2wk" onClick={this.videoOn} alt=""/>
                        <img id="vid2" src="https://i3.ytimg.com/vi/LHjxz_ytaVQ/hqdefault.jpg" data="LHjxz_ytaVQ" onClick={this.videoOn} alt=""/>
                        <img id="vid3" src="https://i3.ytimg.com/vi/9VQRyVpdkkM/hqdefault.jpg" data="9VQRyVpdkkM" onClick={this.videoOn} alt=""/>
                        <img id="vid4" src="https://i3.ytimg.com/vi/ltyJhg4ezaM/hqdefault.jpg" data="ltyJhg4ezaM" onClick={this.videoOn} alt=""/>
                    </div>
                    <div id="vidoverlay" onClick={this.off}>
                        <iframe id="vid" title="videoenlarged" src={"https://www.youtube.com/embed/"+this.state.url} height="315px" width="560px" frameborder="0" alt=""></iframe>
                    </div>
                </body>
            </div>
        );
    }
}

export default Videodata