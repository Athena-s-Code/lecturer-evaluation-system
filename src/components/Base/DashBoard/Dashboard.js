import React from 'react';
import UserCard from '../../Card/Card';
import { 
  UserOutlined,  
  FileOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Col, Row,} from 'antd';
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Admin', '3'),
    getItem('Lecture', '4'),
    getItem('Non Academic', '5'),
  ]),
  getItem('Report', 'sub2', <FileOutlined />, [getItem('Report 1', '6'), getItem('Report 2', '8')]),
];

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#E9E9E9',
        }}
      >
       <h1>Admin DashBoard</h1>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Users</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
              <Row gutter={16}>
    <Col span={8}>
    <UserCard/>
    </Col>
    <Col span={8}>
    <UserCard/>
    </Col>
    <Col span={8}>
    <UserCard/>
    </Col>
  </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Dashboard;