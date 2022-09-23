
function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes her
    if (depth % 5 == 0) {
        console.log(depth / 5);
    }
    else if (depth % 5 >= 3) {
        console.log(parseInt(depth / 5) + 1)
    }
    else {
        console.log(parseInt(depth / 5));
    }
}

