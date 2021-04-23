const net = require('net');

const myhost = '127.0.0.1';
const myport = 29172;

//Create an instance of the server
const server = net.createServer(onClientConnection);

//Start listening with the server on given port and host.
server.listen(myport, myhost, function(){
   console.log(`Server started: IP address=${myhost} port number=${myport}`);
});

//Declare connection listener function
function onClientConnection(socket){
    //Log when a client connnects.
    console.log(`${socket.remoteAddress}:${socket.remotePort} Accepted a connec tion from a client`);

    socket.on('data', function(data){
        console.log(`${socket.remoteAddress}:${socket.remotePort} Received: ${data} `);
        // クライアントに送り返す
        socket.write(`Echo "${data}"`);
	    socket.destroy()
    });

    socket.on('close',function(){
        console.log(`${socket.remoteAddress}:${socket.remotePort} The client closed the connection`);
    });

    socket.on('error',function(error){
        console.error(`${socket.remoteAddress}:${socket.remotePort} Connection Error ${error}`);
    });

};

