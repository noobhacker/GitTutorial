// alert(currentIndex);

function updateDescription(currentIndex)
{
	
	switch(currentIndex)
	{
		case 0:
			updateText("title",
					   "huehuehuehuehue");					   
			break;
			
		case 1:
			updateText("title21",
					   "123123123123123123123123");					   
			break;
	}
}

function updateText(title, description)
{
	$(".title").html(title);
	$(".description").html(description);
}