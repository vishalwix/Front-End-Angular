export class SignUpInfo {
    first_name: string;
    last_name: string;
    dob: string;
    username: string;
    email: string;
    password: string;
    company: string;
    address: string;
    role: string[];

    constructor(first_name: string, last_name: string,
      dob: string, username: string, email: string, password: string, company: string, address: string) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.company = company;
        this.address = address;
        this.dob = dob;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['admin'];
    }
}
