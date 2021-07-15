const CSVtoJSON = require('./js/csvToJSON')
const getFinalData = require('./js/getFinalData')
const getSimpleData = require('./js/getSimpleData')

// @path: duong dan den file csv (./csv/${path}/source.csv)
// @end: STT cuoi cung
function index(path, end) {

    CSVtoJSON(path, end)
        .then(status => {
            console.log(status)

            getSimpleData(path)
            getFinalData(path)
        })

}


// index('20202021/HK1', 6123)
// index('20202021/HK2', 6134)
index('20202021/HK3', 1811)
