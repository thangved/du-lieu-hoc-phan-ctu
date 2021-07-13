const fs = require('fs')

fs.readFile('./Courses.json', 'utf-8', (err, data) => {
    if (!err) {
        let courses = []
        let Courses = []
        JSON.parse(data).forEach(item => {
            if (courses.indexOf(item.key) == -1) {
                courses.push(item.key)
                Courses.push({
                    name: item.name,
                    key: item.key
                })
            }
        })
        console.log(Courses)

        fs.writeFile('./simpleData.json', JSON.stringify(Courses), 'utf-8', (err) => {
            if (err) {
                console.log(err)
            }
        })
    }


})


