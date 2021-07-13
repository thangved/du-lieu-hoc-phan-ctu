// @file input: rawData.json
// @file output: finalData.json

const fs = require('fs')

const index = (path) => {
    fs.readFile(`./json/${path}/rawData.json`, 'utf-8', (err, data) => {
        if (!err) {
            let result = []
            JSON.parse(data).forEach((item, i) => {

                if (result.length == 0 ||
                    !(
                        item.key === result[result.length - 1].key
                        && item.id === result[result.length - 1].id
                    )
                ) {
                    item.time = []
                    item.time.push({
                        day: item.day,
                        start: item.start,
                        count: item.count,
                        room: item.room
                    })

                    // xoa data thua
                    delete item.day
                    delete item.start
                    delete item.room
                    delete item.STT
                    delete item.count

                    result.push(item)
                }
                else {
                    result[result.length - 1].time.push({
                        day: item.day,
                        start: item.start,
                        count: item.count,
                        room: item.room
                    })
                }
            })

            fs.writeFile(`./json/${path}/finalData.json`, JSON.stringify(result), (err) => {
                if (err) {
                    console.log(err)
                }
            })
        }
    })
}

module.exports = index
