// @file input: source.csv
// @file output: dataRaw.json

/**
 * @Cấu_trúc_file
 * 
 * @Header
 * STT,key,id,day,start,count,room,teacher,class,member,name,weight,week
 * @data
 * 1,AQ101,M01,5,6,2,404/TS,,TS2013T1,40,Tiếng Anh Nuôi trồng thủy sản 1,2,123456789012345*****
 * ...
 */

const fs = require('fs')
const csv = require('csv-parser')

const index = (path, end) => {

    return new Promise((resolve, reject) => {
        // khoi tao bien chua du lieu
        let rawCourses = []

        // doc file va lay du lieu
        fs.createReadStream(`./csv/${path}/source.csv`)
            .pipe(csv())
            .on('data', data => {
                try {
                    rawCourses.push(data)
                }
                catch (error) {
                    console.log(error)
                }
                fs.writeFileSync(`./json/${path}/rawData.json`, JSON.stringify(rawCourses))

                console.clear()
                console.log((Number(data.STT)/end)*100 + '%')

                if (Number(data.STT) === end) {
                    resolve(200)
                }
            })
    })

}

module.exports = index
