import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Space, Row, Col } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'; 


const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

class SearchResShowCase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    
    render() {
        return(
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
                dataSource={this.props.blogSearchRes}
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
                        // description={item.description}
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

export default SearchResShowCase;