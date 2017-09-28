/**
 * Created by sumitthakur on 9/22/17.
 */
import React, {Component} from 'react';


class PageOne extends Component {
    constructor() {
        super();
    }

    submitLogin(event) {
        //$('#username').text('');
        //$('#password').text('');
        alert('Submitted Successfully.');
    }

    render() {
        return (
            <div className="pages-bar">
                <div className="login-contents"><label>Username</label> <input id="username"/></div>
                <div className="login-contents"><label>Password</label> <input id="password"/></div>
                <button className="login-button" onClick={this.submitLogin}>Submit</button>
            </div>);
    }
}

export default PageOne;

