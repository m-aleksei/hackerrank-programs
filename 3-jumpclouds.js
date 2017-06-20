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
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    var i; // счетчик
    var cr; // текущий номер облака
    var mincl; // мин. количество облаков
    
    if ((c[0] == 0) && (c[0] == c[c.length-1])) {
        switch(n) {
            case 2:
                process.stdout.write("1" + "\n"); 
                break;
            case 3:
                process.stdout.write("1" + "\n"); 
                break;
            case 4:
                process.stdout.write("2" + "\n"); 
                break;
            default:
                cr = n - 1;
                mincl = 0;
                while (cr > 0) {
                    if (c[cr - 2] == 1) {
                        cr = cr - 1;   
                    } else {
                        cr = cr - 2; 
                    }
                    mincl = mincl + 1;
                }
                process.stdout.write("" + mincl + "\n"); 
        }  
    }  
}
