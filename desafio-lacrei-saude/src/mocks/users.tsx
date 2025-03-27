type Users = Array<{
    name: string;
    lastName: string;
    email: string;
    password: string;
}>;

const users: Users = [
    {
        name: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        password: "Asdf0000!"
    },
    {
        name: "Jane",
        lastName: "Smith",
        email: "jane@gmail.com",
        password: "Asdf0000!"
    },
    {
        name: "Bob",
        lastName: "Brown",
        email: "bob@gmail.com",
        password: "Asdf0000!"
    }
];
export default users;