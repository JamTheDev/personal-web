import { Article } from "@/components/types/cms-types/article.types";
import { faUser, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { FunctionComponent, HTMLAttributes } from "react";

type ArticleCardAttributes = {
    data?: Article
} & HTMLAttributes<HTMLDivElement>

const ArticleCard: FunctionComponent<ArticleCardAttributes> = ({ data }) => {
    const router = useRouter();
    return (
        <div className="relative col-span-1 h-80 rounded-md group cursor-pointer overflow-hidden"
            onClick={() => router.push(`/articles/${data?.id}`)}
        >
            
            <div className="absolute bottom-0 flex flex-col z-10 p-4">
                <div className="relative flex flex-col top-12 group-hover:top-0 transition-all">
                    <span className="font-bold text-xl group-hover:text-white">{(data as Article).attributes.articleTitle}</span>
                    <span className="relative text-sm group-hover:text-white h-12 text-ellipsis overflow-hidden">{(data as Article).attributes.articleSub}</span>
                </div>

                <div className="relative flex flex-col gap-2 my-3 top-20 cursor-default select-none group-hover:top-0 group-hover:opacity-100 transition-all">
                    <div className="flex flex-row items-center gap-5">
                        <FontAwesomeIcon className="group-hover:text-white" icon={faUser} />
                        <span className="text-xs group-hover:text-white">{(data as Article).attributes.author}</span>
                    </div>

                    <div className="flex flex-row items-center gap-5">
                        <FontAwesomeIcon className="group-hover:text-white" icon={faClock} />
                        <span className="text-xs group-hover:text-white">{new Date((data as Article).attributes.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>

            <div className="w-full h-full absolute bg-gradient-to-b z-0 from-transparent to-black opacity-40 group-hover:opacity-80 transition-opacity" />

            <img className="w-full h-full object-cover" src={`https://jam-portfolio-cms-production.up.railway.app${(data as any).attributes.articleCoverImage.data[0].attributes.formats.thumbnail.url}`} />

        </div>
    );
};

export default ArticleCard;