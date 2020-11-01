## CONSOLE APP MULTIPLICAR

Es una aplicacion para generar una tabla de multiplicar en consola
Pasos para su uso:
1-Bajar el codigo y ejectuar npm install,para bajar todas las dependencias de la app
2-correr el comando node app seguido de alguno de los siguientes comandos:
-listar
-crear
Ambos reciben dos parametros correspondientes a la base y al limite
Se los puede pasar de la siguiente forma: --base numero --limite numero
o en su forma abreviada: -b numero -l numero
El limite es opcional, en caso de no pasarle el parametro,tomara el valor por defecto de 10.
Ejemplo: 
node app crear -b 4 -l 7
El ejemplo nos generara un archivo .txt con la tabla del 4, hasta el 7.
node app listar -b 4 
El ejemplo nos mostrara en consola la tabla del 4, hasta el 10 (ya que no le especificamos el limite,toma el limite por defecto).