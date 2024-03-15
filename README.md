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

        Once you have cloned the repo run "npm install", this will install all of the required packages for the app to run and it will 
        set up the expo enviornment. From this stage I reccommed running "npx expo-doctor" to see if any packages need updating as expo 
        updates can and will break the app if package-lock is not updated often enough.
    
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
        you have to be on a local hotspot.

        On Mac computer you can install X-code and the simulator, when this is set up you can run "npm run ios" to lauch the simulator 
        version, or you can just as easily run "npm start" then hit "i" to switch to the simulator build.


### Setting up Branches:
        Creating a branch, run: **git checkout -b "[branch-name]"**
        -- This creates a branch on your LOCAL device, not on Gitlab --
        -- Use 'git branch' to see if new branch has been made --
        -- Star should be next to branch that you are actively on --
        To push branch to gitlab so its no longer only local: **git push origin [branch-name]**
        -- Always check if branch was made in Gitlab --
        Add and Commit to branch like normal.
        To push, do: git push --set-upstream origin [branch-name]
