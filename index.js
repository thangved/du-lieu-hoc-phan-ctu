const CSVtoJSON = require('./js/csvToJSON')
const getFinalData = require('./js/getFinalData')
const getSimpleData = require('./js/getSimpleData')

function index(path) {

    CSVtoJSON(path)

    setTimeout(() => {

        getSimpleData(path)
        getFinalData(path)
        
    }, 60000)

}

index('20212022/HK2')
