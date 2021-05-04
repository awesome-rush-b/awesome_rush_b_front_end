import React, {Component} from 'react';
import { Search,
         Input, 
         Header, 
         Segment, 
         Dropdown,
         Button,
         Icon
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import { Input, Space } from 'antd';

// const { Search } = Input;

// const onSearch = value => console.log(value);


class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // searchContent: this.props.searchContent
        };
    }

    
    handleChange = (e) => {
        this.props.handleSearchContent(e.target.value)
    }

    handleClickSearch = () => {
        this.props.onClickSearch()
        
    }

    
    render() {
        return(
            <div style={{textAlign:"center",margin:"150px 100px"}}>
                <Input
                    icon={
                        <Icon 
                            name='search' 
                            inverted 
                            circular 
                            link
                            onClick = {this.handleClickSearch}
                            />
                    }
                    placeholder='Start Searching'
                    fluid
                    onChange = {this.handleChange}
                />

            </div>         
        );
    }
}

export default SearchBox;