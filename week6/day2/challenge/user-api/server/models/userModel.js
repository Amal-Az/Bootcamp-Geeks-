const pool = require('../config/db');
const bcrypt = require('bcrypt');

const registerUser = async (userData) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const { email, username, first_name, last_name, password } = userData;

        const userInsert = `
            INSERT INTO users (email, username, first_name, last_name)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `;
        const userRes = await client.query(userInsert, [email, username, first_name, last_name]);

        const hashedPwd = await bcrypt.hash(password, 10);

        const pwdInsert = `
            INSERT INTO hashpwd (username, password)
            VALUES ($1, $2)
        `;
        await client.query(pwdInsert, [username, hashedPwd]);

        await client.query('COMMIT');
        return userRes.rows[0];
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};

const getUserByUsername = async (username) => {
    const res = await pool.query('SELECT * FROM hashpwd WHERE username = $1', [username]);
    return res.rows[0];
};

const getAllUsers = async () => {
    const res = await pool.query('SELECT * FROM users ORDER BY id');
    return res.rows;
};

const getUserById = async (id) => {
    const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows[0];
};

const updateUser = async (id, data) => {
    const { email, username, first_name, last_name } = data;
    const res = await pool.query(
        `UPDATE users SET email = $1, username = $2, first_name = $3, last_name = $4 WHERE id = $5 RETURNING *`,
        [email, username, first_name, last_name, id]
    );
    return res.rows[0];
};

module.exports = { registerUser, getUserByUsername, getAllUsers, getUserById, updateUser };
