const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from errors where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    // 返回 promise
    return exec(sql)
}

const newError = (data = {}) => {
    const createTime = Date.now()
    const client = data.client
    const errorContent = data.errorContent
    const sql = `
        insert into errors (createTime, client, errorContent)
        values (${createTime}, '${client}', '${errorContent}');
    `
    return exec(sql).then(insertData => {
        // console.log('insertData is ', insertData)
        return {
            id: insertData.insertId
        }
    })
}

module.exports = {
    getList,
    newError
}