var grades = {'COVID-19': 100, 'SARS':  50, 'World War II': 200}; // Dictionary

console.log(grades['COVID-19']); // 100
console.log(grades['SARS']); // 50
console.log(grades['World War II']); // 200

for (key in grades) {
    document.write(key + ': ' + grades[key] + "<br />");
}
document.write("<br />");

document.write("Check the console")

