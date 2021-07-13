const fs = require('fs')

fs.readFile('./Courses.json', 'utf-8', (err, data) => {
    if (!err) {
        let result = []
        JSON.parse(data).forEach((item, i) => {
            temp = item

            if (result.length == 0) {
                temp.time = []
                temp.time.push({
                    day: temp.day,
                    start: temp.start,
                    count: temp.count,
                    room: temp.room
                })

                // xoa data thua
                delete temp.day
                delete temp.start
                delete temp.room
                delete temp.STT
                delete temp.count

                result.push(temp)
            }
            else {
                if (temp.key === result[result.length - 1].key && temp.id === result[result.length - 1].id) {
                    result[result.length - 1].time.push({
                        day: temp.day,
                        start: temp.start,
                        count: temp.count,
                        room: temp.room
                    })
                }
                else {
                    temp.time = []
                    temp.time.push({
                        day: temp.day,
                        start: temp.start,
                        count: temp.count,
                        room: temp.room
                    })

                    // xoa data thua
                    delete temp.day
                    delete temp.start
                    delete temp.room
                    delete temp.STT
                    delete temp.count

                    result.push(temp)
                }
            }
        })

        fs.writeFile('./finalData.json', JSON.stringify(result), (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
})
