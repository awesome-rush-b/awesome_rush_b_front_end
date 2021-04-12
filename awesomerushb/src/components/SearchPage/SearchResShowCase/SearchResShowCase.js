import React, {Component} from 'react';
import { 
    Button, 
    Icon, 
    Image, 
    Item, 
    Label,
    Divider
  } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css'


class SearchResShowCase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    
    render() {
        return(
            <div>
              <Item.Group>
                <Item>
                  <Item.Image src='https://markpersonal.oss-us-east-1.aliyuncs.com/pic/20210319110853.png'/>

                  <Item.Content>
                    <Item.Header as='a'>{this.props.title}</Item.Header>
                    <Item.Meta>
                      <span className='cinema'>{this.props.createDate}</span>
                      <span/>
                      <span className='cinema'>{this.props.modifyDate}</span>
                    </Item.Meta>
                    <Item.Description>
                      <div style={{height:'105px'}}>
                        {this.props.content}
                      </div>
                    </Item.Description>
                    <Item.Extra>
                      <Label icon = 'thumbs up outline' content='25'/>
                      <Label icon='thumbs down outline' content='4' />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
              <div style = {{marginBottom:"50px"}}></div>

          </div>
        );
    }
}

export default SearchResShowCase;