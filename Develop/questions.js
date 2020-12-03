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
            // ask for employee id, cannot be empty and must be a number
            type: 'input',
            name: 'id',
            message: `What is youre ${role}'s id?`,
            validate: input => {
                if(input<0){
                    return "Id must be a postive number."
                } else if(isNaN(input)){
                    return "Id must be a number."
                } else if(input === ""){
                    return "Id must not be empty"
                } else if(check.find(item=>item.id == input)){
                    return "Id is already taken. Please choose different id."
                } else {
                    return true;
                }
            },
        },


    ]
}