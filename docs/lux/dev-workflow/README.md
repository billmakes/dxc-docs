# Developer Workflow

- To begin a ticket, update the status in the ticket tracker to say the ticket is In Progress.

- Checkout the branch `dev` and run `git pull` to pull down the latest version. The naming convention for the branches is `CS`-`jira ticket number`

- Work on your ticket, ensuring your branch is kept up to date with rebasing. Create meaningful commit messages and commit often. [The seven rules of a great Git commit message](https://chris.beams.io/posts/git-commit/#seven-rules)

- Run relevant tests for your code to ensure typos and basic errors are caught. This may include a spellcheck, and a language syntax check (linting), and running any tests.

- When you’ve finished working on your ticket, ensure the branch is up to date with `dev`, and push your work to GitHub and create a PR (pull request).

## Pull Requests

- In the PR description, paste in the URL to the appropriate Jira ticket.

- Apply the necessary tags to your PR, like `needs review` for example.

- Designate a team lead or two as a reviewer for your PR. Once your PR is created, in Jira, move your ticket status into `Done with Development`.

The reviewer will finish off the remaining steps:

- Perform a review of the work according to the original ticket description.

- If it does not meet acceptance criteria, or if the code is not satisfactory, or if there are any questions, your reviewer will leave a comment and let you know what needs to change.

If there are any merge conflicts you will be required to resolve them before your PR is accepted. If you need help with this reach out to a team lead for assistance.
