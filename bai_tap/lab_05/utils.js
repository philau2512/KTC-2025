import readline from "readline";
import KhoaHoc from "./KhoaHoc.js";

function getInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function showMenu() {
  console.log("1. Hiển thị danh sách khóa học");
  console.log("2. Thêm khóa học");
  console.log("3. Cập nhật thông tin khóa học");
  console.log("4. Xóa khóa học");
  console.log("5. Thoát");
}

function showListLesson(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `ID: ${arr[i].id} - Tên: ${arr[i].ten} - Giảng viên: ${arr[i].giangVien} - Thời lượng: ${arr[i].thoiLuong} giờ`
    );
  }
}

function getLessonById(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      return arr[i];
    }
  }
  return null;
}

async function deleteLessonById(arr) {
  const id = await getInput("Nhập id khóa học cần xóa: ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      arr.splice(i, 1);
      return true;
    }
  }
  return false;
}

async function updateLesson(arr) {
  const id = await getInput("Nhập id khóa học: ");
  let lessonUpdate = getLessonById(arr, id);
  if (lessonUpdate) {
    lessonUpdate.ten = await getInput("Nhập tên khóa học: ");
    lessonUpdate.giangVien = await getInput("Nhập giảng viên: ");
    lessonUpdate.thoiLuong = await getInput("Nhập thời lượng: ");
    return true;
  } else {
    console.log("Không tìm thấy khóa học có id: " + id);
  }
  return false;
}

async function addLesson(arr) {
  let lesson = new KhoaHoc();
  lesson.id = arr.length + 1;
  lesson.ten = await getInput("Nhập tên khóa học: ");
  lesson.giangVien = await getInput("Nhập giảng viên: ");
  lesson.thoiLuong = await getInput("Nhập thời lượng: ");
  arr.push(lesson);
}

export {
  getInput,
  showListLesson,
  showMenu,
  getLessonById,
  deleteLessonById,
  updateLesson,
  addLesson,
};
