// Change Message OnClick: https://www.golangprograms.com/react-js-update-div-content-on-click.html
// Forms: https://reactjs.org/docs/forms.html

import React, { Component } from "react";
import "../style.css";

class Emaildata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        var x = this.state.value;
        var msg;
        if(x.indexOf('@') > -1 && (x.endsWith(".com") || x.endsWith(".edu"))) {
            msg = "Email successfully recorded.";
        } else {
            msg = "Invalid email address.";
        }
        this.setState({ message: msg});
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <body>
                    <h2>Email:</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="email" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                    <p style={{color:'red'}}>{this.state.message}</p>
                </body>
            </div>
        );
    }
}

export default Emaildata