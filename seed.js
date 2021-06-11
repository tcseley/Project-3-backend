// import all models
const { Restaurant, User, Blog } = require('./models');

//-----------------------------------------------------------

//create a test user

const createUser = async (obj) => {
    User.create(obj, (err, user) => {
        if(err) console.log(err);
        console.log(user);
    })
}

const Janeth = {
    name: 'Janeth',
    email: 'Janeth@gmail.com',
    password: '123456789'
}

// createUser(Janeth);




// //create a test user
// const createUser = async (obj) => {
//     User.create(obj, (err, user) => {
//         if(err) console.log(err);
//         console.log(user);
//     })
// }
// const Janeth = {
//     name: 'Janeth',
//     email: 'Janeth@gmail.com',
//     password: '123456789'
// }
// // createUser(Janeth);
// //Find user and then push restaurant to user
// User.findById('60c15774b527025960ef0238', (err, user) => {
//     console.log(user);
//     //find Restaurant 
// Restaurant.findOne({ _id: '60c1645b8be3345ecdd75f99'}, (err, restaurant) => {
//     console.log(restaurant);
//     user.restaurant.push({restaurant});
//     User.save();
//     console.log(User)
// })
// })
// // 
// const fetchOneUser = async (email) => {
//     const result = await User.findOne({ email })
//     console.log(result);
// }
// // fetchOneUser('Janeth@gmail.com')
// //remove restaurant by id
// const removeOne = async(_id) => {
//     Restaurant.findByIdAndRemove({_id}, (err) =>{
//         if (err) console.log(err);
//         console.log('Restaurant was delted!')
//     })
// }


