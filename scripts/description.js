// alert(currentIndex);

function updateDescription(currentIndex)
{
	
	switch(currentIndex)
	{
		case 0:
			updateText("Step 1: Get the tools ready",
					   "Make sure you had downloaded all the tools needed.");					   
			break;
			
		case 1:
			updateText("Step 2: Clone the project",
					   "Copy the link from Github and Clone using SourceTree");					   
			break;
	}
}

function updateText(title, description)
{
	$(".title").html(title);
	$(".description").html(description);
}