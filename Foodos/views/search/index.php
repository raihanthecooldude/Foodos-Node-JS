<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
</head>
<body>
	<h1>Welcome Home!</h1>

	<a href="/home">Back</a>
	
	<table border="1">
		<tr>
			<th>Time</th>
			<th>Food Name</th>
			<th>Area</th>
			<th>Price Range</th>
		</tr>
		<% for(var i = 0; i < userList.length; i++){ %>

		<tr>
			<td><%= searchList[i].id %></td>
			<td><%= searchList[i].username %></td>
			<td><%= searchList[i].type %></td>
			<td> <a href="#"> Delete</a> </td>
		</tr>
		
		<% } %>

	</table>
</body>
</html>