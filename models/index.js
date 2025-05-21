import Sequelize from 'sequelize';
import sequelize from '../config/db.js';
import BookModel from './book.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Book = BookModel(sequelize, Sequelize.DataTypes);

export const { Book } = db;
export default db;
