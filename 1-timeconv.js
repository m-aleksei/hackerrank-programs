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

function timeConversion(s) {
    // перевод 12час. в 24 час. систему
    var hh; // часы 
    if (s[8] == "P") {
        if (Number(s.substr(0,2)) == 12) {
            s = s.substr(0,8);
        } else {
            hh = 12 + Number(s.substr(0,2));
            s = hh + s.substr(2,6);
        }
    }
    if (s[8] == "A") {
        if (Number(s.substr(0,2)) == 12) {
            s = "00" + s.substr(2,6);
        } else {
            s = s.substr(0,8);
        }
    }
    return s;
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
