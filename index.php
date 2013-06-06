<?

$startdir = '../ultimo/';
$hide = array('dlf','index.php','Thumbs','.htaccess','.htpasswd'	);		
$indexfiles = array ('index.html','index.htm','default.htm','default.html');
$filetypes = array ('png' => 'jpg.gif','jpeg' => 'jpg.gif','jpg' => 'jpg.gif','zip' => 'archive.png','htm' => 'html.gif','html' => 'html.gif');

error_reporting(0);
if(!function_exists('imagecreatetruecolor')) $showthumbnails = false;
$leadon = $startdir;
if($leadon=='.') $leadon = '';
if((substr($leadon, -1, 1)!='/') && $leadon!='') $leadon = $leadon . '/';
$startdir = $leadon;

if($_GET['dir']) {
	//check this is okay.
	
	if(substr($_GET['dir'], -1, 1)!='/') {
		$_GET['dir'] = $_GET['dir'] . '/';
	}
	
	$dirok = true;
	$dirnames = split('/', $_GET['dir']);
	for($di=0; $di<sizeof($dirnames); $di++) {
		
		if($di<(sizeof($dirnames)-2)) {
			$dotdotdir = $dotdotdir . $dirnames[$di] . '/';
		}
		
		if($dirnames[$di] == '..') {
			$dirok = false;
		}
	}
	
	if(substr($_GET['dir'], 0, 1)=='/') {
		$dirok = false;
	}
	
	if($dirok) {
		 $leadon = $leadon . $_GET['dir'];
	}
}

$opendir = $leadon;
if(!$leadon) $opendir = '.';
if(!file_exists($opendir)) {
	$opendir = '.';
	$leadon = $startdir;
}

clearstatcache();
if ($handle = opendir($opendir)) {
	while (false !== ($file = readdir($handle))) { 
		//first see if this file is required in the listing
		if ($file == "." || $file == "..")  continue;
		$discard = false;
		for($hi=0;$hi<sizeof($hide);$hi++) {
			if(strpos($file, $hide[$hi])!==false) {
				$discard = true;
			}
		}
		
		if($discard) continue;
		if (@filetype($leadon.$file) == "dir") {
			if(!$showdirs) continue;
		
			$n++;
			if($_GET['sort']=="date") {
				$key = @filemtime($leadon.$file) . ".$n";
			}
			else {
				$key = $n;
			}
			$dirs[$key] = $file . "/";
		}
		else {
			$n++;
			if($_GET['sort']=="date") {
				$key = @filemtime($leadon.$file) . ".$n";
			}
			elseif($_GET['sort']=="size") {
				$key = @filesize($leadon.$file) . ".$n";
			}
			else {
				$key = $n;
			}
			$files[$key] = $file;
			
			if($displayindex) {
				if(in_array(strtolower($file), $indexfiles)) {
					header("Location: $file");
					die();
				}
			}
		}
	}
	closedir($handle); 
}

//sort our files
if($_GET['sort']=="date") {
	@ksort($dirs, SORT_NUMERIC);
	@ksort($files, SORT_NUMERIC);
}
elseif($_GET['sort']=="size") {
	@natcasesort($dirs); 
	@ksort($files, SORT_NUMERIC);
}
else {
	@natcasesort($dirs); 
	@natcasesort($files);
}

