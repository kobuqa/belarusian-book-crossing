import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from "next/image";
import { Layout } from 'antd';

import { Menu, MenuProps, Button } from 'antd';
import React, { useState } from 'react';
import {
    HomeOutlined,
    AimOutlined,
    TeamOutlined,
    SmileOutlined
} from '@ant-design/icons';
import { BreadCrumbs } from '../breadcrumbs';
type LayoutProps = {
    children: React.ReactNode,
};
const { Header, Footer, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Галоўная', '/', <HomeOutlined />),
    getItem('Мапа', '/map', <AimOutlined />),
    getItem('Пра нас', '/about', <TeamOutlined />)
];



export default function AppLayout({ children }: LayoutProps) {
    const { data } = useSession()
    const router = useRouter()
    const [collapsed, setCollapsed] = useState(false);
    const handleNavigate = (e: { key: string }) => router.push(e.key)

    return (

        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="h-[60px] p-2">
                    <div className="flex items-center justify-center h-full relative">
                        {collapsed ?
                            <SmileOutlined style={{ fontSize: '24px', color: '#fff' }} />
                            : <Image src="/logo.png" layout="fill" className='invert' />
                        }
                    </div>
                </div>
                <Menu theme="dark" selectedKeys={[router.pathname]} mode="inline" items={items} onClick={handleNavigate} />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px', flexGrow: 1 }}>
                    <BreadCrumbs />
                    <div style={{ padding: 24, minHeight: 360, height: '100%' }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>  Hackaton 2022   <Button className="ml-2" href='https://www.patreon.com/belarusian_book_crossing'>Падтрымаць праект</Button></Footer>
            </Layout>
        </Layout>
    )
}