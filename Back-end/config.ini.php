<?php
$con = new mysqli('localhost','root','','sabaijai');
$err = $con->connect_errno;
$errno = $con->connect_error;
if ($con->connect_errno){
    
  die("Connection failed" . $con->connect_error);
}


?>
