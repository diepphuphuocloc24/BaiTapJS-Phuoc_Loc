// Bài tập tính diện tích, chu vi hình chữ nhật
// Bước 1: Đầu vào:
// - Tạo biến chứa chiều dài HCN
// - Tạo biến chứa chiều rộng HCN
// - Tạo biến diện tích HCN, gán giá trị ban đầu là 0
// - Tạo biến chu vi HCN, gán giá trị ban đầu là 0
// Bước 2: Xử lý:
// - Diện tích HCN = chiều dài HCN * chiều rộng HCN
// - Chu vi HCN = (chiều dài HCN + chiều rộng HCN)*2
// - Gán kết quả cho biến diện tích, cập nhật lại biến diện tích
// - Gán kết quả cho biến chu vi, cập nhật lại biến chu vi
// Bước 3: Đầu ra:
// - In kết quả ra ngoài màn hình

// Đầu vào
let chieu_dai_HCN = 5;
console.log("Chiều dài HCN = " + chieu_dai_HCN);
let chieu_rong_HCN = 8;
console.log("Chiều rộng HCN = " + chieu_rong_HCN);
let dien_tich_HCN = 0;
let chu_vi_HCN = 0;

// Xử lý
dien_tich_HCN = chieu_dai_HCN * chieu_rong_HCN;
chu_vi_HCN = (chieu_dai_HCN + chieu_rong_HCN) * 2;

// Đầu ra
console.log("Diện tích HCN = " + dien_tich_HCN);
console.log("Chu Vi HCN = " + chu_vi_HCN);
