var percentage = 50;
document.getElementById("num1").textContent = percentage + "%";
document.querySelector(".b1").style.width = (percentage / 100) * 80 + "%";
// console.log(num1);
var age = 75;
document.getElementById("num2").textContent = age;
document.querySelector(".b2").style.width = (age / 100) * 80 + "%";

var pieValue1 = 55;
document.querySelector(".doughnut1").setAttribute("data-value", pieValue1);
document.querySelector(".test1").setAttribute("value", pieValue1);
document.querySelector(".test1").style.background = `conic-gradient(#22d6aa ${pieValue1}%, lightgrey 0)`;
var pieValue2 = 80;
document.querySelector(".doughnut2").setAttribute("data-value", pieValue2);
document.querySelector(".test2").setAttribute("value", pieValue2);
document.querySelector(".test2").style.background = `conic-gradient(#22d6aa ${pieValue2}%, lightgrey 0)`;
var pieValue3 = 20;
document.querySelector(".doughnut3").setAttribute("data-value", pieValue3);
document.querySelector(".test3").setAttribute("value", pieValue3);
document.querySelector(".test3").style.background = `conic-gradient(#22d6aa ${pieValue3}%, lightgrey 0)`;

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

// const labels = Utils.months({count: 7});
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["20", "25", "30", "35", "40", "50", "55", "60", "65", "70", "75", "80"],
        datasets: [
            {
                label: 'Employer',
                data: [10, 15, 21, 25, 30, 34, 40, 45, 51, 56, 61, 66],
                backgroundColor: "#0800a3",
            },
            {
                label: 'Employee',
                data: [15, 22, 26, 30, 35, 40, 44, 50, 55, 61, 65, 70],
                backgroundColor: "#4935ff",
            },
            {
                label: 'Total Interest',
                data: [25, 37, 47, 55, 65, 74, 84, 95, 106, 117, 126, 136],
                backgroundColor: "#85afff",
            },
        ]
    },
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});
// document.getElementById("myChart").style.width=;
document.getElementById("myChart").style.height = "170px";
