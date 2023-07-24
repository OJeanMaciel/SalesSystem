import { Badge, Space, Typography } from 'antd';
import { BellFilled, MailOutlined, DashboardOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png';

function Header({ user }) {
    return (
        <div className="Header">
            <DashboardOutlined style={{ fontSize: 40}} />
            <Typography.Title>
                <img width={250} src={logo} />
            </Typography.Title>
            <Space>
                <Badge>
                    <Typography.Text strong style={{ marginLeft: 10 }}>
                        {user.login} ({user.role})
                    </Typography.Text>
                </Badge>
                <Badge count={10} dot>
                    <MailOutlined style={{ fontSize: 24}} />
                </Badge>
                <Badge count={20}>
                    <BellFilled style={{ fontSize: 24 }}/>
                </Badge>
            </Space>
        </div>
    ) 
}

export default Header;
