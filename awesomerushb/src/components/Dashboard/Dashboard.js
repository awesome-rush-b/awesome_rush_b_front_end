import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart } from 'victory';
import {
    Checkbox,
    Grid,
    Icon,
    Image,
    Segment,
} from 'semantic-ui-react'
import { Header } from '../../components'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import './Dashboard.css'
import 'react-pro-sidebar/dist/css/styles.css';
import Editor from './Editor';
import 'semantic-ui-css/semantic.min.css'

const getAllTagsUrl = 'http://dev.awesomerushb.com/api/tags';
const jwtToken = localStorage.token;


const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            alltags: []
        };
    }

    componentDidMount() {
        this.getAllTags(jwtToken, getAllTagsUrl)
    }

    handleItemClick = (e, value) => {
        this.setState({ type: value }, () => {
            console.log(this.state.type);

        });
    }

    getAllTags = (token, getAllTagsUrl) => {
        if (token) {
            return fetch(getAllTagsUrl, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    this.setState({ allTags: data.resultData })
                    return data.resultData;
                })
        }
    }


    SearchBlogByTitle = (token, SearchBlogsUrl) => {
        if (token) {
            return fetch(SearchBlogsUrl, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    this.setState({ blogSearchResult: data.resultData })
                })
        }
    }

    render() {
        const { type } = this.state;
        return (

            <div style={{ display: 'flex', height: '100vh', position: 'relative' }}>
                <div>
                    <ProSidebar
                        width='230px'
                    >
                        <SidebarHeader>
                            <div style={{
                                padding: '24px',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                fontSize: 18,
                                letterSpacing: '1px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}>
                                Awesome Blog
                            </div>
                        </SidebarHeader>
                        <Menu>
                            <MenuItem active={type === 1} className='menuItem' prefix={<Icon name='chart bar' />} onClick={(e) => this.handleItemClick(e, 1)}>Overview</MenuItem>
                            <MenuItem active={type === 2} className='menuItem' prefix={<Icon name='edit' />} onClick={(e) => this.handleItemClick(e, 2)}>New Post</MenuItem>
                            <MenuItem active={type === 3} className='menuItem' prefix={<Icon name='chart bar' />} onClick={(e) => this.handleItemClick(e, 3)}>Dashboard</MenuItem>
                        </Menu>
                    </ProSidebar>
                </div>
                <div className='main' >
                    <Header />

                    {/* Overview Page */}

                    {this.state.type === 1 && (
                        <div>
                            11111111111111111
                        </div>
                    )}
                    {this.state.type === 2 && (
                        <div>
                            <Editor
                                getAllTags={this.getAllTags}
                            />
                        </div>
                    )}
                    {this.state.type === 3 && (
                        <div>
                            333333333333333333
                        </div>
                    )}
                </div>
            </div>



        );


    }
}

export default Dashboard;