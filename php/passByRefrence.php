<?php


function Test(&$a){
$a = "Amresh";
echo "<br>In Function : ".$a;
}

$str = "Hello";
echo "<br>str = ".$str;
Test($str);
echo "<br>str = ".$str;

?>