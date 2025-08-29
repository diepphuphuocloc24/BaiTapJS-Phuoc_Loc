// Bài tập tính lương nhân viên
// Bước 1: Đầu vào:
// - Tạo biến chứa lương nhân viên nhân viên 1 ngày là 100 ngàn
// - Số ngày làm việc
// - Tạo biến tổng lương, gán giá trị ban đầu là 0
// Bước 2: Xử lý:
// - Tổng lương = lương ngày * số ngày làm việc
// - Gán kết quả cho biến tổng lương, cập nhật lại biến biến tổng lương
// Bước 3: Đầu ra:
// - In kết quả ra ngoài màn hình

// Đầu vào
const luongNhanVienMotNgay = 100000;
console.log("Lương nhân viên một ngày = " + luongNhanVienMotNgay);
let soNgayLamViec = 26;
console.log("Số ngày làm việc = " + soNgayLamViec);
let tongLuong = 0;

// Xử lý
tongLuong = luongNhanVienMotNgay * soNgayLamViec;

// Đầu ra
console.log("Tổng lương là: " + tongLuong);
