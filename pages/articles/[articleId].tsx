import { useEffect, useState } from "react";

import { marked } from "marked";
import { Article } from "@/components/types/cms-types/article.types";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "@/components/layouts/core/footer";

const Article = () => {

    const [article, setNewArticle] = useState({} as Article);
    const [loading, setLoadingState] = useState(true);
    const [failed, setFailedState] = useState(false);
    const router = useRouter();

    const { articleId } = router.query;
    // polling
    const requestData = async () => {

        let pollIteration = 0;

        const poll = setInterval(async () => {

            if (!loading) {
                clearInterval(poll);
                return;
            }

            if (pollIteration > 3) {
                clearInterval(poll);

                return;
            }

            const response = await fetch(`https://jam-portfolio-cms-production.up.railway.app/api/articles/${articleId}?populate=*`);
            console.log(response);
            if (!response.ok || !response) {
                pollIteration++;
                return;
            }

            const article = (await response.json())["data"] as Article;

            setNewArticle(article);
            setLoadingState(false);
            clearInterval(poll);
        }, 2000);

    };

    useEffect(() => {
        if (!router.isReady) return;
        console.log(articleId)
        requestData();
    }, [router.isReady]);

    const MainComponent = () => {
        
    }

    return (
        <>
            {
                !loading && !failed ?
                    <>
                        <Head>
                            <title>{article.attributes.articleTitle} | {article.attributes.author}</title>
                            <meta
                                name="title"
                                content={article.attributes.articleTitle}
                            />
                            <meta
                                name="description"
                                content={article.attributes.articleSub}
                            />
                            <meta
                                name="image"
                                content={`https://jam-portfolio-cms-production.up.railway.app${(article as any).attributes.articleCoverImage.data[0].attributes.formats.thumbnail.url}`}
                            />
                        </Head>
                        <div className="relative flex flex-col gap-4 lg:px-[20%] px-6 py-12 w-full">
                            <span className="lg:text-4xl text-2xl font-bold">{(article as Article).attributes.articleTitle}</span>
                            <div className="" dangerouslySetInnerHTML={{ __html: marked.parse((article as Article).attributes.articleSub) }}></div>
                        </div>
                        <div className="w-full h-96 bg-red-400">
                            <img className="w-full h-full object-cover" src={`https://jam-portfolio-cms-production.up.railway.app${(article as any).attributes.articleCoverImage.data[0].attributes.formats.thumbnail.url}`} />
                        </div>
                        <div className="lg:p-12 p-2 py-6 lg:mt-5 mt-10">
                            <div className="pt-5 flex flex-col gap-4 lg:px-[20%] px-6" dangerouslySetInnerHTML={{ __html: marked.parse((article as Article).attributes.articleBody) }}></div>
                        </div>
                        <Footer />
                    </> :
                    <div>
                        <Head>
                            <title>Loading...</title>
                            <meta 
                                name="title"
                                content="Jams Blog"
                            />
                        </Head>

                        <span className="flex justify-center font-bold text-3xl p-12    ">
                            Loading... please be patient!
                        </span>

                    </div>
            }
        </>
    );
}


export default Article;

