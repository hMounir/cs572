class Lectures{

    constructor(_id,course,lecture){
        this._id = _id;
        this.course = course;
        this.lecture = lecture;
    }

    getId(){
        return this._id;
    }

    getCourse(){
        return this.course;
    }

    getLecture(){
        return this.lecture;
    }
}