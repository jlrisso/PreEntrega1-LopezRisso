
const products = [
    {
        id: '978-1501110368',
        title: 'It Ends with Us',
        author:'Colleen Hoover',
        publisher: 'Atria',
        language: 'English',
        pages: 290,
        price: 2300,
        stock: 10,
        weight: 13.4,
        category: 'Fiction',
        img: 'https://m.media-amazon.com/images/I/51m34-qLjUL._SX320_BO1,204,203,200_.jpg',
    },
    {
        id: '978-0593189641',
        title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        author:'James Clear',
        publisher: 'Penguin',
        language: 'English',
        pages: 320,
        price: 4250,
        stock: 8,
        weight: 11.4,
        category: 'Psychology',
        img: 'https://m.media-amazon.com/images/I/412gUd3iiKL._SX331_BO1,204,203,200_.jpg',
    },
    {
        id: '978-0141983769',
        title: 'Why we sleep',
        summary: "Sleep is one of the most important but least understood aspects of our life, wellness, and longevity. Until very recently, science had no answer to the question of why we sleep, or what good it served, or why we suffer such devastating health consequences when we don't sleep. Compared to the other basic drives in life—eating, drinking, and reproducing—the purpose of sleep remained elusive.\n",
        author:'Matthew Walker',
        publisher: 'Penguin',
        language: 'English',
        pages: 480,
        price: 3170,
        stock: 12,
        weight: 9.5,
        category: 'Health',
        img: 'https://m.media-amazon.com/images/I/41yN1NYjE8L._SX324_BO1,204,203,200_.jpg',
    },
    {
        id: '978-1720043997',
        title: 'The Road to React: Your journey to master plain yet pragmatic React.js',
        author:'Robin Wieruch',
        publisher: ' Independently published',
        language: 'English',
        pages: 288,
        price: 4250,
        stock: 4,
        weight: 1.3,
        category: 'Psychology',
        img: 'https://m.media-amazon.com/images/I/41BUWD+Jv6L._SX384_BO1,204,203,200_.jpg',
    },
];


export const getItems = () => new Promise ((resolve, reject) => 
{
    setTimeout(() => {
        resolve(products);
    }, 2000);
    
});


export const getItem =() => new Promise ((resolve, reject) => 
{
    
    setTimeout(() => {
        resolve(products.find(product => product.id === '978-0141983769'));
    }, 2000);

});
