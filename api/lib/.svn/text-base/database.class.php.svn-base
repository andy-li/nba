<?php
/**
 * 数据库基类
 * 需要mysqli库支持
 * @version    2.0
 */
class DB {
    var $connection    = 0;
    var $pConnect      = 1;
    var $showError     = 1;
    var $haltOnError   = 1;

    var $errorNo       = 0;
    var $errorMsg      = '';

    var $selectQueries = 0;
    var $updateQueries = 0;

    /**
     * private
     */
    var $autoFree    = 1;

    /**
     * constructor
     */
    function DB( $host = '', $username = '', $password = '', $database = '' , $port='' , $pConnect = DATABASE_USE_PCONNECT, $autoConnect = 1 ) 
	{
		$this->pConnect = $pConnect;
        if($autoConnect) $this->connect($host, $username, $password, $database, $port);
    }

    /**
     * connect to mysql server
     * @return bool
     */
    function connect($host, $username, $password, $database, $port) {
        $connect_function = ($this->pConnect) ? 'mysql_pconnect' : 'mysqli_connect' ;
        $this->connection = $connect_function($host, $username, $password , $database , $port);
        $this->query("set names utf8");

        if(!$this->connection) {
            $this->halt("Connect to SQL server use ($host, $username, ****** , $database) failed.");
            return false;
        }
    }

    /**
     * disconnect
     * @return bool
     */
    function disconnect() {
        //关闭数据库
        return mysqli_close($this->connection);
    }


    /**
     * basic method : sql query(for select/show)
     * @return DB_RESULT
     */
    function query($queryString, $beginRow = 0, $limit = 0) {
        if($limit) $queryString .= ' LIMIT ' . $beginRow .','. $limit;
        $queryid = mysqli_query($this->connection , $queryString );
        $this->selectQueries++;

        if(!$queryid)  $this->halt('Invalid SQL: ' . $queryString);
        return (new DB_RESULT($queryid));
    }

    /**
     * basic method : sql query(for insert/update/replace)
     * @return string
     */
    function update($queryString,$type = '') {
	    $func = $type == 'UNBUFFERED' && @function_exists('mysqli_unbuffered_query') ?'mysqli_unbuffered_query' : 'mysqli_query';
        $queryid     =  $func( $this->connection , $queryString);
	    //print $queryString."\n";
        $this->updateQueries++;

        if(!$queryid)  {
           $this->halt('Invalid SQL: ' . $queryString);
        }
        return $queryid;
    }


    /**
     * basic method : get the result string from sql query('limit 1' auto appended)
     * @return array
     */
    function result($queryString, $appLimit = 1 , $start = 0) {
        if(empty($start)) $start = 0;
        if($appLimit) $queryString  .= ' LIMIT '.$start.',1';

        $queryid = mysqli_query( $this->connection , $queryString);
	    //print $queryString."\n";
        $this->selectQueries++;

        if(!$queryid) $this->halt('Invalid SQL: '.$queryString);
       
        //get result
        $result = mysqli_fetch_array($queryid, MYSQLI_ASSOC);

        //no results matching the condition
        if(!$result) return false;

        if($this->autoFree) mysqli_free_result($queryid);

        return (count($result)==1) ? current($result): $result;
    }


    /**
     * fetch all results into a hash var
     * @return array
     */
    function fetch_all_into_array($queryString, $beginRow = 0, $limit = 0) {
        $array = array();

        if($beginRow) $beginRow = $beginRow . ',';
        if($limit) $queryString .= ' LIMIT ' . $beginRow . $limit;

        $queryid = mysqli_query($this->connection , $queryString );
        $this->selectQueries++;

        if(!$queryid) $this->halt('Invalid SQL: '.$queryString);


        //store the selected data in the array
        while($thisrow = mysqli_fetch_array($queryid, MYSQLI_ASSOC)) {
            $array[] = $thisrow;
        }

        if($this->autoFree) mysqli_free_result($queryid);

        return $array;
    }

    /**
     * get last auto_increment id
     * @return int
     */
    function lastid() {
        return mysqli_insert_id($this->connection);
    }

    /**
     * get next seq id from $this->seqtable
     * for mysql, use auto_increment
     * @return null
     */
    function nextid($tablename) {
        return null;    
    }

    /**
     * return the number of affected rows
     * @return int
     */
    function affected_rows() {
        return mysqli_affected_rows($this->connection);
    }

    /**
     * error handle
     */
    function halt($msg) {
        $this->errorMsg = @ mysqli_error($this->connection);
        $this->errorNo  = @ mysqli_errno($this->connection);
        $errstr = '<b>Database error:</b>'.$msg.
                  "<br><b>MySQL Server Error:</b>".$this->errorMsg."(".$this->errorNo.")";
        #errorlog(0, $errstr);
		echo $errstr;
		exit;
    }
  
    function escape_string($arr) {
	    if(is_array($arr)) {
		    foreach ($arr as $key => $value) {
		        $arr[$key] = mysql_escape_string($value);
		    }
		    return $arr;
	    } else {
		    return mysql_escape_string($arr);
	    }
    }
} // end class db


/**
 * 数据库结果基类
 * @version    2.0
 */
Class DB_RESULT {
    var $result_id     = 0;

    var $record        = array();
    var $Row           = 0;
    var $eof           = true;

    function DB_RESULT($result_id) {
        $this->result_id = $result_id;
        $this->eof       = 0;
    }

    /**
     * pointer to the next record
     * @return array
     */
    function next_record() {
        $this->record = @ mysqli_fetch_array($this->result_id, MYSQLI_ASSOC);
        $this->Row++;
        $status = is_array($this->record);
        $this->eof = !$status;
        return $status;
    }

    /**
     * @return array
     */
    function fetchInto(&$arr) {
        $stat = $this->next_record();
        $arr  = $this->record;
        return $stat;
    }

    /**
     * @return mixed
     */
    function fetch() {
        return mysqli_fetch_array($this->result_id, MYSQLI_ASSOC);
    }

    /**
     * offset the record pointer to $pos
     * @return bool
     */
    function seek($pos = 0) {
        $status = mysqli_data_seek($this->result_id, $pos);
        if($status) {
            $this->Row = $pos;
            return true;
        } else {
            $rows = $this->rows();
            $this->halt("Seek($pos) failed: result has " . $rows . " rows");
            mysqli_data_seek($this->result_id, $rows);
            $this->Row = $rows;
            return false;
        }
    }

    /**
     * offset the record pointer to $pos
     * @return int
     */
    function rows() {
        return mysqli_num_rows($this->result_id);
    } 

    /**
     * @return int
     */
    function fields() {
        return mysqli_num_fields($this->result_id);
    }

    /**
     * @return mixed
     */
    function get($Name) {
        return $this->record[$Name];
    }

    function free() {
        mysqli_free_result($this->result_id);
        $this->result_id = 0;
    }

    function halt($msg) {
        $this->errorMsg = @ mysqli_error($this->connection);
        $this->errorNo  = @ mysqli_errno($this->connection);
        $errstr = '<b>Database error:</b>'.$msg.
                  "<br><b>MySQL Server Error:</b>".$this->errorMsg."(".$this->errorNo.")";
        halt(0, $errstr);
    }
}

?>