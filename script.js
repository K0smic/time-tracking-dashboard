// const perf = performance.now();

document.getElementById("Daily").onclick = changeTime
document.getElementById("Weekly").onclick = changeTime
document.getElementById("Monthly").onclick = changeTime

function changeTime() {
  document.querySelector(".active").classList.remove("active");
  this.classList.add("active");
  console.log(this)
}

// const perf1 = performance.now();
// console.log(`Process took ${perf1 - perf} milliseconds.`);

//  async function getData(url) {
//   const response = await fetch(url);
//   return response.json()
// }

// const data = getData('./data.json');
// console.log(data)

// var obj;

// fetch('./data.json')
//   .then(res => res.json())
//   .then(data => obj = data)
//   .then(() => console.log(obj))

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {

//     Object.keys(data).forEach(function (key) {
//       // console.log(key, data[key]);
//       // console.log(data[key])
//       const title = data[key].title.replace(/ /g, "-");
//       document.querySelector("." + title + "__stats > .stats__category > ul > .stats__category__title > h3 > strong").innerHTML = data[key].title;
//     });
//   });
