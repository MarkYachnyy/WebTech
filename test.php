<?php

	$query_string = $_SERVER['REQUEST_URI'];
	$query = parse_url($query_string, PHP_URL_QUERY);
	parse_str($query, $params);

	$result = $params['v'];
	echo $result;
?>