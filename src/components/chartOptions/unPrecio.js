export const options = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: ''
    },

    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45,
            colors : ['#b5aeae']
        }
    },
    series: [{
        name: 'Price(€)',
        data: [
            ['0-23h', 0.123]
        ]
    }],

    credits: {
        enabled: false
    },
}