function showData(data) {
    
    let table = d3.select("#data-table")

    table.selectAll("tr").remove()
    
    let headerRow = table.append("tr")

    headerRow.append("th").text("Date")
    headerRow.append("th").text("City")
    headerRow.append("th").text("State")
    headerRow.append("th").text("Country")
    headerRow.append("th").text("Shape")
    headerRow.append("th").text("Duration")
    headerRow.append("th").text("Comments")

    let tableBody = table.append("tbody")

    data.forEach((d) => {
        let row = tableBody.append("tr")
        row.append("td").text(d.datetime)
        row.append("td").text(d.city)
        row.append("td").text(d.state)
        row.append("td").text(d.country)
        row.append("td").text(d.shape)
        row.append("td").text(d.durationMinutes)
        row.append("td").text(d.comments)
    })
}

function handleDateClick() {
    let datetime = d3.select("#date-filter-input").property("value")
    let filteredData = data.filter((d) => d.datetime == datetime)

    showData(filteredData)
}

d3.select("#date-button").on("click", handleDateClick)


function handleStateClick() {
    let state = d3.select("#state-filter-input").property("value")
    let filteredData = data.filter((d) => d.state == state)
   
    showData(filteredData)
}

d3.select("#state-button").on("click", handleStateClick)

function handleCityClick() {
    let city = d3.select("#city-filter-input").property("value")
    let filteredData = data.filter((d) => d.city == city)

    showData(filteredData)
}

d3.select("#city-button").on("click", handleCityClick)



function handleCountryClick() {
    let country = d3.select("#country-filter-input").property("value")
    let filteredData = data.filter((d) => d.country == country)
   
    showData(filteredData)
}

d3.select("#country-button").on("click", handleCountryClick)

function handleShapeClick() {
    let shape = d3.select("#shape-filter-input").property("value")
    let filteredData = data.filter((d) => d.shape == shape)

    showData(filteredData)
}

d3.select("#shape-button").on("click", handleShapeClick)

function handleDurationClick() {
    let durationMinutes = d3.select("#duration-filter-input").property("value")
    let filteredData = data.filter((d) => d.durationMinutes == durationMinutes)

    showData(filteredData)
}

d3.select("#duration-button").on("click", handleDurationClick)
