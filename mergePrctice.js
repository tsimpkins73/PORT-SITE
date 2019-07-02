m1 = [
    {id: "ABC",
    firstName: 'Tom',
    lastName: 'Smith',
    },

    {id: "XYZ",
    firstName: 'Ralph',
    lastName: 'Wiggum',
    }
];

m2 = [
    {id: 'ABC',
phoneNum: '813-999-5555',
email: 'tom@tom.com',
    },

    {id: 'ABC',
phoneNum: '813-999-5555',
email: 'tom@tom.com',
    }
];

m3 = [];

m1.forEach(item1 => {
    const foundItem = m2.find(item2=>{
        if(item1.id === item2.id){
            return true;
        }
        else{
            return false;
        }
    })
    const newObject = {...item1, ...foundItem}
    m3.push(newItem);
});

console.log(m3);