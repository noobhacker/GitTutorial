// alert(currentIndex);

function updateDescription(currentIndex)
{
	
	switch(currentIndex)
	{
		case 0:
			updateText("Step 1: Get the tools ready",
					   "Make sure you had downloaded all the tools you need before you start.");					   
			break;
			
		case 1:
			updateText("title2",
					   "huehuehuehuehuehuehuehue");					   
			break;
	}
}

function updateText(title, description)
{
	$(".title").html(title);
	$(".description").html(description);
}