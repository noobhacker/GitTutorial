// alert(currentIndex);

function updateDescription(currentIndex)
{	
	$(".title").html("Step " + (currentIndex + 1));
	switch(currentIndex)
	{
		case 0:
			updateDesc("Copy the repo link from Github")				   
			break;
			
		case 1:
			updateDesc("Press the Clone/New button in SourceTree");				   
			break;
			
		case 2:
			updateDesc("Paste the link you have copied into Source Path/URL, then click Clone");				   
			break;
			
		case 3:
			updateDesc("You have cloned the project into your local drive. Now you want to start a new feature.\n\nFeatures from you and your team will merged into Develop branch.");				   
			break;
			
		case 4:
			updateDesc("Put a V in Vesion tag prefix and press OK");
			break;
			
		case 5:
			updateDesc("Make sure you are selecting develop and press Git Flow again");
			break;
			
		case 6:
			updateDesc("Start a new feature");
			break;
			
		case 7:
			updateDesc("Insert what you are doing and press OK");
			break;
			
		case 8:
			updateDesc("Now go to do your stuff");
			break;
			
		case 9:
			updateDesc("Come back to SourceTree, you will see uncommitted changes, and you can see what you have changed");
			break;
			
		case 10:
			updateDesc("Now stage the files and go commit");
			break;
		
		case 11:
			updateDesc("Insert what you have done for easier tracking");
			break;
		
		case 12:
			updateDesc("Now you have commited your changes. You just made a copy locally, in case something went wrong, you can go back. Your friends can't see what you have done");
			break;
		
		case 13:
			updateDesc("Now continue and do your work");
			break;
		
		case 14:
			updateDesc("Come back, you see uncommitted changes again, stage them and commit again.");
			break;
		
		case 15:
			updateDesc("After you decided to let your teammates what you had done, you can push them to remotes, as known as cloud.");
			break;
		
		case 16:
			updateDesc("Make sure you select develop branch locally and you want to push to develop on the remote");
			break;
		
		case 17:
			updateDesc("You will need to login to make the changes");
			break;
		
		case 18:
			updateDesc("You can add your friends into your project by going Settings tab and key in your teammates' Github user name");
			break;
		
		case 19:
			updateDesc("Your friends has to do the same thing, create a feature, make changes, commit the changes, push to remote");
			break;			

		case 20:
			updateDesc("After you and your teammate had done the project to a stage, you can start merging them together, by right clicking your local branch and create pull request");
			break;

		case 21:
			updateDesc("You can see the changes on Github");
			break;	

		case 22:
			updateDesc("Make sure you push to develop branch on the remote");
			break;	

		case 23:
			updateDesc("For the first time, nothing is on the remote, so you should able to merge without issues");
			break;	

		case 24:
			updateDesc("Then, you can Finish Feature. Your work will be push to remote.");
			break;	

		case 25:
			updateDesc("Now the second person created the pull request, and there is conflict");
			break;	

		case 26:
			updateDesc("He need to go to Finish Feature to solve the conflicts.");
			break;	

		case 27:
			updateDesc("The SourceTree will gives error message, now we are going to solve the conflicts");
			break;	

		case 28:
			updateDesc("Now you need to use Notepad++ to solve the conflicts");
			break;	

		case 29:
			updateDesc("The things before ======= are the codes currently on the remote and below it is the code you have submitted. There is conflicts. Modify the codes to the way you want and save.");
			break;	

		case 30:
			updateDesc("This is the way it should look like. Modify them and press save.");
			break;				
		
		case 31:
			updateDesc("After solving the conflicts, the message will be automatically generated for records, press commit to submit your solved conflicts locally");
			break;				
		
		case 32:
			updateDesc("Push the commits to the remote");
			break;	
			
		case 33:
			updateDesc("Then, all of your teammates have to fetch the changes you have done. Then the teammates have shared the work.");
			break;				
		
		case 34:
			updateDesc("This is how it should look like after merging, the lines are merged together");
			break;				
		
	}	
			
}

function updateDesc(description)
{
	$(".description").html(description);
}