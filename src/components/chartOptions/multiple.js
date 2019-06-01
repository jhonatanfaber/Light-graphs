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
            colors : ['#287113', '#f3a421', '#d41212', '#f5f913', '#95ff5f']
        }
    },
    series: [{
        name: 'Price(€)',
        data: [
            ['0-7h', 0.055],
            ['8-12h', 0.082],
            ['13-16h', 0.190],
            ['17-20h', 0.078],
            ['21-23h', 0.045]
        ]
    }],

    credits: {
        enabled: false
    },
}