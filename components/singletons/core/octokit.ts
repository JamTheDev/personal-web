import { Octokit } from '@octokit/core';

let octokit: Octokit;

global.octokit = new Octokit();

if (process.env.NODE_ENV! === 'production') {
    octokit = new Octokit({ auth: process.env.REPO_KEY });
} else {
    if (!global.octokit) {
        global.octokit = new Octokit({ auth: process.env.REPO_KEY });
    }

    octokit = global.octokit!
}

export default octokit;