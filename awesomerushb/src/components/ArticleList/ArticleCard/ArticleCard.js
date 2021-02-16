import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import 'antd/dist/antd.css';
import { List, Avatar, Space, Row, Col } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'; 

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
});

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'https://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }



class ArticleCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            content: props.content,
            createDate: props.createDate,
            modifyDate: props.modifyDate,
            hashTag: props.hashTag
        };
    }
    
  dateFmt = (date) => {

  };

    render(){
        return (
            // <Card>
            //   <CardActionArea>
            //     {/* <CardMedia
            //       component="img"
            //       alt="Contemplative Reptile"
            //       height="80" 
            //       image="/static/images/cards/contemplative-reptile.jpg"
            //       title="Contemplative Reptile"
            //     /> */}
            //     <CardContent>
            //         <Typography gutterBottom variant="h5" component="h2">
            //             {this.state.title}
            //         </Typography>
            //         <Typography variant="body2" color="textSecondary" component="p">
            //             {this.state.content}
            //         </Typography>
            //         <Typography variant="body2" color="textSecondary" component="p">
            //             {this.state.createDate}
            //         </Typography>
            //         <Typography variant="body2" color="textSecondary" component="p">
            //             {this.state.modifyDate}
            //         </Typography>
            //     </CardContent>
            //   </CardActionArea>
            //   <CardActions>
            //     <Button size="small" color="primary">
            //       Share
            //     </Button>
            //     <Button size="small" color="primary">
            //       Learn More
            //     </Button>
            //   </CardActions>
            // </Card>
            <Row>
            <Col span={12} offset={6}>
                <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                    console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={this.props.ArticleData}
                footer={
                    <div>
                    <b>ant design</b> footer part
                    </div>
                }
                renderItem={item => (
                    <List.Item
                    key={item.title}
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                    >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={"Create Date:" + this.dateFmt(item.createDat) +"Modify Date: " + this.dateFmt(item.modifyDate)}
                        
                    />
                    {item.content}
                    </List.Item>
                )}
                />
            </Col>
          </Row> 

          );
    }
}

export default ArticleCard;