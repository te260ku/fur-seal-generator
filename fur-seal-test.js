const standard_input = process.stdin;
standard_input.setEncoding('utf-8');

standard_input.on('data', function (data) {
    var r = generatePhrase(data)
    console.log("今からオットセイの真似します\n" + r);
    process.exit();
});

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