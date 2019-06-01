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
            colors : ['#95ff5f', '#287113',]
        }
    },
    series: [{
        name: 'Price(€)',
        data: [
            ['0-13h', 0.079],
            ['14-23h', 0.155]
        ]
    }],

    credits: {
        enabled: false
    },
}