import React from 'react'
import { Breadcrumb } from 'antd'
import Link from 'next/link';
import { useRouter } from 'next/router';

export const BreadCrumbs = () => {
    const router = useRouter()

    const breadcrumbNameMap: Record<string, string> = {
        '/': 'Галоўная',
        '/map': 'Мапа',
        '/about': 'Пра нас',
    };

    const pathSnippets = router.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link href={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });

    const breadcrumbItems = [
        <Breadcrumb.Item key="/">
            <Link href="/">Галоўная</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    )
}
