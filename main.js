var odd=[1,2,3,4,5,6,7,8,9];
let countss=0;
function oddNum(odd)
	{
	for(i=0; i<odd.length; i++)
		{
		if(odd[i]%2!=0)
			{
			document.write("odd number:"+odd[i]);
			document.write("<br>");
			countss++;
			}
		}
		return countss;
	}
	let oddNums=oddNum(odd);
	document.write(oddNums);
	document.write("<br>");
	
	