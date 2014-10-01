/*
These are the basic steps to work with Git. Which is only for saving files on your own computer.
And the basic steps for working with GitHub. Which is an on line website that saves your files.

Git and Github are not the same thing. Git is for dealing with files locally on your own computer.
GitHub is for pushing your files online and saving them, you need to know both. 

These steps are for git

cd into the directory you want to work in: 
the > symbols stand for type this command into the command line, so the windows command prompt
> cd desktop\javascript\javascript_test_files
#This will get you to the directory you want to be in 

> nul > filename_1.js 
# This creates a new file, open it in notepad++

# go into notepad++ and write some javascript code. Save the file 

# to run this file from the command line type:
> node filename_1.js
# and it will execute the code in the file. 

# ok now to push to git 
####### Make sure you are in the correct directory(folder).
# This will create a new git repository locally, or re-initialize your previous one
> git init

# If you would like to see your previous commits type this command
> git log

# Now to move the changes you made into git's staging area: 
> git add .
# This command will not commit any changes, it just will put them in git's staging area so you 
# can look at what you changed. This is more useful when workign on big projects. 

# From the staging area you can type this command to see what was added or deleted
> git status 

# Now to commit the changes from the staging area to your git repository; making the changes saved in git 
> git commit -m "Write a commit message that described what you did here" 

#NOW THIS IS FOR GitHub
# To see if you have an exisiting repository on GitHub to push the changes to: 
> git remote -v 
# if you have an existing repository you can simply type
> git push 
# and the changes will be pushed 

## If you do not have an existing GitHub repository for this directory. 
## CREATE a Repository in GitHub; name is similar to your directory 
## After you have created the repository copy the url it shows you. This will be obvious.

## Now from the command line
> git remote add origin "The URL You copied gets pasted here"

## after that type this 
> git push -u origin master 

####For Github 
# once you have typed > git remote add origin repo_url_name & > git push -u origin master 
# you only have to type > git push; to push to github 

SO THE STEPS:

# cd into your directory you want to be in: 
> cd desktop\javascript\javascript_test_files 
> git init 
#after making changes 
> git add . 
> git commit -m "Message with the commit should make sense"


## For Github: The 1st time you make a new repository 
> git remote add origin "The url you copied when you made the new repository" 
> git push -u origin master 

## For Github if you already have done the 2 previous steps once 
> git push

*/