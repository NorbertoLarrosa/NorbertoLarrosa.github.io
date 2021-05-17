/*
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res)
{
  res.sendFile(__dirname + '/index.html');
});
/*
io.on('connection', function(socket)
{
	//Enviamos el mensaje con el nombre del emisor concatenado al princpio del mensaje
	socket.nombre = "";
	socket.on('chat message', function(msg)
	{
		if(socket.nombre != "")
			if(msg != "")
    			io.emit('chat message', socket.nombre+": "+msg);
    });
    
    //Al cerrar la ventana automaticamente el servidor se desconectara y avisa a los aun presentes en la sala de su ausencia.
	
	socket.on('disconnect', function(msg)
	{
		if(socket.nombre != "")
    		io.emit('chat message',socket.nombre+ " se ha desconectado");
	});
	
	//Seteamos el nombre del usuario

	socket.on("unirse", function(name)
	{
		socket.nombre = name;
	});

	// indicamos a todos los usuarios conectados que el nuevo usuario entro en la sala
	// para comunicarse

	socket.on("aparecer", function(name)
	{
		io.emit('chat message',socket.nombre+ " ha ingresado a la sala");
	});
});

//El servidor funcionara en el puerto 3000 pero podria cambiarse a cualquiera que se desee.

http.listen(3000, function()
{
  console.log('Funcionando en el puerto 3000');
});
*/
var express = require ('express');
var https = require('https');
var fs = require('fs');

var menu = require('express')();
var instrucciones = require('express')();
var AcercaDe = require('express')();

var app = require('express')();
var app2 = require('express')();
var app3 = require('express')();

var http = require('http').Server(app);

menu.use(express.static(__dirname + '/imagenes'));
menu.use(express.static(__dirname + '/styles'));

instrucciones.use(express.static(__dirname + '/imagenes'));
AcercaDe.use(express.static(__dirname + '/imagenes'));

app.use(express.static(__dirname + '/Objetos'));
app.use(express.static(__dirname + '/marcadores'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/imagenes'));
app.use(express.static(__dirname + '/videos'));

app2.use(express.static(__dirname + '/Objetos'));
app2.use(express.static(__dirname + '/marcadores'));
app2.use(express.static(__dirname + '/js'));
app2.use(express.static(__dirname + '/imagenes'));
app2.use(express.static(__dirname + '/videos'));

app3.use(express.static(__dirname + '/Objetos'));
app3.use(express.static(__dirname + '/marcadores'));
app3.use(express.static(__dirname + '/js'));
app3.use(express.static(__dirname + '/imagenes'));
app3.use(express.static(__dirname + '/videos'));

menu.get('/', function(req, res)
{
  res.sendFile(__dirname + '/menu.html');
});

instrucciones.get('/', function(req, res)
{
  res.sendFile(__dirname + '/instrucciones.html');
});

AcercaDe.get('/', function(req, res)
{
  res.sendFile(__dirname + '/AcercaDe.html');
});

app.get('/', function(req, res)
{
  res.sendFile(__dirname + '/index.html');
});
app2.get('/', function(req, res)
{
  res.sendFile(__dirname + '/kultrum.html');
});
app3.get('/', function(req, res)
{
  res.sendFile(__dirname + '/vasija.html');
});

var options = {
  key: fs.readFileSync('privatekey.pem'),
  cert: fs.readFileSync('certificate.pem')
};

https.createServer(options, menu).listen(5000);
https.createServer(options, instrucciones).listen(5100);
https.createServer(options, AcercaDe).listen(5200);

https.createServer(options, app).listen(8000);
https.createServer(options, app2).listen(3000);
https.createServer(options, app3).listen(3100);

	console.log('Aplicación funcionando en el puerto 5000');