//order correctly
if($_GET['order']=="desc" && $_GET['sort']!="size") {$dirs = @array_reverse($dirs);}
if($_GET['order']=="desc") {$files = @array_reverse($files);}
$dirs = @array_values($dirs); $files = @array_values($files);

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Project Site : SCYF</title>
<link rel="stylesheet" type="text/css" href="../extranet/basics.css" />
</head>
<body>
	<div id="container">
		<div id="header">
			<h1> SCYF</h1> 
		</div>
		<div id="content">
			<div class="a">
				<!--table width="100%" border="0" class=" tabla01">
					<tr>
						<td style="padding:8px 0 0 0"><h4>Descarga de HTML</h4></td>
						<td><a href="http://webmedia.daniloblack.com.mx/carspa/docs/carspa_final.zip">
							<button style="float:left"  type="submit">download</button>
						</a></td>
					</tr>
				</table>-->
        <table width="100%" border="0" class=" tabla01">
  <tr>
    <td style="padding:8px 0 0 0"><h4>HTML Entrega 1</h4></td>
    <td><a href="http://webmedia.daniloblack.com.mx/scyf/docs/scyf290513.zip">
      <button style="float:left"  type="submit">descargar</button>
    </a></td>
  </tr><!--
  <tr>
    <td style="padding:8px 0 0 0"><h4>HTML Caja de Ahorro</h4></td>
    <td><a href="http://webmedia.daniloblack.com.mx/scyf/docs/cajadeahorro.zip">
      <button style="float:left"  type="submit">descargar</button>
    </a></td>
  </tr>
  <tr>
    <td style="padding:8px 0 0 0"><h4>HTML Seguros</h4></td>
    <td><a href="http://webmedia.daniloblack.com.mx/scyf/docs/seguros.zip">
      <button style="float:left"  type="submit">descargar</button>
    </a></td>
  </tr>
  <tr>
    <td style="padding:8px 0 0 0"><h4>HTML Salud</h4></td>
    <td><a href="http://webmedia.daniloblack.com.mx/scyf/docs/salud.zip">
      <button style="float:left"  type="submit">descargar</button>
    </a></td>
  </tr>-->
</table>
				<h2 class="clear">Dise&ntilde;o de Plantillas</h2>
	   
	    <div class="mBot10">
	      <p><strong>Status:</strong> <img src="extranet/grafico.gif" width="16" height="16" /> = Ver Dise&ntilde;o | <img src="extranet/produciendo.png" width="16" height="16" /> = En Proceso | <img src="extranet/flag yellow.png" width="16" height="16" /> = Esperando Aprobaci&oacute;n| | <img src="extranet/flag green.png" width="16" height="16" /> = Dise&ntilde;o Aprobado  |  <img src="extranet/firewall.png" width="16" height="16" /> = HTML</p> 
       </div> 
				<div id="listingcontainer">
		
					<div id="listingheader" class="clearfix"> 
						<div class="archivo"><h2>Archivo</h2></div>
						<div class="modificacion"><h2>&Uacute;ltima Modificaci&oacute;n</h2></div>
            <div class="status"><h2>Status</h2></div>
            <!--<div class="diseno"><h2>Dise&ntilde;o</h2></div>-->
					</div>
		
					<ol id="listing">
<?
$arsize = sizeof($files);
for($i=0;$i<$arsize;$i++) {
	$ext = strtolower(substr($files[$i], strrpos($files[$i], '.')+1));

	$filename = substr ( $files[$i], 0, ( strlen($files[$i]) - strlen ($ext) - 1 ) );
	if(strlen($filename)>43) {
		$filename = substr($files[$i], 0, 40) . '...';
	}
	while( ( preg_match( '/(.)_(.)/', $filename ) ) != 0 ) {
		$filename = preg_replace( '/(.)_(.)/', '$1 $2', $filename );
	}

	$fileurl = $leadon . $files[$i];

?>
						<li class="clearfix">
            	<div class="archivo"><a target="_blank" href="<?=$fileurl;?>"> <?=($i+1).'. '.$filename;?> </a></div>
              <div class="modificacion"><span class="txtmodificacion"><?=date ("M d Y h:i:s A", filemtime($leadon.$files[$i]));?></span></div>
              <div class="status"><span class="<?=$class;?> ok"<?=$thumb2;?>></span></div>
              <!--<div class="diseno"><a href="#" target="_blank" class="icodiseno"></a></div>-->
						</li>
<?
}	
?>
					</ol>
				</div> 
			</div> 
		</div> 
	</div>
</body>
</html>
