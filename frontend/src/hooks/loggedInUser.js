export const loggedInUser =()=> {
    return JSON.parse(localStorage.getItem('user'));
}