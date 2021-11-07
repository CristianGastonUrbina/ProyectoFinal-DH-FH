    function User(
        email,
        fisftname,
        lastname,
        password,
        phone,
        zip,
        category,
        image
    ){
        this.email=email;
        this.firstname=fisftname;
        this.lastname=lastname;
        this.password=password;
        this.phone=phone;
        this.zip=zip;
        this.cateogry=category;
        this.image=image;
    }

module.exports=User;