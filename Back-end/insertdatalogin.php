<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');
$conn = new mysqli('localhost','root','','sabaijai');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}


$username= $_POST['name'];
$password= $_POST['password'];
$email= $_POST['email'];


$sql = "INSERT INTO `users`(`user_name`,`password`,`email`)
         VALUES('$username','$password','$email')";  
$result = mysqli_query($conn,$sql);                    
if($result){
    $callback= array(
        'status' => 200
        ,'msg' => 'Insert Success'
    );
}else{
    $callback=array(
    'status' => 404
    ,'msg' => "Insert Fail"
);
    }
    // echo($status);
    // echo json_encode();

?>