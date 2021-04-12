import React from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount = () => {
    console.log('id', this.props.curBlogId);
  }


  render() {
    return (
      <div>

        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>
            A text container is used for the main container, which is useful for single column layouts.
              </p>

          <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        </Container>

        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Container textAlign='center'>
            <Divider inverted section />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
                  </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
                  </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
                  </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
                  </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default ArticleDetail;

