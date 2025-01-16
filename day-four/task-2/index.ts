type UserWithGadget = {
    id: string,
    name: string,
    gadget: {
        id: string,
        name: string,
        price: string | undefined
    }
}[]

type UserWithGadgets = {
    id: string,
    name: string,
    gadgets: {
        id: string,
        name: string,
        price: string | undefined
    } []
}

const input: UserWithGadget = [
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: {id: "101", name: "Phone", price: "1000"},
    },
    {
        id: "2",
        name: "Khidir Karawita",
        gadget: {id: "102", name: "Tablet", price: undefined},
    },
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: {id: "103", name: "Laptop", price: "1500"},
    },
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: {id: "104", name: "SSD", price: "3000"},
    },
];

function groupedUserGadgets(users: UserWithGadget): UserWithGadgets[] {
    const groupedGadgets: Record<string, UserWithGadgets> = {}; //объект, где будут храниться промежуточные данные

    for (let user of users) {
        if (!groupedGadgets[user.id]) {  //смотрим по id, есть ли пользователь в объекте, если нет, закидываем его туда
            groupedGadgets[user.id] = {
                id: user.id,
                name: user.name,
                gadgets: [user.gadget], //массив для всех гаджетов одного юзера
            }
        } else {
            groupedGadgets[user.id].gadgets.push(user.gadget); //если пользователь уже есть в объекте, добавляем ему новый гаджет
        }
    }

    // Вывод массива значений из объекта 
    return Object.values(groupedGadgets);

}

console.log(groupedUserGadgets(input));

