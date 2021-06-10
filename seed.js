// import all models
// const { Book } = require('./models');
// Book.create([
//     {
//         title: 'Book 1',
//         author: 'Author 1',
//         pages: 199,
//         genre: 'Business',
//         price: 20,
//         isbn: '902391340123941203192'
//     },
//     {
//         title: 'Book 2',
//         author: 'Author 2',
//         pages: 300,
//         genre: 'Software',
//         price: 100,
//         isbn: '9023913455523941203192'
//     },
//     {
//         title: 'Book 3',
//         author: 'Author 3',
//         pages: 199,
//         genre: 'Business',
//         price: 20,
//         isbn: '9023913403343441203192'
//     },
//     {
//         title: 'Book 4',
//         author: 'Author 4',
//         pages: 333,
//         genre: 'Software',
//         price: 20,
//         isbn: '9023912123941203192'
//     }
// ], (err, results) => {
//     console.log(results);
// });

//-----------------------------------------------------------

const { Restaurant, User, Blog } = require('./models');
Restaurant.create([
        {
            name: 'Restaurant 1',
            location: 'Austin, TX',
            review: '* * *',
            price: '$',
            phone: 5123458989,
        },
        {
            name: 'Restaurant 2',
            location: 'Austin, TX',
            review: '* *',
            price: '$$$',
            phone: 5122346789,
        },
        {
            name: 'Restaurant 3',
            location: 'Austin, TX',
            review: '*',
            price: '$',
            phone: 512087765,
        },
        {
            name: 'Restaurant 4',
            location: 'Austin, TX',
            review: '* * * *',
            price: '$$$$',
            phone: 5121239274,
        }
    ], (err, results) => {
        console.log(results);
    });







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


