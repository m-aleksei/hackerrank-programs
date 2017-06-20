process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var s = readLine();
    var n = parseInt(readLine());
    var i; // счетчик
    var k = 0; // количество символов а
    var div; // целое от деления
    var mod; // остаток от деления
    
    if (n > 1) {
        switch(s.length) {
            case 0:
                process.stdout.write("0" + "\n");  
                break;
            case 1:
                if (s[0] == "a"){
                    process.stdout.write("" + n + "\n");
                } else {
                    process.stdout.write("0" + "\n");
                }
                break; 
            case n:
                
                break; 
            default:
                if (n < s.length) {
                    for (i = 0; i < n; i++) { // в отдельную функцию
                        if (s[i] == "a") {
                            k = k + 1;
                        }   
                    }
                    process.stdout.write("" + k + "\n");    
                } else {
                    for (i = 0; i <= s.length; i++) {
                        if (s[i] == "a") {
                            k = k + 1;
                        }   
                    }
                    div = Math.trunc(n / s.length);
                    k = k * div;
                    mod = n % s.length;
                    for (i = 0; i < mod; i++) {
                        if (s[i] == "a") {
                            k = k + 1;
                        }   
                    }
                    process.stdout.write("" + k + "\n");
                }
                break;
        }
    } else {
        if (n == 1) {
            if (s[0] == "a"){
                process.stdout.write("1" + "\n");
            } else {
                process.stdout.write("0" + "\n");
            }
        }
        if (n <= 0) {
            process.stdout.write("0" + "\n");    
        }
    }
        
    return;
}
