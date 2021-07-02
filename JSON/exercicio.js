const author = "create table author (id number, name string, age number, city string, state string, country string)";
const regExp = /^create table (\w+) \((.+)\)$/;

const result = regExp.exec(author);
const tableName = result[1];
const columns = result[2].split(',');

const database = {
    tables: {
        [tableName]: {
            columns: {}
        }
    }
};

for (let key in columns) {
     const column = columns[key].trim().split(' ')[0];
     const value = columns[key].trim().split(' ')[1];
     database.tables[tableName].columns[column] = value;  
}

database.tables[tableName].columns.data = [];

const objectData = JSON.stringify(database, null, ' ');
console.log(objectData);
