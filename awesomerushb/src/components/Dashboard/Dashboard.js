import React, {Component} from 'react';
import { Header } from '../../components' 

class Dashboard extends React.Component {
    
    render() {
        return(
            <div>
                <Header />
                <h1>This is Dashboard Page</h1>
            </div>
        );
    }
}

export default Dashboard;