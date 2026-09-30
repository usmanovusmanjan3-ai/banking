// ========================================
// VELORA — ONLAYN BANKING
// ========================================


// ===============================
// GRAFIK
// ===============================

const chartCanvas =
    document.getElementById("financeChart");

const chartContext =
    chartCanvas.getContext("2d");


const goldGradient =
    chartContext.createLinearGradient(
        0,
        0,
        0,
        260
    );


goldGradient.addColorStop(
    0,
    "rgba(255, 210, 31, 0.28)"
);


goldGradient.addColorStop(
    1,
    "rgba(255, 210, 31, 0)"
);


const greenGradient =
    chartContext.createLinearGradient(
        0,
        0,
        0,
        260
    );


greenGradient.addColorStop(
    0,
    "rgba(92, 255, 154, 0.20)"
);


greenGradient.addColorStop(
    1,
    "rgba(92, 255, 154, 0)"
);


// ===============================
// GRAFIK MA'LUMOTLARI
// ===============================

const chartData = {

    labels: [
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentabr"
    ],

    datasets: [

        {
            label: "Daromad",

            data: [
                5400,
                6200,
                5800,
                7200,
                6800,
                8450
            ],

            borderColor: "#5cff9a",

            backgroundColor:
                greenGradient,

            fill: true,

            tension: 0.42,

            borderWidth: 2,

            pointRadius: 0,

            pointHoverRadius: 5
        },


        {
            label: "Xarajat",

            data: [
                2800,
                3100,
                2500,
                3600,
                2900,
                3284
            ],

            borderColor: "#ffd21f",

            backgroundColor:
                goldGradient,

            fill: true,

            tension: 0.42,

            borderWidth: 2,

            pointRadius: 0,

            pointHoverRadius: 5
        }

    ]

};


// ===============================
// CHART
// ===============================

const financeChart =
    new Chart(
        chartContext,
        {

            type: "line",

            data: chartData,

            options: {

                responsive: true,

                maintainAspectRatio: false,


                interaction: {

                    intersect: false,

                    mode: "index"

                },


                plugins: {

                    legend: {

                        display: true,

                        position: "top",

                        align: "end",


                        labels: {

                            color: "#7e857f",

                            boxWidth: 7,

                            boxHeight: 7,

                            usePointStyle: true,

                            pointStyle: "circle",

                            padding: 16,


                            font: {

                                size: 9,

                                family: "Inter"

                            }

                        }

                    },


                    tooltip: {

                        backgroundColor:
                            "#151915",

                        titleColor:
                            "#ffffff",

                        bodyColor:
                            "#aeb4af",

                        borderColor:
                            "rgba(255,255,255,0.08)",

                        borderWidth: 1,

                        padding: 12,

                        displayColors: true,


                        callbacks: {

                            label:
                                function(context) {

                                    return "  $" +
                                        context.parsed.y
                                        .toLocaleString();

                                }

                        }

                    }

                },


                scales: {

                    x: {

                        grid: {
                            display: false
                        },

                        border: {
                            display: false
                        },

                        ticks: {

                            color: "#626963",

                            font: {

                                size: 9,

                                family: "Inter"

                            }

                        }

                    },


                    y: {

                        beginAtZero: true,

                        border: {
                            display: false
                        },

                        grid: {

                            color:
                                "rgba(255,255,255,0.045)"

                        },

                        ticks: {

                            color: "#626963",

                            font: {

                                size: 9,

                                family: "Inter"

                            },


                            callback:
                                function(value) {

                                    return "$" +
                                        (
                                            value / 1000
                                        ) +
                                        "k";

                                }

                        }

                    }

                }

            }

        }
    );


// ===============================
// DAVRNI ALMASHTIRISH
// ===============================

const periodSelect =
    document.getElementById(
        "periodSelect"
    );


periodSelect.addEventListener(
    "change",
    function() {

        if (this.value === "12") {

            financeChart.data.labels = [

                "Okt",
                "Noy",
                "Dek",
                "Yan",
                "Fev",
                "Mar",
                "Apr",
                "May",
                "Iyun",
                "Iyul",
                "Avg",
                "Sen"

            ];


            financeChart.data.datasets[0].data = [

                4900,
                5200,
                5800,
                6100,
                5700,
                6400,
                5400,
                6200,
                5800,
                7200,
                6800,
                8450

            ];


            financeChart.data.datasets[1].data = [

                2600,
                2800,
                3200,
                3000,
                2700,
                3100,
                2800,
                3100,
                2500,
                3600,
                2900,
                3284

            ];

        }


        else {

            financeChart.data.labels = [

                "Aprel",
                "May",
                "Iyun",
                "Iyul",
                "Avgust",
                "Sentabr"

            ];


            financeChart.data.datasets[0].data = [

                5400,
                6200,
                5800,
                7200,
                6800,
                8450

            ];


            financeChart.data.datasets[1].data = [

                2800,
                3100,
                2500,
                3600,
                2900,
                3284

            ];

        }


        financeChart.update();

    }
);


// ===============================
// PUL O‘TKAZISH
// ===============================

const transferButton =
    document.getElementById(
        "transferBtn"
    );


const transferAmount =
    document.getElementById(
        "transferAmount"
    );


const toast =
    document.getElementById(
        "toast"
    );


transferButton.addEventListener(
    "click",
    function() {

        const amount =
            Number(
                transferAmount.value
            );


        if (!amount || amount <= 0) {

            transferAmount.focus();

            transferAmount.style.boxShadow =
                "0 0 0 1px #ff6b6b";


            setTimeout(
                function() {

                    transferAmount.style.boxShadow =
                        "";

                },
                1200
            );


            return;
        }


        toast.classList.add("show");

        transferAmount.value = "";


        setTimeout(
            function() {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

    }
);


// ===============================
// MENYU
// ===============================

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );


navItems.forEach(
    function(item) {

        item.addEventListener(
            "click",
            function(event) {

                event.preventDefault();


                navItems.forEach(
                    function(nav) {

                        nav.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );

            }
        );

    }
);


// ===============================
// BANK KARTA 3D EFFEKT
// ===============================

const bankCard =
    document.querySelector(
        ".bank-card"
    );


bankCard.addEventListener(
    "mousemove",
    function(event) {

        const rect =
            bankCard.getBoundingClientRect();


        const x =
            event.clientX -
            rect.left;


        const y =
            event.clientY -
            rect.top;


        const rotateX =
            ((y / rect.height) - 0.5)
            * -5;


        const rotateY =
            ((x / rect.width) - 0.5)
            * 5;


        bankCard.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    }
);


bankCard.addEventListener(
    "mouseleave",
    function() {

        bankCard.style.transform =
            "perspective(700px) rotateX(0) rotateY(0)";

    }
);


// ===============================
// QIDIRUV
// ===============================

const searchButton =
    document.querySelector(
        ".search-button"
    );


searchButton.addEventListener(
    "click",
    function() {

        alert(
            "VELORA qidiruv funksiyasi ishga tushirish uchun tayyor."
        );

    }
);