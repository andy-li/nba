<?php
require_once './lib/global.php';

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

$DB = D();

$results = array(
    'NewsId' => 1000,
    'Title' => '君子剑：愿意和队友们比试投篮 詹韦可以变得更好',
    'Source' => '新浪NBA',
    'Content' => '<p>记者于睿寅10月14日上海报道 首发出战的机会，对于37岁的雷·阿伦弥足珍贵，即使只有半场。</p><p>中国赛上海站的下半场比赛，斯波选择雪藏韦德，而全队最年长的阿伦作为主力出现在场上。虽然最终6分、3次助攻的表现并未复刻上一场比赛的高效，但当阿伦与40岁的希尔在中圈握手致意时，你还是不得不感叹他与岁月为敌的强大力量。</p><p>在职业生涯暮年才成就自己的第一次中国之行，对阿伦来说算是欣喜中略带着遗憾。但是每逢他登场时，球迷山呼海啸的呐喊却毫不逊于他们给予“三巨头”的任何一人，却正证明了“君子雷”安静的力量，丝毫未因岁月的流逝而褪色。这团沉默的火焰，将在新赛季的迈阿密继续燃烧。</p><p><strong>我不用教他们投篮，我和他们比试</strong></p><p>上海站的比赛，阿伦手感不佳，外线5次出手无一命中。但是第一场却是截然不同的情况，阿伦外线8投4中拿下全队第二高的15分，热火(微博)全队三分球23投11中的表现也为他们挣得了一场胜利。</p>'
);

output($results);
exit;
?>