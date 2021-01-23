import React, {Component} from 'react';
import './Logo.css';

class Logo extends React.Component {
    
    render() {
        return(
            <div>
                <div className = 'logo'>
                    <div className = 'logo_awe'>
                        Awe
                    </div>
                    <div className = 'logo_rectangle'>
                    </div>
                    <div className = 'logo_slice'>
                    </div>
                    <div className = 'logo_some'>
                        some
                    </div>
                </div>
            </div>
        );
    }
}

export default Logo;