const validate = (data) => {
    const error = {}

    if(!data.name.trim()){
        error.name = "نام کاربری خود راوارد کنید"
    }else {
        delete error.name;
    }
    if(!data.password.trim()){
        error.password = " رمز عبور خود راوارد کنید"
    }else if(data.password.length < 8) {
        error.password = "رمز عبور باید 8رقم یا بیشتر باشد"
    }else {
        delete error.password
    }


    return error
}

export {validate}