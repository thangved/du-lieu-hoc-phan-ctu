// @file input: rawData.json
// @file output: simpleData.json

const fs = require('fs')

const index = (path) => {
    fs.readFile(`./json/${path}/rawData.json`, 'utf-8', (err, data) => {
        if (!err) {

            // bien luu key khoa hoc
            let courses = []

            // bien luu key va ten khoa hoc
            let Courses = []

            JSON.parse(data).forEach(item => {

                // kiem tra xem key ton tai chua
                if (courses.indexOf(item.key) == -1) {

                    // push du lieu
                    courses.push(item.key)
                    Courses.push({
                        name: item.name,
                        key: item.key,
                        weight: item.weight,
                    })
                }
            })

            // ghi du lieu vao file
            fs.writeFile(`./json/${path}/simpleData.json`, JSON.stringify(Courses), 'utf-8', (err) => {
                if (err) {
                    console.log(err)
                }
            })
        }

    })
}

module.exports = index
