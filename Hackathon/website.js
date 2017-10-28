var students = {
	"111":
	{
		"name" : "Lucas Liu",
		"insecure" : false,
		"points" : 500,
    "donated" : 0
	},
	"222":
	{
    "name" : "Helen Tang",
		"insecure" : true,
		"points" : 0,
    "donated" : 0
	},
	"333":
	{
		"name" : "Aashi Jhawar",
		"insecure" : false,
		"points" : 500,
    "donated" : 0
	},
	"444":
	{
		"name" : "Amanda Chen",
		"insecure" : true,
		"points" : 0,
    "donated" : 0
	}
}

var pantry = {
  "points" : 0
}

function donatePoints(student, amount)
{
  if (student.insecure != false)
  {
    return
  }
  student.points -= amount;
  pantry.points += amount;
  student.donated += amount;
}


/*
function donatePoints(calid, amount)
{
  if (students.calid.insecure != false)
  {
    return
  }
  students.calid.points -= amount;
  pantry.points += amount;
  students.calid.donated += amount;
}
*/
