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