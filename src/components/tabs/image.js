// Event Handlers: https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/

import React, { Component } from "react";
import "../style.css";

class Imagedata extends Component {
    constructor() {
        super();
        this.state = {url :""};
        this.imageOn = this.imageOn.bind(this);
    }

    imageOn(event) {
        document.getElementById("imgoverlay").style.display = "block";
        this.setState({ url: event.currentTarget.src});
    }
    off() {
        document.getElementById("imgoverlay").style.display = "none";
    }

    render() {
        return(
            <div>
                <body>
                    <div class="grid-container">
                        <img id="1" src="https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg" onClick={this.imageOn} alt=""/>
                        <img id="2" src="https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_1280.jpg" onClick={this.imageOn} alt=""/>
                        <img id="3" src="https://cdn.pixabay.com/photo/2018/05/17/11/38/sculpture-3408348_1280.jpg" onClick={this.imageOn} alt=""/>
                        <img id="4" src="https://cdn.pixabay.com/photo/2014/12/15/17/19/monastery-569368_1280.jpg" onClick={this.imageOn} alt=""/>
                        <img id="5" src="https://cdn.pixabay.com/photo/2018/01/28/17/48/gallery-3114279_1280.jpg" onClick={this.imageOn} alt=""/>
                        <img id="6" src="https://cdn.pixabay.com/photo/2017/12/28/17/10/motorcycles-3045706_1280.jpg" onClick={this.imageOn} alt=""/>
                        <img id="7" src="https://cdn.pixabay.com/photo/2018/10/07/14/08/church-3730222_1280.jpg" onClick={this.imageOn} alt=""/>
                        <img id="8" src="https://cdn.pixabay.com/photo/2012/03/03/23/13/art-21600_1280.jpg" onClick={this.imageOn} alt=""/>
                    </div>
                    <div id="imgoverlay" onClick={this.off}>
                        <img id="img" src={this.state.url} alt=""/>
                    </div>
                </body>
            </div>
        );
    }
}

export default Imagedata