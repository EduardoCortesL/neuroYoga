import Head from "next/head";

const Meta = ({title, keywords, description, ogTitle, ogType, ogUrl, ogImage}) => {
    return ( 
       <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
           <meta name="keywords" content={keywords}></meta>
           <meta name="description" content={description}></meta>
           <meta property="og:title" content={ogTitle} />
           <meta property="og:type" content={ogType} />
           <meta property="og:url" content={ogUrl} />
           <meta property="og:image" content={ogImage} />
           <meta charSet="utf-8"></meta>
           <link rel="icon" href="/favicon.ico"></link>
           <title>{title}</title>
       </Head>
     );
}
 Meta.defaultProps = {
     title: "Promac Engineering",
     keywords: "engineering consulting mexico usa civil engineering construction public private partnerships",
     description: "Promac Engineering is your go to place for all of you civil/construction engineering needs.",
     ogTitle: "Promac Engineering"
 }

 export default Meta;