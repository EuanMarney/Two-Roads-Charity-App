# SH29 Main

### Installing and running React expo
        to install you neeed to make sure that You have node JS installed 
        this can be done on mac with brew install node
        this can be done on windows by going to https://nodejs.org/en/download

#### Set up
        Once node JS is installed you can check by running "node --version" in terminal / Command prompt
        Check to see that npm and npx have been installed alongside node by running "npm -v" and "npx -v"

        Next navigate to SH29_main directory
        !important on mac you MUST run npx before any expo commands (otherwise zsh will say that expo is not recognised)

        Then you are going to want to run "npx expo init" 
            this sets up the tempate and environment - You will need to do this before git pull as simply having the files 
            is not enough to run the code later on, npm environments can be weird
        
        Call the app TwoRoads when prompted
        Then select the blank tempate:
        After this try to git pull and push to make sure that you are set up with everyone
    
#### Login:
        to use the app you need to be logged into Expo I have created a twoRoads account
        First run "npx expo whoami" to see if you are already logged in - if nothing comes back then run the following
        "npx login"
        when prompted userneame = tworoadstest
        password = EddieFirstTestApp23

        run "npx expo whoami" again to make sure that you are logged in as tworoadstest
        You need to be logged in to run the app

#### Running and Testing:
        To run the application you can run "expo start" or "npx expo start" on mac
        this will create a local server (localhost) that anyone on your network can see
        Download the expo Go app from the Apple app store or google play store
        
        Next go the the expo app on your phone and login using the above credentials
        you should be able to see the local server on your phone if everything is set correctly

        NOTE: this will not work on eduroam due to the way that it is configured, if you want to test it in uni 
        you have to be on a local hotspot


### Setting up Branches:
        Creating a branch, run: **git checkout -b "[branch-name]"**
        -- This creates a branch on your LOCAL device, not on Gitlab --
        -- Use 'git branch' to see if new branch has been made --
        -- Star should be next to branch that you are actively on --
        To push branch to gitlab so its no longer only local: **git push origin [branch-name]**
        -- Always check if branch was made in Gitlab --
        Add and Commit to branch like normal.
        To push, do: git push --set-upstream origin [branch-name]
        

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://stgit.dcs.gla.ac.uk/team-project-h/2023/sh29/sh29-main.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://stgit.dcs.gla.ac.uk/team-project-h/2023/sh29/sh29-main/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
