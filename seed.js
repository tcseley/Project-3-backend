// import all models
const { Restaurant, User, Blog } = require('./models');


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

//Find user and then push restaurant to user

User.findById('60c15774b527025960ef0238', (err, user) => {
    console.log(user);
    //find Restaurant 
    Restaurant.findOne({ _id: '60c1645b8be3345ecdd75f99'}, (err, restaurant) => {
        console.log(restaurant);
        user.restaurants.push(restaurant);
        user.save();
        console.log(user)
    })
})

// 

const fetchOneUser = async (email) => {
    const result = await User.findOne({ email })
    console.log(result);
}

// fetchOneUser('Janeth@gmail.com')

//remove restaurant by id
const removeOne = async(_id) => {
    Restaurant.findByIdAndRemove({_id}, (err) =>{
        if (err) console.log(err);
        console.log('Restaurant was delted!')
    })
}

// removeOne('60c15d8a9e97b25b32bd515f')
 



// // find restaurants
// Restaurant.find({}, (error, results)=>{
//     console.log(results)
//     if(error){
//         console.log(error)
//     }
// })

//create a restaurant without linking to a user or blog post
// Restaurant.create(
//     {
//     name: "Cocina De Ledezma",
//     location: "San Diego",
//     review: "THE BEST!",
//     price: 13,
//     phone: 5109438411,
//     image_url: "https://www.google.com/maps/uv?pb=!1s0x80db8d3a5a4e6d01%3A0x98f134f67d1a077a!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOxsH80Usl3JTyAijy4TLpiVkaIpxfmYWJBKEbu%3Dw566-h320-k-no!5scocina%20de%20ledezma%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!&hl=en&sa=X&ved=2ahUKEwid3cr2qovxAhUJuZ4KHUu8DKUQoiowFXoECFEQAw#",

// }
// ),
// (err, results) => {
//     console.log(results);
// };


// // import all models
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




//create test user
//use userId to pass in to restaurant
//Blog ids
// then find populate reference under mongoose lesson 