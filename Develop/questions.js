// function to ask for role of the employee
const setRole = (role,check) => {
    return [
        {
            // ask for name and role, cannot be empty
            type: 'input',
            name: 'name',
            message: `What is your ${role}'s name?`,
            validate: input => {
                return input !== '' || "Name cannot be empty.";
            },
        },

        {
            // ask for 
        }
    ]
}