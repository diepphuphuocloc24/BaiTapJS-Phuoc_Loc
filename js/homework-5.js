// Bài tập tính tổng hai ký số nhập vào
// Bước 1: Đầu vào:
// - Tạo biến số đầu tiên, gán 1 giá trị số có hai chữ số
// - Tạo biến tổng ký số gán giá trị 0
// Bước 2: Xử lý:
// - Tạo biến hàng chục, lấy số đầu tiên / 10
// - Làm tròn hàng chục Math.floor(biến hàng chục)
// - Cập nhật giá trị cho chính biến hàng chục
// - Tạo biến hàng đơn vị, lấy số đầu tiên % 10
// - Tổng ký số = hàng chục + hàng đơn vị
// Bước 3: Đầu ra:
// - In kết quả ra ngoài màn hình

// Đầu vào
const firstNumber = 72;
console.log("Số nhập vào có hai chữ số là: " + firstNumber);
let tongKySo = 0;

// Xử lý
let so_Hang_Chuc = firstNumber / 10;
so_Hang_Chuc = Math.floor(so_Hang_Chuc);
console.log("Số hàng chục = " + so_Hang_Chuc);

let so_Hang_DV = firstNumber % 10;
console.log("Số hàng đơn vị = " + so_Hang_DV);

tongKySo = so_Hang_Chuc + so_Hang_DV;

console.log("Tổng hai ký số = " + tongKySo);
