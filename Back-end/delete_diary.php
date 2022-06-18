<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET , DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include('config.ini.php');
$conn = new mysqli('localhost','root','','sabaijai');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

$id = $_GET['id'];
$sql2 = "DELETE FROM `diary` WHERE `diary`.`di_id` = '$id';";
$result = mysqli_query($conn,$sql2);    
if($result){
  $callback= array(
      'status' => 200
      ,'msg' => 'Insert Success',
  );
  echo json_encode("saved"); 
}else{
  $callback=array(
  'status' => 404
  ,'msg' => "Insert Fail"
);echo json_encode(null); 
  }
