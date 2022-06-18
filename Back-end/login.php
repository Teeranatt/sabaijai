<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include('config.ini.php');
$conn = new mysqli('localhost','root','','sabaijai');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

$username = $_GET['username'];
$sql2 = "SELECT * FROM `users` where `user_name`= '$username' ";
$result = mysqli_query($conn,$sql2);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
    echo json_encode($data); 
    echo mysqli_error($con); 
}else{
  echo json_encode(null);
}