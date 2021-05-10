import React from "react";
import { Container, Divider, Item, Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Chip from "@material-ui/core/Chip";

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashTag: props.hashTag,
      blogId: props.blogId,
      title: props.title,
      // content: props.content,
      createDate: props.createDate.slice(0, 10),
      modifyDate: props.modifyDate.slice(0, 10),
      hashTag: props.hashTag,
    };
  }

  componentDidMount = () => {};

  render() {
    return (
      <Container>
        <Item.Group link>
          <Item>
            <Item.Image
              size="small"
              src="https://markpersonal.oss-us-east-1.aliyuncs.com/pic/20210319110853.png"
            />

            <Item.Content verticalAlign='middle'>
              <Item.Header
                as="a"
                onClick={() =>
                  this.props.handleArticleDetailShow(this.state.blogId)
                }
                verticalAlign='middle'
              >
                {this.state.title}
              </Item.Header>
              <Item.Meta>
                <span className="cinema">
                  Last Update: {this.state.modifyDate}
                </span>
              </Item.Meta>
              {/* <Item.Description dangerouslySetInnerHTML={{ __html: this.state.content }}>
              </Item.Description> */}
              <Item.Extra>
                <Label icon="thumbs up outline" content="25" />
                <Label icon="thumbs down outline" content="4" />
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider />
        </Item.Group>
      </Container>
    );
  }
}

export default ArticleCard;
