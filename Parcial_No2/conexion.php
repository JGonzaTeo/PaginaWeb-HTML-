<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>

<?php
$conexion=mysqli_connect('localhost','root','','bd_parcialdesarollo');
if(isset($_POST['texto2'])){
	$texto=$_POST['texto'];
	$texto2=$_POST['texto2'];
	$sql ="INSERT INTO Contacto(cod_contacto,Nombre,Correo)
							VALUES('','$texto','$texto2')";

if($conexion->query($sql) ==true){

	echo '<div><p>Datos enviados</p></div>';
	echo '<div><p><a href="index.html">Regresar al curriculum</a></p></div>';
	return;
}else
{
	die("error al ingresar datos". $conexion->error);
}
}
?>	

	
</body>
</html>
