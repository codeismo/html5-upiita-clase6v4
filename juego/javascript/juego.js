$(function() {
	/*---------------------------------------------------------------------*/
	/*----------------------- CONFIGURACION DEL FRAMEWORK -----------------*/

	/* Creamos un objeto con la funcion Quintus, lo guardamos en una variable
	 * llamada Q */
	var Q = Quintus();
	/* habilita los modulos para trabajar con colisiones y mapas */
	Q.include("Sprites, Scenes, Input, Touch, 2D");
	/* pinta el juego en la caja con id=juego y se maximiza el canvas*/
	Q.setup("juego", {
		maximize : true
	});
	/*habilitamos controles (teclado)*/
	Q.controls();
	/*habilitamos controles touch */
	Q.touch();

	/* -------------------- DEFINICION DEL JUGADOR ---------------------- */
	Q.Sprite.extend("Jugador", {
		init : function(p) {
			this._super(p, {
				//TRIBUTOS DEL JUGADOR
				asset : "player.png",
				x : 100,
				y : 150,
				jumpSpeed : -280
			});
			//MODULOS A AGREGAR
			this.add("platformerControls");
		}
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
			dataAsset : 'level1.tmx',
			layerIndex : 0,
			sheet : 'mosaicos',
			tileW : 70, //ancho de un mosaico
			tileH : 70, //altura de un mosaico
			type : Q.SPRITE_NONE

		});
		//INSERTAMOS LA CAPA DE FONDO
		stage.insert(background);

		var colisiones = new Q.TileLayer({
			//ATRIBUTOS DE LA CAPA DE COLISIONES
			dataAsset : 'level1.tmx',
			layerIndex : 1,
			sheet : 'mosaicos',
			tileW : 70,
			tileH : 70

		});
		//INSERTAMOS LA CAPA DE COLISIONES
		stage.collisionLayer(colisiones);

		//INSERTAMOS AL JUGADOR
		var jugador = stage.insert(new Q.Jugador());

		//HACER QUE LO SIGA LA CAMARA

		//INSERTAMOS un ENEMIGO
		//stage.insert(new Q.Enemigo());

	});

	/* ------------------- DEFINICION DE LA ESCENA GANAR -----------------*/

	/* ------------------- DEFINICION DE LA ESCENA GANAR -----------------*/

	/*-------------------- CARGAMOS IMAGENES, AUDIO Y MAPAS ------------------*/
	Q.load("tiles_map.png, player.png, enemigo.png, level1.tmx", function() {
		/* CREAMOS UNA HOJA DE MOSAICOS*/
		Q.sheet("mosaicos", "tiles_map.png", {
			tilew : 70, //ancho del mosaico
			tileh : 70 //altura del mosaico
		});

		/* Una vez listos todos los recursos, ejecutamos la escena nivel1 */
		Q.stageScene("nivel1");
	});
});
