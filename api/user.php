<?php
require_once './lib/global.php';

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

$DB = D();

$results = array();

$results[] = array(
    'TeamId' => 23,
    'TeamName' => '迈阿密热队',
    'TeamLogo' => '23.png'    
);

$results[] = array(
    'TeamId' => 1,
    'TeamName' => '波士顿凯尔特人',
    'TeamLogo' => '1.png'    
);
$results[] = array(
    'TeamId' => 28,
    'TeamName' => '洛杉矶湖人',
    'TeamLogo' => '28.png'    
);

output($results);
exit;
?>