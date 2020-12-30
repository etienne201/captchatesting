 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
 </head>
 <body>
 <?php

$post = array(
	'name' => $GET['name'], 
    'lastName' => $GET['lastName'],
    'email' => $GET['email'],
    'message' => $GET['message'],
);

echo "<h1>".$post['name']."</h1>";
echo "<p>".$post['lastName']."</p>";
echo "<hr />";
echo "<h1>".$post['email']."</h1>";
echo "<p>".$post['message']."</p>";
echo "<hr />";


?>
 </body>
 </html>