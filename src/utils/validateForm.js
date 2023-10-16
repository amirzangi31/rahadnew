const validate = (data) => {
    const error = {}

    if(!data.UserName.trim()){
        error.UserName = "نام کاربری خود راوارد کنید"
    }else {
        delete error.UserName;
    }
    if(!data.Password.trim()){
        error.Password = " رمز عبور خود راوارد کنید"
    }else if(data.Password.length < 3) {
        error.Password = "رمز عبور باید 8رقم یا بیشتر باشد"
    }else {
        delete error.Password
    }


    return error
}

export {validate}