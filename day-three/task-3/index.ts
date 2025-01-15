type DataType = {
    id: string; // uuid = string
    name: string;
    phone: string;
    email: string;
    location: string;
    status: "active" | "delete";
}
async function getFakeApiData() {
    const data: DataType[] = [
        {
            id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
            name: "John Doe",
            phone: "+123456789",
            email: "john.doe@example.com",
            location: "New York",
            status: "active",
        },
        {
            id: "9b1deb4d-df0b-4b9f-a997-43c8ff202b9a",
            name: "Jane Smith",
            phone: "+123456789",
            email: "jane.smith@example.com",
            location: "Los Angeles",
            status: "active",
        },
        {
            id: "4c8e9bf7-650a-4e2f-a3ea-05ef1e9f25da",
            name: "Peter Parker",
            phone: "+34536343290",
            email: "peter.parker@example.com",
            location: "Seattle",
            status: "delete",
        },
    ];
    return new Promise(resolve => {
        setTimeout(() => resolve(data), 5000)
    })

}

getFakeApiData().then((result) => {
    console.log(result)
})

