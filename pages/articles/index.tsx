import CardBody from "@/components/layouts/default/articles/card-body.article";
import ArticleCard from "@/components/layouts/default/articles/card.article";
import { faClock, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import { Article } from "@/components/types/cms-types/article.types";
import Head from "next/head";
import Footer from "@/components/layouts/core/footer";

const ArticleList: NextPage = () => {

    const [articles, setNewData] = useState([] as Article[]);
    const [loading, setLoading] = useState(true);
    const [featuredArticle, setNewFeaturedArticle] = useState({} as Article);

    const router = useRouter();
    // polling
    const requestData = () => {

        let pollIteration = 0;

        const timeout = setInterval(async () => {

            if (pollIteration > 3 || !loading) {
                clearInterval(timeout);
                return;
            }

            const response = await fetch(`https://jam-portfolio-cms-production.up.railway.app/api/articles?populate=*`);
            console.log(response);

            if (!response.ok) {
                pollIteration++;
                return;
            }

            const article = (await response.json())["data"] as Article[];

            const featuredArticle = article.filter(val => val.attributes.isFeatured);

            setNewFeaturedArticle(featuredArticle[0]);
            setNewData(article);
            setLoading(false);
            clearInterval(timeout);
        }, 2000);


    };

    useEffect(() => {
        requestData();
    }, []);

    const LatestArticle: FunctionComponent = () => {
        return (
            <div className="grid grid-cols-5 p-12 h-[500px] group cursor-pointer" onClick={() => router.push(`/articles/${featuredArticle.id}`)}>

                <div className="relative col-span-3 max-h-full object-contain" >
                    <img
                        className="relative object-cover w-full h-96"
                        src={`https://jam-portfolio-cms-production.up.railway.app${(featuredArticle as any).attributes.articleCoverImage.data[0].attributes.formats.thumbnail.url}`} />
                </div>

                <div className="relative flex flex-col col-span-2 pl-12 gap-4">
                    <span className="text-4xl font-bold">{featuredArticle.attributes.articleTitle}</span>
                    <span className="text-md italic">{featuredArticle.attributes.articleSub}</span>

                    <div className="flex flex-row items-center gap-5">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="text-sm">{featuredArticle.attributes.author}</span>
                    </div>

                    <div className="flex flex-row items-center gap-5">
                        <FontAwesomeIcon icon={faClock} />
                        <span className="text-sm">{new Date((featuredArticle as Article).attributes.createdAt).toLocaleDateString()}</span>
                    </div>

                    <div className="flex flex-row items-center gap-3 absolute bottom-0 right-0 p-3 cursor-pointer">
                        <span className="relative font-bold left-10 group-hover:left-0 transition-all">Read More</span>
                        <FontAwesomeIcon className="relative right-10 group-hover:right-0 opacity-0 group-hover:opacity-100 transition-all" icon={faArrowRight} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="p-12">
            <span className="text-3xl font-bold">Featured Article</span>
            {
                !loading ? <>
                    <Head>
                        <title>Articles</title>
                    </Head>
                    <LatestArticle />

                    <CardBody>
                        {
                            articles.map((data: any, index: number) => <ArticleCard data={data} key={data.id} />)
                        }
                    </CardBody>
                </> : <>
                    <Head>
                        <title>Articles</title>
                    </Head>
                    <div className="p-6 "> Loading... </div>
                </>
            }
        </div>
    )
};

export default ArticleList;