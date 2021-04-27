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


class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogId: props.blogId,
      title: props.title,
      content: props.content,
      createDate: props.createDate,
      modifyDate: props.modifyDate,
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
                <span className='cinema'>{this.state.createDate}</span>
                <span />
                <span className='cinema'>{this.state.modifyDate}</span>
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

