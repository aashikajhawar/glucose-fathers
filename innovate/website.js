var students = {
	"1111":
	{
		"name" : "Lucas Liu",
		"insecure" : false,
		"points" : 500,
    "donated" : 0
	},
	"2222":
	{
    "name" : "Helen Tang",
		"insecure" : true,
		"points" : 0,
    "donated" : 0
	},
	"3333":
	{
		"name" : "Aashi Jhawar",
		"insecure" : false,
		"points" : 500,
    "donated" : 0
	},
	"4444":
	{
		"name" : "Amanda Chen",
		"insecure" : true,
		"points" : 0,
    "donated" : 0
	}
}

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
