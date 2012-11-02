<?php
define('ROOT', substr(dirname(__FILE__), 0, -3));

include_once(ROOT.'./config/config.php');

if(PHP_VERSION > '5.1') {
	@date_default_timezone_set('Etc/GMT'.($cfg['timeoffset'] > 0 ? '-' : '+').(abs($cfg['timeoffset'])));
}

function halt($msg, $exit) {
	$data = array();
	$data['status'] = 'fail';
	$data['message'] = $msg;
	$data['results'] = array();
	
	$json = json_encode($data);
	echo $json;	
	
	if ($exit === true) exit;
}

function output($results) {
	$data = array();
	$data['status'] = 'success';
	$data['results'] = $results;
	
	$json = json_encode($data);
	echo $json;	
}

function D() {
	static $D;
	if(!is_object($D)) {
		require_once ROOT.'./lib/database.class.php';
	    $D = new DB(DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_DBNAME, DATABASE_PORT);
	}
	return $D;
}

function fodate($format,$timestamp=''){
	global $cfg;
	!$timestamp && $timestamp = time();
	return gmdate($format,$timestamp+$cfg['timeoffset']*3600);
}

function qtime($time){
       $limit = time() - $time;
 
       if($limit<60)
       $time="{$limit}秒前";
       if($limit>=60 && $limit<3600){
            $i = floor($limit/60);
            $_i = $limit%60;
            $s = $_i;
           $time="{$i}分{$s}秒前";
       }	   
       if($limit>=3600 && $limit<3600*6){
            $h = floor($limit/3600);
            $_h = $limit%3600;
            $i = ceil($_h/60);
            $time="{$h}小时{$i}分前";
       }
       if($limit>=3600*6 && $limit<3600*24){
            $h = floor($limit/3600);
            $_h = $limit%3600;
            $time="{$h}小时前";
       }
       if($limit>=(3600*24) && $limit<(3600*24*30)){
            $d = floor($limit/(3600*24));
            $time= "{$d}天前";
        }
		if($limit>=(3600*24*30)){
            $time=gmdate('Y年n月j日', $time);
        }
		return $time;
}

function cutstr($string, $length, $dot = ' ...') {
	global $cfg;
	if(strlen($string) <= $length) return $string;
	$string = str_replace(array('&amp;', '&quot;', '&lt;', '&gt;'), array('&', '"', '<', '>'), $string);
	$strcut = '';
	if(strtolower($cfg['charset']) == 'utf-8') {
		$n = $tn = $noc = 0;
		while($n < strlen($string)) {
			$t = ord($string[$n]);
			if($t == 9 || $t == 10 || (32 <= $t && $t <= 126)) {
				$tn = 1; $n++; $noc++;
			} elseif(194 <= $t && $t <= 223) {
				$tn = 2; $n += 2; $noc += 2;
			} elseif(224 <= $t && $t < 239) {
				$tn = 3; $n += 3; $noc += 2;
			} elseif(240 <= $t && $t <= 247) {
				$tn = 4; $n += 4; $noc += 2;
			} elseif(248 <= $t && $t <= 251) {
				$tn = 5; $n += 5; $noc += 2;
			} elseif($t == 252 || $t == 253) {
				$tn = 6; $n += 6; $noc += 2;
			} else {
				$n++;
			}
			if($noc >= $length) break;
		}
		if($noc > $length) $n -= $tn;
		$strcut = substr($string, 0, $n);
	} else {
		for($i = 0; $i < $length; $i++) $strcut .= ord($string[$i]) > 127 ? $string[$i].$string[++$i] : $string[$i];
	}
	$strcut = str_replace(array('&', '"', '<', '>'), array('&amp;', '&quot;', '&lt;', '&gt;'), $strcut);
	return $strcut.$dot;
}

function daddslashes($string, $force = 0) {
	!defined('MAGIC_QUOTES_GPC') && define('MAGIC_QUOTES_GPC', get_magic_quotes_gpc());
	if(!MAGIC_QUOTES_GPC || $force) {
		if(is_array($string)) {
			foreach($string as $key => $val) {
				$string[$key] = daddslashes($val, $force);
			}
		} else {
			$string = addslashes($string);
		}
	}
	return $string;
}

function ddaddslashes($string) {
	if(is_array($string)) {
		foreach($string as $key => $val) {
			$string[$key] = ddaddslashes($val);
		}
	} else {
		$string = addslashes($string);
	}
	
	return $string;
}

?>