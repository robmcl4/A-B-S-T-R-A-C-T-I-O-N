import User from './user'
import Show from './show'

export default function() {
    User.hasMany(Show);
    Show.belongsTo(User);
}