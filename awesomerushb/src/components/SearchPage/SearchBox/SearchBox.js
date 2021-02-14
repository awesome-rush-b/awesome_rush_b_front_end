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
            </div>

            
        );
    }
}

export default SearchBox;