import KhoaHoc from "./KhoaHoc.js";
import {
  getInput,
  showListLesson,
  showMenu,
  getLessonById,
  deleteLessonById,
  updateLesson,
  addLesson,
} from "./utils.js";

// Khởi tạo mảng khóa học
let arrKhoaHoc = [];
let khoaHoc = new KhoaHoc(1, "ReactJS", "Nguyen Van B", 15);
let khoaHoc2 = new KhoaHoc(2, "NodeJS", "Nguyen Van C", 20);
let khoaHoc3 = new KhoaHoc(3, "Java", "Nguyen Van D", 17);
arrKhoaHoc.push(khoaHoc);
arrKhoaHoc.push(khoaHoc2);
arrKhoaHoc.push(khoaHoc3);

async function main() {
  while (true) {
    showMenu();
    let choice = await getInput("Chọn chức năng: ");
    switch (choice) {
      case "1":
        showListLesson(arrKhoaHoc);
        break;
      case "2":
        await addLesson(arrKhoaHoc);
        break;
      case "3":
        await updateLesson(arrKhoaHoc);
        break;
      case "4":
        await deleteLessonById(arrKhoaHoc);
        break;
      case "5":
        console.log("Thoát chương trình");
        process.exit(0);
      default:
        alert("Chức năng không hợp lệ");
        break;
    }
  }
}

main();
