/**
 * Created by sumitthakur on 9/23/17.
 */
import React, {Component} from 'react';
import AboutUs from "./Pages/AboutUs";
import PageOne from "./Pages/Login";
import PageTwo from "./Pages/Services";


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
                    <PageOne/>
                </div>
                return divContent;
            case 2:
                divContent = <div>
                    <PageTwo/>
                </div>
                return divContent;
            case 3:
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
                    <PageOne/>
                </div>
                break;
            case 2:
                divContent = <div>
                    <PageTwo/>
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