import React from 'react';
import Page from './api/Page';

function HomePage({ pageData }: any) {
    return (
        <>
            <div>Welcome to Next.js!</div>
            <p>{pageData?.[0].title.rendered}</p>
        </>
    )
}

export function getStaticProps() {
    return Page('home');
}

export default HomePage;