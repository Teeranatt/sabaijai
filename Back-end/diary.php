<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');
$conn = new mysqli('localhost','root','','sabaijai');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}
// }
// $datenow = date("Y-m-d");
$id= $_POST['id'];

// $lastname= $_POST['lastname'];
$diary = $_POST['diary'];
$mood = $_POST['mood'];

$p_id = intval($id);

$sql = "INSERT INTO `diary`(`user_id`,`data_text`,`mood`)VALUES($p_id,'$diary','$mood')";	
$result = mysqli_query($conn,$sql);                    
if($result){
    $callback= array(
        'status' => 200
        ,'msg' => 'Insert Success',
    );
    echo json_encode("status ok"); 
}else{
    $callback=array(
    'status' => 404
    ,'msg' => "Insert Fail"
);echo json_encode(null); 
    }

// echo ($status);


?>