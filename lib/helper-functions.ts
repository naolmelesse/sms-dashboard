
export const checkScheduleDay = (day : number, subjectDay : string) => {
    const subDay = new Date(subjectDay).getDay();
    return ++day === subDay ? true : false;
}

export const shortenCourseName = (name : string) => {
    let shortened = "";
    name.split(" ").map((sub) => shortened += sub.charAt(0))
    return shortened;
}

export const isTodaysClass = (date : string) => {
    const today = new Date().getDay();
    return new Date(date).getDay() === today ? true : false;
}