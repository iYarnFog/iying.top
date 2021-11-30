<?php
	echo iconv("GBK", "UTF-8", file_get_contents('http://users.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?uins='.$_GET['yuin'], true));