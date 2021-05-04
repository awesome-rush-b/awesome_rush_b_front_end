import React from 'react';
import {
  Button,
  Icon,
  Image,
  Item,
  Label,
  Divider
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Chip from '@material-ui/core/Chip';


class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashTag: props.hashTag,
      blogId: props.blogId,
      title: props.title,
      content: props.content,
      createDate: props.createDate.slice(0, 10),
      modifyDate: props.modifyDate.slice(0, 10),
      hashTag: props.hashTag,

    };
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <div style={{ alignItems: 'center', margin: "90px" }}>
        <Item.Group>
          <Item>
            <Item.Image src='https://markpersonal.oss-us-east-1.aliyuncs.com/pic/20210319110853.png' />

            <Item.Content>
              <Item.Header as='a' onClick={() => this.props.handleArticleDetailShow(this.state.blogId)}>{this.state.title}</Item.Header>
              <Item.Meta>
                {
                  this.state.hashTag.map((tag) => (
                    <Chip
                      label={"# " + tag.name}
                      variant="outlined"
                    />
                  ))
                }
                <div style={{ display: 'flex', margin: '10px 0px' }}>
                  <div ><span className='cinema' ><span style={{ fontWeight: 'bold' }}>Create Date: </span>{this.state.createDate}</span></div>

                  <div ><span className='cinema' ><span style={{ fontWeight: 'bold' }}>Modify Date:  </span>{this.state.modifyDate}</span> </div>
                </div>
              </Item.Meta>
              <Item.Description>
                <div style={{ height: '105px' }}>
                  {this.state.content}
                </div>
              </Item.Description>
              <Item.Extra>
                <Label icon='thumbs up outline' content='25' />
                <Label icon='thumbs down outline' content='4' />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>

      </div>
    );
  }
}

export default ArticleCard;

