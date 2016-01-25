<?php
    header('Access-Control-Allow-Origin: http://lucx.info');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    // Getting the information
    $ipaddress = $_SERVER['REMOTE_ADDR'];
    if ($ipaddress !== "127.0.0.1")
    {
        $page = "http://{$_SERVER['HTTP_HOST']}{$_SERVER['PHP_SELF']}";
        //$page .= iif(!empty($_SERVER['QUERY_STRING']), "?{$_SERVER['QUERY_STRING']}", "");
        $referrer = $_SERVER['HTTP_REFERER'];
        $datetime = mktime();
        $useragent = $_SERVER['HTTP_USER_AGENT'];
        $remotehost = @getHostByAddr($ipaddress);

        // Create log line
        $logline = $ipaddress . '|' . $referrer . '|' . $datetime . '|' . $useragent . '|' . $remotehost . '|' . $page . "\n";

        // Write to log file:
        $logfile = '/tmp/traffic.txt';

        // Open the log file in “Append” mode
        if (!$handle = fopen($logfile, 'a+')) {
        die("Failed to open log file");
        }

        // Write $logline to our logfile.
        if (fwrite($handle, $logline) === FALSE) {
        die("Failed to write to log file");
        }
        
        echo "Success!";

        fclose($handle);
    }
?>
