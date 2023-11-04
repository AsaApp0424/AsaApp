/*var ctx = document.getElementById("gragh");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
        datasets: [
            {
                label: 'Nikkei Stock Average',
                data: [35, 34, 37, 35, 34, 35, 34, 25],
                borderColor: "rgba(255,0,0,1)",
                backgroundColor: "rgba(0,0,0,0)"
            },
            {
                label: 'American average stock price',
                data: [25, 27, 27, 25, 26, 27, 25, 21],
                borderColor: "rgba(0,0,255,1)",
                backgroundColor: "rgba(0,0,0,0)"
            }
        ],
    },
    options: {
        title: {
            display: true,
            text: 'Stock Aug 1st ~ 7'
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 40,
                    suggestedMin: 0,
                    stepSize: 10,
                    callback: function(value, index, values){
                    return  value +  '度'
                    }
                }
            }]
        },
    }
});*/




import yahooFinance from 'yahoo-finance2';

export const get = async() => {
    try{
        const data = await yahooFinance.quote('AAPL');
        return data;
    } catch(e){
        return e;
    }
};

const app = express();

const port = 3000;
const server = app.listen(port, () => {
    console.log("listening to PORT:" + server.address().port);
});

