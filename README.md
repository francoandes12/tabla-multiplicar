## CONSOLE APP MULTIPLICAR

## DESCRIPCION
Es una aplicacion para generar una tabla de multiplicar en consola
## PASOS PARA SU USO
1-Bajar el codigo y ejectuar npm install,para bajar todas las dependencias de la app <br />
2-correr el comando node app seguido de alguno de los siguientes comandos:
## COMANDOS
-listar<br/>
-crear <br/>
Ambos reciben dos parametros correspondientes a la base y al limite
## PARAMETROS
Se los puede pasar de la siguiente forma:<br/> 
--base numero --limite numero<br/>
o en su forma abreviada: -b numero -l numero<br/>
El limite es opcional, en caso de no pasarle el parametro,tomara el valor por defecto de 10.
## EJEMPLOS
Ejemplo:<br/>
node app crear -b 4 -l 7<br/>
El ejemplo nos generara un archivo .txt con la tabla del 4, hasta el 7.<br/>
node app listar -b 4 <br/>
El ejemplo nos mostrara en consola la tabla del 4, hasta el 10 (ya que no le especificamos el limite,toma el limite por defecto).
