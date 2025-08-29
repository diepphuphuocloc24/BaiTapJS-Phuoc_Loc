// Bài tập tính giá trị trung bình
// Bước 1: Đầu vào:
// - Tạo 5 biến chứa 5 số thực
// - Tạo biến giá trị trung bình, gán giá trị ban đầu là 0
// Bước 2: Xử lý:
// - Giá trị trung bình là tổng 5 số thực rồi chia cho 5
// - Gán kết quả cho biến giá trị trung bình, cập nhật lại biến giá trị trung bình
// Bước 3: Đầu ra:
// - In kết quả ra ngoài màn hình

// Đầu vào
let number_1 = 2;
console.log("Số thứ 1 = " + number_1);
let number_2 = 4;
console.log("Số thứ 2 = " + number_2);
let number_3 = 6;
console.log("Số thứ 3 = " + number_3);
let number_4 = 8;
console.log("Số thứ 4 = " + number_4);
let number_5 = 10;
console.log("Số thứ 5 = " + number_5);
let giaTriTrungBinh = 0;

// Xử lý
giaTriTrungBinh = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;

// Đầu ra
console.log("Giá trị trung bình là: " + giaTriTrungBinh);
