import React, { Component } from 'react';

class FooterComponent extends Component {
    state = {  } 
    render() { 
        const footerstyle = {position: "fixed", padding: "10px 10px 0px 10px", bottom: 0, width: "100%", height: "15px"};
        return (
            <div>
                <footer className='footer'>
                    <div className="bg-dark" style={footerstyle}>

                    </div>
                    {/* <span className="text-muted"> All rights Reserved </span> */}
                </footer>
            </div>
        );
    }
}
 
export default FooterComponent;