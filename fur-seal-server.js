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
        // dataは自然数
        var r = generatePhrase(data)
        socket.write( `今からオットセイの真似します\n "${r}" `);
	    socket.destroy()
    });

    socket.on('close',function(){
        console.log(`${socket.remoteAddress}:${socket.remotePort} The client closed the connection`);
    });

    socket.on('error',function(error){
        console.error(`${socket.remoteAddress}:${socket.remotePort} Connection Error ${error}`);
    });
};


function generatePhrase(len) {
    var c = [
        "パンッパァンッパァンッ(ヒレを叩く音)", 
        "おう", 
        "おうおう", 
        "おうっ", 
        "おうおうっ", 
        "ｗｗｗ"
    ];

    var c_len = c.length;
    var res = "";
    for(var i=0; i<len; i++){
        res += c[Math.floor(Math.random()*c_len)];
    }
    return res;
}

