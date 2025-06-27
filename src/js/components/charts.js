import {
    createChart,
    CrosshairMode
} from 'lightweight-charts';

export function initChart(containerId = 'candle-chart') {
    const chartContainer = document.getElementById(containerId);

    if (!chartContainer) return;

    const chart = createChart(chartContainer, {
        layout: {
            background: {
                color: '#0a0a0a'
            },
            textColor: '#999999',
        },
        grid: {
            vertLines: {
                color: '#1f1f1f'
            },
            horzLines: {
                color: '#1f1f1f'
            },
        },
        width: chartContainer.clientWidth,
        height: 460,
        crosshair: {
            mode: CrosshairMode.Normal
        },
        rightPriceScale: {
            borderColor: '#1f1f1f'
        },
        timeScale: {
            borderColor: '#1f1f1f',
            timeVisible: true
        },
    });

    const candleSeries = chart.addCandlestickSeries({
        upColor: '#0fedbe',
        downColor: '#f63c6b',
        wickUpColor: '#0fedbe',
        wickDownColor: '#f63c6b',
    });

    candleSeries.setData([{
            time: '2023-01-04',
            open: 408,
            high: 417,
            low: 400,
            close: 403
        },
        {
            time: '2023-01-05',
            open: 401,
            high: 411,
            low: 396,
            close: 410
        },
        {
            time: '2023-01-06',
            open: 412,
            high: 423,
            low: 401,
            close: 414
        },
        {
            time: '2023-01-07',
            open: 417,
            high: 422,
            low: 410,
            close: 418
        },
        {
            time: '2023-01-08',
            open: 418,
            high: 430,
            low: 406,
            close: 412
        },
        {
            time: '2023-01-09',
            open: 411,
            high: 417,
            low: 402,
            close: 416
        },
        {
            time: '2023-01-10',
            open: 418,
            high: 429,
            low: 407,
            close: 409
        },
        {
            time: '2023-01-11',
            open: 412,
            high: 426,
            low: 403,
            close: 419
        },
        {
            time: '2023-01-12',
            open: 418,
            high: 423,
            low: 406,
            close: 406
        },
        {
            time: '2023-01-13',
            open: 409,
            high: 419,
            low: 399,
            close: 412
        },
        {
            time: '2023-01-14',
            open: 413,
            high: 419,
            low: 402,
            close: 410
        },
        {
            time: '2023-01-15',
            open: 410,
            high: 418,
            low: 405,
            close: 415
        },
        {
            time: '2023-01-16',
            open: 415,
            high: 424,
            low: 410,
            close: 420
        },
        {
            time: '2023-01-17',
            open: 421,
            high: 430,
            low: 417,
            close: 425
        },
        {
            time: '2023-01-18',
            open: 426,
            high: 432,
            low: 418,
            close: 421
        },
        {
            time: '2023-01-19',
            open: 420,
            high: 428,
            low: 414,
            close: 415
        },
        {
            time: '2023-01-20',
            open: 416,
            high: 423,
            low: 412,
            close: 418
        },
        {
            time: '2023-01-21',
            open: 418,
            high: 429,
            low: 416,
            close: 427
        },
        {
            time: '2023-01-22',
            open: 428,
            high: 437,
            low: 421,
            close: 435
        },
        {
            time: '2023-01-23',
            open: 436,
            high: 440,
            low: 428,
            close: 432
        },
        {
            time: '2023-01-24',
            open: 431,
            high: 436,
            low: 425,
            close: 426
        },
        {
            time: '2023-01-25',
            open: 427,
            high: 434,
            low: 420,
            close: 422
        },
        {
            time: '2023-01-26',
            open: 423,
            high: 429,
            low: 418,
            close: 419
        },
        {
            time: '2023-01-27',
            open: 420,
            high: 427,
            low: 416,
            close: 424
        },
        {
            time: '2023-01-28',
            open: 425,
            high: 432,
            low: 419,
            close: 430
        }
    ]);

    window.addEventListener('resize', () => {
        chart.resize(chartContainer.clientWidth, 460);
    });
}