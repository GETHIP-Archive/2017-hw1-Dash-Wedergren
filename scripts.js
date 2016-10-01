function problemOne() {
  //Get all the numbers from the form.
  var all = [];
  var total = 0;
  for(i=0;i<6;i++){
    all[i] = parseFloat($('#num'+(i+1)).val());
  }
  let min = findMin(all[0],all[1],all[2],all[3],all[4],all[5]);
  for(i=0;i<6;i++){
    if(all[i] == min){
      all.splice(i, 1);
    }
  }
  all.forEach(function(current){
    total += current;
  });
  console.log(total/5);
}

function problemTwo() {
  //Get all the letter grades from the form.
  var grades = [];
  for(i=0;i<6;i++){
    grades[i] = $('#grade'+(i+1)).val();
  }
  var gpa = findGPA(grades);
  console.log("GPA: " + gpa);

  if(gpa > 3){
    document.getElementById("box").style.backgroundColor = "green";
  }else{
    document.getElementById("box").style.backgroundColor = "red";
  }
}

function findMin(num1, num2, num3, num4, num5, num6) {
  let list = [num1, num2, num3, num4, num5, num6];
  let minimum = 0;

  for (let i = 1; i < 6; i++) {
    if(list[i] < list[minimum]) {
      minimum = i;
    }
  }

  return list[minimum];
}

function findGPA(grades) {
  let list = grades;

  let sum = 0;

  for(let i = 0; i < 6; i++) {
    if(list[i] == 'a' || list[i] == 'A') {
      sum += 4;
    }
    else if(list[i] == 'b' || list[i] == 'B') {
      sum += 3;
    }
    else if(list[i] == 'c' || list[i] == 'C') {
      sum += 2;
    }
    else if(list[i] == 'd' || list[i] == 'D') {
      sum += 1;
    }
  }

  return sum / 6;
}
