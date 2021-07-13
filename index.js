const fs = require('fs')
const csv = require('csv-parser')

let rawCourses = []

fs.createReadStream('./DANHSACHHOCPHANMOHK1_2021_2022 - Sheet1.csv')
    .pipe(csv())
    .on('data', data => {
        try {
            rawCourses.push(data)
        }
        catch {

        }
        let courses = []
        let Courses = []

        rawCourses.forEach(item => {
            Courses.push(item)
        })
        fs.writeFile('./Courses.json', JSON.stringify(Courses), 'utf-8', (error) => {
            if (error) {
                console.log(error)
            }
        })
    })



