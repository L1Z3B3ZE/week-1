// type DataType = {
//   id: string; // uuid = string
//   name: string;
//   phone: string;
//   email: string;
//   location: string;
//   status: "active" | "delete";
// }[]
//так как нужно только вернуть данные с апи, они скорее всего уже проверены на серверной стороне, поэтому решила отказаться от написания "type DataType"

async function getFakeApiData() {
    const data = [
        {
            id: "1",
            name: "John Doe",
            phone: "123456789",
            email: "john.doe@example.com",
            location: "New York",
            status: "active",
        },
        {
            id: "2",
            name: "Jane Smith",
            phone: "123456789",
            email: "jane.smith@example.com",
            location: "Los Angeles",
            status: "active",
        },
        {
            id: "3",
            name: "Bill Gates",
            phone: "555-555-5555",
            email: "bill.gates@microsoft.com",
            location: "Seattle",
            status: "delete",
        },
    ];
    return new Promise(resolve => {
        setTimeout(() => resolve(data), 2000)
    })
        .then((result) => {
            console.log(result)
        })
}

getFakeApiData()

