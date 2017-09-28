/**
 * Created by sumitthakur on 9/23/17.
 */
import React, {Component} from 'react';
import AboutUs from "../Pages/AboutUs";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import Preferences from "../Pages/Preferences";


class ContentLoader extends Component {
    constructor(props, context) {
        super(props, context);
        this.getSelectedPageContent = this.getSelectedPageContent.bind(this);
        var id = this.props.selectedPageId;
        this.state = ({
            selectedPageId: id
        });
    }

    getSelectedPageContent() {
        var pageId = this.state.selectedPageId;

        var divContent = '';

        switch (pageId) {
            case 0:
                divContent = <div>
                    <AboutUs/>
                </div>
                return divContent;
            case 1:
                divContent = <div>
                    <Login/>
                </div>
                return divContent;
            case 2:
                divContent = <div>
                    <Services/>
                </div>
                return divContent;
            case 3:
                divContent = <div>
                    <Preferences/>
                </div>
                return divContent;
            default:
                return divContent;
        }
    }

    render() {

        // var contnet = this.getSelectedPageContent();
        var pageId = this.props.selectedPageId;

        var divContent = '';

        switch (pageId) {
            case 0:
                divContent = <div>
                    <AboutUs/>
                </div>
                break
            case 1:
                divContent = <div>
                    <Login/>
                </div>
                break;
            case 2:
                divContent = <div>
                    <Services/>
                </div>
                break;
            case 3:
                divContent = <div>
                    <Preferences/>
                </div>
                break;
            default:
                break
        }

        return (
            <div >
                {divContent}
            </div>);
    }
}

export default ContentLoader;