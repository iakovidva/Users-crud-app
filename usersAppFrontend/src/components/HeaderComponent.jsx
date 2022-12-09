import React, { Component } from 'react';


class HeaderComponent extends Component {
    state = {} 
    render() { 
        return (
            <div>
                <header style={{"paddingBottom":"2%"}}>
                    <nav className="navbar navbar-dark bg-dark">
                        <h1 className="text-center text-light" style={{"paddingLeft":"2%"}}>My Users App</h1>
                    </nav>
                </header>
            </div>
        );
    }
}
 
export default HeaderComponent;