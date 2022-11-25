function myRnd(min, max) {
  let randomNumber = min + Math.random() * (max - min);
  return Math.floor(randomNumber);
}
document.getElementById("generate").onclick = function () {
  let list = document.getElementById("list").value;
  let arrList = list.split("\n");
  arrList = arrList.map(function (n) {
    return n.trim();
  });
  let result = document.getElementById("result");
  let rnd = myRnd(0, arrList.length);
  result.value = arrList[rnd];
};
