const DATA = [
    {
        email: "admin@stlr.com",
        password: "stlr123",
        fullname: "Admin Account",
        type: "Savings Account",
        number: "47290539480",
        balance: 1000,
        isAdmin: true, 
        transactions: []
    },
    {
        email: "kafka@stlr.com",
        password: "stlr123",
        fullname: "Kafka",
        type: "Savings Account",
        number: "47290539481",
        balance: 1029300.43,
        isAdmin: false, 
        transactions: []
    },
    {
        email: "silverwolf@stlr.com",
        password: "stlr123",
        fullname: "Silver Wolf",
        type: "Savings Account",
        number: "47290539482",
        balance: 392830.22,
        isAdmin: false, 
        budget: [
            {
                title: "Video Games",
                amount: 12000
            },
            {
                title: "Gadget Repairs",
                amount: 4000
            }
        ], 
        transactions: [
            {
                title: "Fund transfer", 
                amount: 2000,
                type: "debit", 
                date: "October 1, 2021"
            }, 
            {
                title: "Withdraw", 
                amount: 10000, 
                type: "debit",
                date: "October 1, 2021"
            }
        ]
    },
    {
        email: "blade@stlr.com",
        password: "stlr123",
        fullname: "Blade",
        type: "Savings Account",
        number: "47290539483",
        balance: 102938.34,
        isAdmin: false, 
        transactions: []
    },
    {
        email: "himeko@stlr.com",
        password: "stlr123",
        fullname: "Himeko",
        type: "Checking Account",
        number: "47290539484",
        balance: 837495.38, 
        isAdmin: false, 
        transactions: []
    },

    {
        email: "welt@stlr.com",
        password: "stlr123",
        fullname: "Welt",
        type: "Checking Account",
        number: "47290539485",
        balance: 574839.58, 
        isAdmin: false, 
        transactions: []
    },
    {
        email: "client@stlr.com",
        password: "stlr123",
        fullname: "Client Account",
        type: "Savings Account",
        number: "47290539486",
        balance: 1000,
        isAdmin: false, 
        transactions: []
    }
];

export default DATA;
