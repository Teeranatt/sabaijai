<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
include('config.ini.php');
$conn = new mysqli('localhost','root','','sabaijai');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}



$id = $_POST['id'];
$data_update = $_POST['diary'];
$mood_update = $_POST['mood'];
$p_id = intval($id);


$sql = "UPDATE `diary` SET `data_text` = '$data_update',`mood` = '$mood_update' where `di_id` = $p_id ";
// UPDATE `diary` SET `di_id`='[value-1]',`user_id`='[value-2]',`data_text`='[value-3]',`mood`='[value-4]',`date`='[value-5]' WHERE 1
if($conn->query($sql) === TRUE){
  $callback= array(
      'status' => 200
      ,'msg' => 'Insert Success',
  );
  echo json_encode("Record updated successfully"); 
}else{
  $callback=array(
  'status' => 404
  ,'msg' => "Insert Fail"
);echo json_encode("Error updating record: ". $conn->error); 
  }


// $conn->close();
?>