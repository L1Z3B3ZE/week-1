type UserType = {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    isActive: boolean;
};

const users: UserType[] = [
    {
        id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        name: "John Doe",
        phone: "+123456789",
        email: "john.doe@example.com",
        location: "New York",
        isActive: false,
    },
    {
        id: "9b1deb4d-df0b-4b9f-a997-43c8ff202b9a",
        name: "Jane Smith",
        phone: "+123456789",
        email: "jane.smith@example.com",
        location: "Los Angeles",
        isActive: true,
    },
    {
        id: "4c8e9bf7-650a-4e2f-a3ea-05ef1e9f25da",
        name: "Peter Parker",
        phone: "+34536343290",
        email: "peter.parker@example.com",
        location: "Seattle",
        isActive: false,
    },
]

async function cleanUserData(users: UserType[]): Promise<UserType[] | unknown> {
    try {
        if ((Math.floor(Math.random() * 100) + 1) < 10) {
            throw new Error("Произошла случайная ошибка");
        }
        const filteredActiveUsers = users
            .filter(user => user.isActive === true)
            .map(user => ({
                ...user,
                name: user.name.trim().toLowerCase(),
                email: user.email.toLowerCase(),
            }));

        if (filteredActiveUsers.length === 0) {
            return "Активных пользователей нет";
        }

        return filteredActiveUsers

    } catch (error) {
        return error;
    }
}

cleanUserData(users)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));