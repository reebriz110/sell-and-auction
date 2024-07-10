import Head from 'next/head'
import Footer from './Footer'
export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Head>

                {children}
            <Footer/>
        </div>
    )
}
Layout.defaultProps = {
    title: "LARAIB -sell and auction",
    description: 'NextJS template for domain auction',
    keywords: 'domain, auction, hosting, nextjs, react, tailwind'
}