<?php
require_once './lib/global.php';

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

$DB = D();

$results = array();

$results[] = array(
    'TeamId' => 1,
    'TeamName' => '迈阿密热队',
    'News'=> array(
        0 => array(
            'Id' => 1000,
            'Title' => '君子剑：愿意和队友们比试投篮 詹韦可以变得更好',
            'Source' => '新浪NBA'
        ),
        1 => array(
            'Id' => 1001,
            'Title' => '三分雷8中4热火此签铁赚 穿云一箭胜千军万马相见',
            'Source' => '新浪NBA'
        ),
        
        2 => array(
            'Id' => 1002,
            'Title' => '韦德：中国赛要向姚明致敬 麦蒂加盟CBA是个好机会',
            'Source' => '虎扑篮球'
        )  
    )
);

$results[] = array(
    'TeamId' => 2,
    'TeamName' => '洛杉矶湖人',
    'News'=> array(
        0 => array(
            'Id' => 1003,
            'Title' => '科比已恢复训练，布朗：好胜是他的天性',
            'Source' => '新浪NBA'
        ),
        
        1 => array(
            'Id' => 1004,
            'Title' => '慈世平被纳什控球晃丢神：这家伙应该去办个魔术秀',
            'Source' => '新浪NBA'
        )  
    )
);

$results[] = array(
    'TeamId' => 3,
    'TeamName' => '波士顿凯尔特人',
    'News'=> array(
        0 => array(
            'Id' => 1003,
            'Title' => '科比已恢复训练，布朗：好胜是他的天性',
            'Source' => '新浪NBA'
        ),
        
        1 => array(
            'Id' => 1004,
            'Title' => '慈世平被纳什控球晃丢神：这家伙应该去办个魔术秀',
            'Source' => '新浪NBA'
        )  
    )
);

$results[] = array(
    'TeamId' => 4,
    'TeamName' => '洛杉矶快船',
    'News'=> array(
        0 => array(
            'Id' => 1003,
            'Title' => '科比已恢复训练，布朗：好胜是他的天性',
            'Source' => '新浪NBA'
        ),
        
        1 => array(
            'Id' => 1004,
            'Title' => '慈世平被纳什控球晃丢神：这家伙应该去办个魔术秀',
            'Source' => '新浪NBA'
        ),
        
        2 => array(
            'Id' => 1003,
            'Title' => '科比已恢复训练，布朗：好胜是他的天性',
            'Source' => '新浪NBA'
        ),
        
        3 => array(
            'Id' => 1004,
            'Title' => '慈世平被纳什控球晃丢神：这家伙应该去办个魔术秀',
            'Source' => '新浪NBA'
        )  
    )
);

output($results);
exit;
?>