# Major Match User Manual 


Introduction

Major Match is a unique platform designed for Penn State students to connect with others within their academic major. It combines the ease of social connectivity with academic networking, functioning similarly to popular dating apps but focusing on academic and professional interests.


## Features

Activity Log: Track your interactions on the platform. 

Chat: Communicate with matches through in-app messaging.

 Likes/Dislikes: Express interest or disinterest in profiles. 

Matches: Connect with students in your major.
 
Photos: Upload and manage your profile pictures. Profile Browsing: Explore profiles of fellow students. 

Transactions: Track any in-app transactions or upgrades. Finding and Connecting Browse: Swipe through profiles within your major. 

Match: Swipe right to connect and enable messaging. Networking Chatting: Use messaging for academic discussions. 

Networking: Build your academic and professional network.


## Deployment

Download the code from GitHub, and open the terminal in the folder directory, being "MajorMatch"

Before running the code, please run the command:
                                                
                 "npm install next" (installs crucial modules needed by next.js to run the code)

After that start the code by running 
                                     
                                     "npm run dev" 
this will give you an HTTP link to a website hosted on your machine, being "http://localhost:3000".
This is where the website pages will be shown.

Download and login to Oracle VM at https://www.virtualbox.org/
Use this link to a Mega Drive to install the VM hosting Database: https://mega.nz/file/AnUlzBJQ#Gl8baso__f55M1wsVFeG3mc4vHQ1XXkxTCs_EBSbHBc

Login Credentials:

       User: Public
       Password: Firetruck215


Open up the terminal, and run the command(s):
                                             
                                             sudo mysql (if prompted for a password, use login password)

Run all commands if needed shown below in quotes, but do not include the quotes when running them.

To see databases, run the command: 
                                  
                                  show databases;

To see tables of the database, run the commands:
                                                 
                                                 use Major_Match;
                                                     show tables;

To see table attributes, run the query:
                                       
                                       "DESCRIBE table_name;"

For example, if you wish to query the database to see a list of registered users, run the command:
                                                                                                  
                                                                                                  "SELECT * FROM User;"

