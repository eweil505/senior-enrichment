const db = require('./server/db');
const Student = db.model('students');
const Campus = db.model('campuses');

const enrolledStudents = [
    {firstName: 'Allizon', lastName: 'McGillivray', email: 'allizonM@chef.edu', gpa: 4.0, imageUrl: '/chef-allizon-mcgillivray.jpg', campusId: 1},
    {firstName: 'Joseph', lastName: 'Webb', email: 'josephW@chef.edu', gpa: 3.9, imageUrl: '/chef-joseph-webb.jpg', campusId: 2}  
]

const campuses = [
    {
        name: 'American Cuisine',
        description: 'This campus focuses on "New American" cuisine, encouraging students to set new food trends.',
        imageUrl: '/gourmet-american.jpg'  
    },
    {
        name: 'Chinese Cuisine',
        description: 'Our Chinese Cuisine campus focuses on the eight major cuisines of China: Anhui, Cantonese, Fujian, Hunan, Jiangsu, Shandong, Sichuan, and Zhejian',
        imageUrl: '/chinese.jpg'
    },
    {
        name: 'French Cuisine',
        description: 'Following in the footsteps of Auguste Escoffier, our French Cuisine campus takes a traditional approach to teaching haute cuisine techniques.',
        imageUrl: '/gourmet-french.jpeg'
    },
    {
        name: 'Indian Cuisine',
        description: 'The newest of our campuses, the Indian Cuisine campus focuses on a delicate use of spices in the varied culinary specialties of India.',
        imageUrl: '/gourmet-indian.jpg'
    },
    {
        name: 'South American Cuisine',
        description: 'The curriculum for our South American Cuisine campus ranges from recipes and techniques for street food to gourmet meals.',
        imageUrl: '/south-american.jpg'
    }
]


db.sync({force:true})
    .then(()=> {
        console.log('starting enrollement!')
        return Promise.all(campuses.map(c => Campus.create(c)))
    })
    .then((campusArray) => {
        return Promise.all(enrolledStudents.map(s => Student.create(s)))
    })
    .then((studentsArray) => {
        console.log('data committed');
        db.close()
    })
    .catch((error) => {
        console.log('oh no!')
        console.log(error.stack)
        db.close()
    })