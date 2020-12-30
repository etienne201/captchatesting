<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
include 'style.php';

$conn = OpenCon();

echo "Connected Successfully";

CloseCon($conn);

?>
</body>
</html>