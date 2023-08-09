// on window load
window.onload = function () {
  // get input value for januaryIncome
  var { februaryIncome, marchIncome, aprilIncome, mayIncome, juneIncome } =
    getIncome();

  //   get input value for januaryExpense
  var {
    januaryExpenses,
    februaryExpenses,
    marchExpenses,
    aprilExpenses,
    mayExpenses,
    juneExpenses,
  } = getExpenses();

  // create chart js bar chart for id myChart
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Income",
          data: getIncome(),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: getExpenses(),
          backgroundColor: [
            "rgb(54, 162, 235)",
            "rgb(54, 162, 235)",
            "rgb(54, 162, 235)",
            "rgb(54, 162, 235)",
            "rgb(54, 162, 235)",
            "rgb(54, 162, 235)",
          ],
          borderColor: [
            "rgb(54, 162, 235)",
            "rgb(54, 162, 235)",
            "rgb(54, 162, 235)",
            "rgb(54, 162, 235)",
            "rgb(54, 162, 235)",
            "rgb(54, 162, 235)",
          ],
          borderWidth: 1,
        },
      ],
    },
  });

  //   click handler for chartTab
  document.getElementById("chartTab").addEventListener("click", function () {
    // update chart
    myChart.data.datasets[0].data = getIncome();
    myChart.data.datasets[1].data = getExpenses();
    myChart.update();
  });

  //   handler to download chart as png
  document.getElementById("download").addEventListener("click", function () {
    var downloadChart = document.getElementById("myChart");
    var image = downloadChart.toDataURL("image/png", 1.0);
    var link = document.createElement("a");
    link.download = "myChart.png";
    link.href = image;
    link.click();
  });
};
function getExpenses() {
  var januaryExpenses = document.getElementById("januaryExpenses").value;
  //   get input value for februaryExpense
  var februaryExpenses = document.getElementById("februaryExpenses").value;
  //   get input value for marchExpense
  var marchExpenses = document.getElementById("marchExpenses").value;
  //   get input value for aprilExpense
  var aprilExpenses = document.getElementById("aprilExpenses").value;
  //   get input value for mayExpense
  var mayExpenses = document.getElementById("mayExpenses").value;
  //   get input value for juneExpense
  var juneExpenses = document.getElementById("juneExpenses").value;
  return [
    januaryExpenses,
    februaryExpenses,
    marchExpenses,
    aprilExpenses,
    mayExpenses,
    juneExpenses,
  ];
}

function getIncome() {
  var januaryIncome = document.getElementById("januaryIncome").value;
  // get input value for februaryIncome
  var februaryIncome = document.getElementById("februaryIncome").value;
  // get input value for marchIncome
  var marchIncome = document.getElementById("marchIncome").value;
  // get input value for aprilIncome
  var aprilIncome = document.getElementById("aprilIncome").value;
  // get input value for mayIncome
  var mayIncome = document.getElementById("mayIncome").value;
  // get input value for juneIncome
  var juneIncome = document.getElementById("juneIncome").value;
  return [
    januaryIncome,
    februaryIncome,
    marchIncome,
    aprilIncome,
    mayIncome,
    juneIncome,
  ];
}
