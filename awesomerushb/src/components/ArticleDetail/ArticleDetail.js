import React from "react";
import { Container, Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import Chip from "@material-ui/core/Chip";
import { convertMdToHtmlString } from "../Utils/convertMdToHtmlString";

const getBlogUrl = "http://dev.awesomerushb.com/api/blog/id/";

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogId: props.match.params.id,
      selectedBolg: null,
      isloading: true,
    };
  }

  componentDidMount = () => {
    this.getBlog(this.state.blogId);
  };

  getBlog = (blogId) => {
    return fetch(getBlogUrl + blogId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.resultData);
        this.setState({ selectedBolg: data.resultData, isloading: false });
      });
  };

  render() {
    const { selectedBolg } = this.state;
    return (
      <div>
        {this.state.isloading ? (
          <LinearProgress />
        ) : (
          <div>
            <Container text style={{ marginTop: "7em" }}>
              <Header as="h1">{selectedBolg.title}</Header>

              {selectedBolg.hashTag.map((tag) => (
                <Chip
                  label={"# " + tag.name}
                  variant="outlined"
                  style={{ margin: "10px 5px" }}
                />
              ))}
              <List.Description>
                <div
                  dangerouslySetInnerHTML={{
                    __html: convertMdToHtmlString(selectedBolg.content),
                  }}
                ></div>
              </List.Description>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default ArticleDetail;
