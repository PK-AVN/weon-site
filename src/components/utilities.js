var Validation =()=>{


    const EmailValid = email =>{
        return email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    const PasswordValid = value =>{
        var maxLength = /^[\s\S]{8,32}$/,
        special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
        if(maxLength.test(value) && special.test(value)){
            return true;
        }else{
            return false;
        }
    }

       const getUsers = (value) => {
        const user = localStorage.getItem(value);
        if (user) {
          return JSON.parse(user);
        } else {
          return [];
        }
    }

    return{EmailValid, PasswordValid, getUsers};

};

export default Validation;