<!DOCTYPE html>
<html>
<head>
	<title>User List</title>
</head>
<body>
	
	<table border="1">
		<tr>
			<th>Id</th>
			<th>User Name</th>
			<th>Type</th>
			<th>ACTION</th>
		</tr>
		<% for(var i = 0; i < userList.length; i++){ %>

		<tr>
			<td><%= userList[i].id %></td>
			<td><%= userList[i].username %></td>
			<td><%= userList[i].type %></td>
			<td><a href="/home/edit/<%= userList[i].id %>">Edit</a> | <a href="#"> Delete</a> </td>
		</tr>
		
		<% } %>

	</table>
</body>
</html>