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
            <div>
                <Segment  basic placeholder>
                    <Header icon>
                        <Icon name='search' />
                        Search for Articles
                    </Header>
                    <Segment.Inline>
                        <Input
                            placeholder='Search...' 
                            onChange = {this.handleChange}
                        />
                        <Button animated color='black'
                            onClick = {this.handleClickSearch}
                        >
                            <Button.Content visible>Search</Button.Content>
                            <Button.Content hidden>
                                <Icon name='search' />
                            </Button.Content>
                        </Button>
                    </Segment.Inline>       
                </Segment>
                    {/* <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onChange = {this.handleChange}
                    onSearch={this.handleClickSearch}
                    /> */}
            </div>
            

            
        );
    }
}

export default SearchBox;