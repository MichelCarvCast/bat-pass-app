export default function generatePass(){
    let password: string = '';
    let characters:string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%¨&*()-=+?/][123456890'
    let passWordLength = 8

    for(let index = 0; index < passWordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return password;
}