import { Octokit } from '@octokit/core';

declare global {
    var octokit: Octokit;
}