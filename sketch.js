function setup() {
  createCanvas(800, 800);

  var a = [11, 20, 33, 40, 2.3, 6, 7];
  a.push(70);
  a.push(90);
  a.push(110);
  a.pop(110);

  // for(var i = 0; i<=3; i=i+1){
  //   console.log(a[i])
  // }

  // for(var i = 0; i<=5; i=i+1){
  //   console.log(a[i])
  // }

  //   for(var i = 0; i<=5; i=i+1){
  //     if (a[i]>0){
  //       console.log(a[i])
  //     }
  //   }

  // for (var i = 0; i < a.length; i = i + 1) {
  //   if (a[i] % 2 == 1) {
  //     console.log(a[i]);
  //   }
  // }

  //  factors()
  //  cfactors()
  //  prime()
  pnumber()
}

function draw() {
  background("black");
}


// function factors() {
//   for(var i = 1; i<=100; i=i+1){
//     if(100 % i == 0){
//       console.log(i)
//     }
//   }
// }

// function cfactors() {
//   var count = 0
//   for(var i = 1; i <= 16; i=i+1){
//     if(16 % i == 0){
//       count = count + 1
//     }
//   }

//   console.log(count)
// }

function prime() {
  var count = 0 
  for(var i = 1; i<=15;i=i+1){
    if(15%i == 0){
      count = count + 1
    }
  }

  if(count == 2){
    console.log("Prime Number")
  }

  else{
    console.log("Not A Prime Number")
  }
}

function pnumber() {
  var sum = 0
  var a = 15
  for (var i = 1; i<a; i=i+1){
    if(a%i == 0){
      sum = sum + i 
    }
  }

  if(sum == a){
    console.log("Perfect Number")
  }
  else{
    console.log("Not A Perfect Number")
  }
}