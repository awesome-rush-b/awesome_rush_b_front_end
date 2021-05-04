import { Box } from '@material-ui/core';
import React from 'react';
import './Logo.css';

class Logo extends React.Component {
    
    render() {
        return(
            <Box my = {20}>
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
            </Box>
        );
    }
}

export default Logo;