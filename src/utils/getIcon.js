export default function getIcon(code) {
    if (code >= 200 && code <= 202) {
        return 'https://www.weatherbit.io/static/img/icons/t01d.png'
    } else if (code >= 230 && code <= 233) {
        return 'https://www.weatherbit.io/static/img/icons/t04d.png'
    } else if (code >= 300 && code <= 302) {
        return 'https://www.weatherbit.io/static/img/icons/d01d.png'
    } else if ((code >= 500 && code <= 501) || (code >= 511 && code <= 520) || code == 522 || code == 900) {
        return 'https://www.weatherbit.io/static/img/icons/r01d.png'
    } else if (code == 502) {
        return 'https://www.weatherbit.io/static/img/icons/r03d.png'
    } else if (code == 521) {
        return 'https://www.weatherbit.io/static/img/icons/r05d.png'
    } else if (code == 600 || code == 610 || code == 621) {
        return 'https://www.weatherbit.io/static/img/icons/s01d.png'
    } else if (code == 601 || code == 602 || code == 622) {
        return 'https://www.weatherbit.io/static/img/icons/s02d.png'
    } else if (code >= 700 && code <= 751) {
        return 'https://www.weatherbit.io/static/img/icons/a02d.png'
    } else if (code == 800) {
        return 'https://www.weatherbit.io/static/img/icons/c01d.png'
    } else if (code == 801 || code == 802) {
        return 'https://www.weatherbit.io/static/img/icons/c02d.png'
    } else if (code == 803) {
        return 'https://www.weatherbit.io/static/img/icons/c03d.png'
    } else if (code == 804) {
        return 'https://www.weatherbit.io/static/img/icons/c04d.png'
    } else {
        return 'data:image/png;base64,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'
    }
}

