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

index('20212022/HK1', 6093)
