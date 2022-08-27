import { Octokit } from '@octokit/core';
const octokit = new Octokit({ auth: process.env.REPO_KEY! });

export default octokit;