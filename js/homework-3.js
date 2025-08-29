// Bài tập quy đổi tiền tệ
// Bước 1: Đầu vào:
// - Tạo biến chứa số tiền USD
// - Tạo biến chứa số tiền quy đổi 23500 VND
// - Tạo biến xuất ra số tiền, gán giá trị ban đầu là 0
// Bước 2: Xử lý:
// - Số tiền xuất ra = số tiền USD * Số tiền quy đổi
// - Gán kết quả cho biến số tiền xuất ra, cập nhật lại biến số tiền xuất ra
// Bước 3: Đầu ra:
// - In kết quả ra ngoài màn hình

// Đầu vào
let so_Tien_USD = 2;
console.log("Số tiền USD = " + so_Tien_USD + " USD");
let so_Tien_Quy_Doi = 23500;
console.log("Số tiền quy đổi = " + so_Tien_Quy_Doi + " VND");
let xuatRaSoTien = 0;

// Xử lý
xuatRaSoTien = so_Tien_USD * so_Tien_Quy_Doi;

// Đầu ra
console.log("Số tiền xuất ra = " + xuatRaSoTien + " VND");
