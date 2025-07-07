import Student from "./Student";
import GoodStudent from "./GoodStudent";

let s1 = new Student(1, "Nguyễn Văn A", 18);
let s2 = new Student(2, "An", 20);
let s3 = new Student(3, "Bình", 21);

let sArr: Student[] = new Array();
sArr.push(s1);
sArr.push(s2);
sArr.push(s3);
console.log(sArr);

let s4 = new GoodStudent(4, "Cường", 22, "Trung cấp");
console.log(s4);
