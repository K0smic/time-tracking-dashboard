window.onload = function () {
  const perf = performance.now();

  var day = document.getElementById("daily");
  var week = document.getElementById("weekly");
  var month = document.getElementById("monthly");

  function changeTime(timeframe) {
    const funCount = performance.now();
    if (document.querySelector(".active") && !timeframe.className) {
      document.querySelector(".active").classList.remove("active");
      // console.log("There is an active class, and it's not me!");
    }

    if (!timeframe.className) {
      timeframe.classList.add("active");
      // console.log("I don't have a class, now i have");
    }
    // console.log("No more if");
    const funCount1 = performance.now();
    console.log(`ChangeTime took ${funCount1 - funCount} milliseconds.`);
    getData(timeframe.id);
  }

  function getData(timeframe) {
    const funCount = performance.now();
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        Object.keys(data).forEach(function (key) {
          const title = data[key].title.replace(/ /g, "-");
          const currentHrs = document.querySelector("." + title + "__stats > .stats__time > .stats__time__hrs");
          const pastHrs = document.querySelector("." + title + "__stats > .stats__time > span > .stats__time__past");

          currentHrs.innerHTML = data[key]["timeframes"][timeframe]["current"] + "hrs";
          // currentHrs.dateTime = data[key]["timeframes"][timeframe]["current"] + ":00";
          pastHrs.innerHTML = data[key]["timeframes"][timeframe]["previous"] + "hrs";
          // pastHrs.dateTime = data[key]["timeframes"][timeframe]["previous"] + ":00";
        });
      });
    const funCount1 = performance.now();
    console.log(`getData took ${funCount1 - funCount} milliseconds.`);
  }

  changeTime(week);

  day.onclick = function () {
    changeTime(day);
  };
  week.onclick = function () {
    changeTime(week);
  };
  month.onclick = function () {
    changeTime(month);
  };

  const perf1 = performance.now();
  console.log(`Process took ${perf1 - perf} milliseconds.`);
};
