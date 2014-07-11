$(function() {
				/*---------------------------------------------------------------------*/
				/*----------------------- CONFIGURACION DEL FRAMEWORK -----------------*/

				/* Creamos un objeto con la funcion Quintus, lo guardamos en una variable
				 * llamada Q */

				/* habilita los modulos para trabajar con colisiones y mapas */

				/* pinta el juego en la caja con id=juego y se maximiza el canvas*/

				/*habilitamos controles (teclado)*/

				/*habilitamos controles touch */


				/* -------------------- DEFINICION DEL JUGADOR ---------------------- */
				Q.Sprite.extend("Jugador", {
					init : function(p) {
						this._super(p, {
							//TRIBUTOS DEL JUGADOR
						});
						//MODULOS A AGREGAR
					},
					//HACER QUE EL JUGADOR SE VOLTEE
					
				});

				/* -------------------- DEFINICION DEL ENEMIGO ---------------------- */
				Q.Sprite.extend("Enemigo", {
					init : function(p) {
						this._super(p, {
							//ATRIBUTOS DEL ENEMIGO
						});
						//MODULOS A UTILIZAR
						this.add('2d, aiBounce');
						
						//colisiones para matar al enemigo
						
						//colisiones para matar al jugador
						
					},
					
					//QUE EL ENEMIGO GIRE
	
				});

				/* ------------------- DEFINICION DEL NIVEL 1 (escena) -----------------*/
				Q.scene("nivel1", function(stage) {

					//DEFINIMOS LA CAPA DE FONDO
					var background = new Q.TileLayer({
						//ATRIBUTOS DE LA CAPA DE FONDO
					});
					//INSERTAMOS LA CAPA DE FONDO
					
					var colisiones = new Q.TileLayer({
						//ATRIBUTOS DE LA CAPA DE COLISIONES
					});
					//INSERTAMOS LA CAPA DE COLISIONES
					
					//INSERTAMOS AL JUGADOR
					var jugador = stage.insert(new Q.Jugador());
					
					//HACER QUE LO SIGA LA CAMARA

					//INSERTAMOS un ENEMIGO
					stage.insert(new Q.Enemigo());

				});

				/* ------------------- DEFINICION DE LA ESCENA GANAR -----------------*/

				/* ------------------- DEFINICION DE LA ESCENA GANAR -----------------*/

				/*-------------------- CARGAMOS IMAGENES, AUDIO Y MAPAS ------------------*/
				Q.load("tiles_map.png, player.png, enemigo.png, level1.tmx", function() {
					/* CREAMOS UNA HOJA DE MOSAICOS*/

					/* Una vez listos todos los recursos, ejecutamos la escena nivel1 */

				});
			});