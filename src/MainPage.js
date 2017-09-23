import React, {Component} from 'react';
import Loader from 'react-loader';
import TopNavigation from "./Topnavi/TopNavigation";
import ContentLoader from "./ContentLoader";

class BasicExample extends Component {
    constructor(props, context) {
        super(props, context);
        this.updateTopNavigationClick = this.updateTopNavigationClick.bind(this);
        this.state = {
            isLoaded: true,
            selectedPageId: 0
        };
    }

    toggleLoader() {
        this.setState({isLoaded: !this.state.isLoaded});
    }

    renderControl(isLoaded) {
        let buttonText = isLoaded ? 'Show Loading Spinner' : 'Hide Loading Spinner';
        return <button onClick={() => this.toggleLoader()}>{buttonText}</button>;
    }

    updateTopNavigationClick(selectedId) {

        this.setState({
            selectedPageId: selectedId
        })
    }

    render() {
        const {isLoaded} = this.state;

        return (
            <div className="loader-wrapper">
                <TopNavigation updateTopNavigationClick={this.updateTopNavigationClick}/>

                {/* {this.renderControl(isLoaded)}
                 <Loader loaded={isLoaded}>
                 <div className="loaded-contents">Loading finished!</div>
                 </Loader>*/}

                <div id="contents">

                    <ContentLoader selectedPageId={this.state.selectedPageId}/>
                </div>
            </div>

        );
    }
}

export default BasicExample;
