<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');
$conn = new mysqli('localhost','root','','sabaijai');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

$id= $_POST['id'];
$score = $_POST['score'];
$p_id = intval($id);
$p_score = intval($score);

$sql = "INSERT INTO `depressiontest`(`user_id`,`score`)VALUES($p_id,$p_score)";	
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