# Overview
This is the OFET UI(User interface), the backend will be in a different branch. So if you want to get the frontend UI code on your computer you can do that by following these steps listed below

# Step 1
create a directory on your computer and call it OFET_UI. You can create these folder wherever you would like, but I suggest for simplicity sake do it on Desktop. If you are a mac user open iTerm(install iTerm its easier for development sake please), if you are a Windows user install git bash its just easier for development sake, and then run the commands below
	1. cd into your Desktop -> "mkdir OFET_UI" -> "cd OFET_UI"

# Step 2
We need to clone this repository so in github 
	1. click on the "CODE dropdown" at the top
	2. Make sure it says Local -> HTTPS -> and copy that link

Now we have the github URL link to clone, go back to your iterm or git bash, you should be in OFET_UI right now and just paste the command with the link in there as well in replace of the .....
	1. "git clone ....."

# Step 3
You have cloned the github repository!(Hopefully) Now from here either do the following to open in VSCode(first make sure you have VSCode downloaded)
	1. "code ." this automatically opens the code in VSCode
	2. just go to VSCode and open the folder from VSCode should be simple enough

# Step 4
The way that react app starts is they have set of instructions inside the package.json file. If you open open the branch of the "OFET Database" folder into the "ofet_project" folder you will see a file called package-lock.json and package.json. These files contain all my package dependencies and my script instructions to run the react application.
	1. so first cd into ofet_project, we want to be in the same level as the package.json file, this should look something like cd OFETDatabase -> cd ofet_project, to check if you type ls in your iTerm or git Bash you will see package.json listed as one of the files in there
	2. try running the command: `npm start`, you will get an error saying react-scripts not found.

# Step 5
This error is because you need to delete the "node_modules" folder(for some people this might not exist already, to check if it exists this folder will be at the same level as public and src), if its there just delete it and run either of the following command: `npm install --force`

# Step 6
now you can run the following command: `npm start` and you will see the React App pop up in google chrome at your local host port

# Some Notes
If it is your first time running it might take some extra time to run everything, but in the instances after you should be good to go.