import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Damanpreet Grewal',
        email: 'daman@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    
]
export default users