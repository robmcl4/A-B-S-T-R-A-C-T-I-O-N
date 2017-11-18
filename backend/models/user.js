import DataTypes from 'sequelize'
import sequelize from '../config/sequelize'
import { STUDENT, ADMIN, JUDGE } from '../permissionLevels'
import Entry, { USER_ENTRANT } from './entry'

export default sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
    primaryKey: true  //RIT usernames are unique between individuals and cannot be changed
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true
  },
  displayName: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.ENUM(STUDENT, ADMIN, JUDGE),
    allowNull: false,
    notEmpty: true
  }
},
{
  getterMethods: {
    getEntries () {
      return Entry.findAll({
        where: {entrantType: USER_ENTRANT, entrantId: this.id}
      })
    }
  }
})
