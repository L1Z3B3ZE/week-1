const countFilledValues = (obj: Record<string, unknown>): number => {
    const filledValuesFilter = Object.values(obj).filter(value => value !== undefined && value !== null && value !== "")
    return filledValuesFilter.length;
};

const data = {
    name: "Pedro",
    age: 25,
    address: "",
    phone: 937-235,
    email: undefined,
    notes: null,
    salary: 75000,
    skills: ["JavaScript", "TypeScript", "React"],
    projects: null,
    isEmployed: false,
};

console.log(`Заполненных значений: ${countFilledValues(data)}`);
