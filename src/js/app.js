
async function fetchDataAndRenderChart() {
    try {
        const response = await fetch("../../data/data.json");
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const jsonData = await response.json();
        const languageList = document.getElementById("languageList");
        const languageNames = [];
        const languagePercentages = [];
        let num = 1;

        jsonData.forEach((data) => {
            const listdata = document.createElement("li");
            listdata.classList.add("p-2", "mb-2", "text-3xl", "text-black", "tracking-2px", "max-md:text-xl");
            listdata.textContent = `${num++})  ${data.language} / ${data.percentage}%`;
            languageList.appendChild(listdata);

            languageNames.push(data.language);
            languagePercentages.push(data.percentage);
        });

        renderChart(languageNames, languagePercentages, "bar");
        setupButtonListeners(languageNames, languagePercentages);
    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
let myChart = null;

function renderChart(labels, dataValues,chartType) {
    const ctx = document.getElementById("myChart").getContext('2d');;
    if (myChart) {
        myChart.destroy(); 
    }

    myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: "Porcentaje de uso",
                data: dataValues,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

function setupButtonListeners(languageNames, languagePercentages) {
    
        const buttons = document.querySelectorAll('button');

        let defaultGraphic="bar"
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                let chartType = this.getAttribute('data-type');
                renderChart(languageNames,languagePercentages,chartType)
            });
        });
    
}

document.addEventListener("DOMContentLoaded", fetchDataAndRenderChart);

