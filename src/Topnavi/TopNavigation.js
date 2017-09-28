/**
 * Created by sumitthakur on 9/20/17.
 */

import React, {Component} from 'react';

var TOPBARTABS = ['About Us', 'Login', 'Services', 'Preferences']

class TopNavigation extends Component {
    constructor() {
        super();

        this.topNavigationClick = this.topNavigationClick.bind(this);

        this.state = {
            isLoaded: true
        };
    }

    toggleLoader() {
        this.setState({isLoaded: !this.state.isLoaded});
    }

    renderControl(isLoaded) {
        let buttonText = isLoaded ? 'Show Loading Spinner' : 'Hide Loading Spinner';
        return <button onClick={() => this.toggleLoader()}>{buttonText}</button>;
    }

    topNavigationClick(event) {
        console.log(event.target.text);
        console.log(TOPBARTABS.indexOf(event.target.textContent));
        this.props.updateTopNavigationClick(TOPBARTABS.indexOf(event.target.textContent));

    }

    render() {
        var that = this;
        return (
            <div className="top-bar">

                {
                    TOPBARTABS.map(function (element, index) {
                        return (
                            <span className='tabs' name={element} key={"li" + index} onClick={(e) => that.topNavigationClick(e)}>
                                {element}
                            </span>
                        )

                    })
                }
            </div>
        );
    }
}

export default TopNavigation;

