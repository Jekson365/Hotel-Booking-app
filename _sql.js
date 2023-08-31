import { createPool } from 'mysql'

export const pool = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Jekojeko123",
    connectionLimit: 10
})