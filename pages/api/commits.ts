import { NextApiHandler } from "next";
import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: process.env.REPO_KEY });

const handler: NextApiHandler = async (req, res) => {
    const fiveRecentCommits = await octokit.request(
        'GET /repos/JamTheDev/personal-web/commits', {per_page: 5}
    )

    if (fiveRecentCommits.status == 200) {
        return res.status(200).json(fiveRecentCommits);
    }

    return res.status(400).json({ message: "bad request" })
}

export default handler;