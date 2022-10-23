import {Pool} from 'pg'
 
import {variable} from '../variables'


export const pool = new Pool({
    user: variable.user ,
    host: variable.host,
    password: variable.password,
    database: variable.database,
    port: variable.port
})
