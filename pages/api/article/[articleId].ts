import { NextApiHandler } from "next";
import octokit from "@/components/singletons/core/octokit";

const handler: NextApiHandler = async (req, res) => {
    const { articleId } = req.query;

    const article = await octokit.request(
        `GET /repos/JamTheDev/personal-blog-cms/contents/blog-md-files/blog-p${articleId}.md`, {per_page: 5}
    )

    if (article.status != 200) {
        return res.status(400);
    }

    if (!article.data) {
        return res.status(400).json({"message": "Article not found, please make sure the article exists."});
    }

    return res.status(200).json(article.data);
}

export default handler;