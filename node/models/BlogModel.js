/*representa una tabla de la base de datos, en este caso
se lo indica a sequelize como tal */


//importamos la conexion a la BD
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs',{
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
})

export default BlogModel