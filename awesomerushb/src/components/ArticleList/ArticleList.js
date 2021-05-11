import React from "react";
import { Header } from "../../components/";
import ArticleCard from "./ArticleCard/ArticleCard";
import { Container } from "@material-ui/core";
import Footer from "../Footer/Footer";

const getAllBlogsUrl = "http://dev.awesomerushb.com/api/blogs";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBlogs: [],
      isDetailed: false,
      curBlogId: null,
    };
  }

  getAllBlogs = (getAllBlogsUrl) => {
    return fetch(getAllBlogsUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ allBlogs: data.resultData });
      });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSkipToLogin = () => {
    this.props.history.push("/login");
  };

  handleArticleDetailShow = (blogId) => {
    this.props.history.push('/articleDetail/' + blogId)
  };

  componentDidMount() {
    this.getAllBlogs(getAllBlogsUrl);
  }

  render() {
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <div>
            <Header />
            {this.state.allBlogs.map((blog) => (
              <ArticleCard
                blogId={blog.blogId}
                title={blog.title}
                createDate={blog.createDate}
                modifyDate={blog.modifyDate}
                hashTag={blog.hashTag}
                handleArticleDetailShow={this.handleArticleDetailShow}
              />
            ))}
            <Footer />
          </div>
        </Container>
      </React.Fragment>
    );
  }
  //   return (
  //     <React.Fragment>
  //       <Container maxWidth="lg">
  //         <div>
  //           <Header />

  //           {this.state.isDetailed ? (
  //             <ArticleDetail
  //               curBlogId={this.state.curBlogId}
  //               allBlogs={this.state.allBlogs}
  //             />
  //           ) : (
  //             this.state.allBlogs.map((blog) => (
  //               <ArticleCard
  //                 blogId={blog.blogId}
  //                 title={blog.title}
  //                 createDate={blog.createDate}
  //                 modifyDate={blog.modifyDate}
  //                 hashTag={blog.hashTag}
  //                 handleArticleDetailShow={this.handleArticleDetailShow}
  //               />
  //             ))
  //           )}
  //           <Footer />
  //         </div>
  //       </Container>
  //     </React.Fragment>
  //   );
  // }
}
export default ArticleList;
