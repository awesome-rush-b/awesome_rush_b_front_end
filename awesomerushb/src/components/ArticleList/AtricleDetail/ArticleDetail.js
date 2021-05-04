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
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';


class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBlogs: props.allBlogs,
      blogID: props.curBlogId,
      selectedBolg: null,
      isloading: true
    };
  }

  getBlogDetail() {
    this.state.allBlogs.forEach((blog) => {
      if (blog.blogId == this.state.blogID) {
        this.setState({ selectedBolg: blog, isloading: false })
      }
    })

  }
  componentDidMount = () => {
    console.log('id', this.props.curBlogId);
    console.log(this.state.allBlogs)
    this.getBlogDetail();

  }


  render() {
    const { selectedBolg } = this.state;
    return (
      <div>
        {
          this.state.isloading ? (
            <LinearProgress />
          ) : (
            <div>
              <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>{selectedBolg.title}</Header>

                {
                  selectedBolg.hashTag.map((tag) => (
                    <Chip
                      label={"# " + tag.name}
                      variant="outlined"
                      style={{ margin: '10px 5px' }}
                    />
                  ))
                }
                <p>
                  {selectedBolg.content}
                </p>
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
          )

        }

      </div>
    );
  }
}

export default ArticleDetail;

