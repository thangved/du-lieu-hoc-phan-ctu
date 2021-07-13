// @file input: source.csv
// @file output: dataRaw.json

const fs = require('fs')
const csv = require('csv-parser')

const index = (path) => {

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
            fs.writeFile(`./json/${path}/rawData.json`,
                JSON.stringify(rawCourses), 'utf-8',
                (error) => {
                    if (error) {
                        console.log(error)
                    }
                })
        })
}

module.exports = index
