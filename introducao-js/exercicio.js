const author = "create table author (id number, name string, age number, city string, state string, country string)";
const regExp = /^create table (\w+) \((.+)\)$/;
const result = regExp.exec(author);
const tableName = result[1];
const columns = result[2].split(',');
console.log(`
TableName =  "${tableName}"
columns = [${columns}]
`);