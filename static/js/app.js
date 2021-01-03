const tableData = data
const tbody = d3.select('tbody')

function buildTable(data) {
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

const handleClick = () => {
    d3.event.preventDefault()

    const date = d3.select('#datetime').property('value')
    let filteredData = tableData;

    if (date)
        filteredData = filteredData.filter(row => row.datetime === date)
    
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

d3.selectAll('#filter-btn').on('click', handleClick)
// buildTable(tableData)



// function showData(data) {
    
//     let table = d3.select("#ufo-table")

//     table.selectAll("tr").remove()
    
//     let headerRow = table.append("tr")

//     headerRow.append("th").text("Date")
//     headerRow.append("th").text("City")
//     headerRow.append("th").text("State")
//     headerRow.append("th").text("Country")
//     headerRow.append("th").text("Shape")
//     headerRow.append("th").text("Duration")
//     headerRow.append("th").text("Comments")

//     let tableBody = table.append("tbody")

//     data.forEach((d) => {
//         let row = tableBody.append("tr")
//         row.append("td").text(d.Date)
//         row.append("td").text(d.City)
//         row.append("td").text(d.State)
//         row.append("td").text(d.Country)
//         row.append("td").text(d.Duration)
//         row.append("td").text(d.bloodType)
//         row.append("td").text(d.Comments)
//     })
// }

// // function showStats(data) {
// //     let ul = d3.select("#stats");

// //     ul.selectAll("li").remove()

// //     let ages = data.map((d) => d.age)

// //     ul.append("li").text(`Mean: ${math.mean(ages)}`)
// //     ul.append("li").text(`Median: ${math.median(ages)}`)
// //     ul.append("li").text(`Mode: ${math.mode(ages)}`)
// //     ul.append("li").text(`Variance: ${math.var(ages)}`)
// //     ul.append("li").text(`Standard Deviation: ${math.std(ages)}`)

// //     ul.selectAll("li").classed("list-group-item", true)

// // }

// function handleClick() {
//     let bloodType = d3.select("#date-filter-input").property("value")
//     console.log(date)
//     let filteredData = data.filter((d) => d.datetime === date)

    
//     showData(filteredData)
//     console.log(filteredData)
// }

// d3.select("#table-button").on("click", handleClick)