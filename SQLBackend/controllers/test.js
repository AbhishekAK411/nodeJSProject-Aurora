import conn from "../services/db.js";

// export const test = (req,res) =>{
//     try {
//         conn.query("create table Student(userId int NOT NULL, username varchar(20) NOT NULL, email varchar(20) NOT NULL)", (err, data, fields) =>{
//             if (err) return res.send(err.sqlMessage);
//             res.status(200).json({status : 200, length : data?.length, data : data, fields : fields});
//         });
//     } catch (error) {
//         return res.send(error);
//     }
// }

// export const postTest = (req,res) =>{
//     try {
//         const {username, email} = req.body;

//         conn.query(`insert into Student values(1, '${username}', '${email}')`, (err, data, fields) =>{
//             if(err) return res.send(err.sqlMessage);
//             res.status(200).json({status : 200, length : data?.length, data : data, fields : fields});
//         });
//     } catch (error) {
//         return res.send(error);
//     }
// }


