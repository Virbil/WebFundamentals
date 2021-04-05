for(var num = 0; num < 15; num++){
    console.log("Num: " + num);
}

// output: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14


for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log("i: " + i);
    }
}

// output: 3,9


for(var j = 1; j <= 15; j++){
    // console.log("at beginning of loop. j: " + j)
    if(j % 2 == 0){
        j+=2;
        // console.log("inside if. j: " + j);
    }
    else if(j % 3 == 0){
        j++;
        // console.log("inside elseif. j: " + j);
    }
    console.log(j);
}


// output: 1,4,5,8,10,11,14,16