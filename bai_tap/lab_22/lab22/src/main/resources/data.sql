-- Xóa dữ liệu cũ nếu có
DELETE FROM students;

-- Reset auto-increment
ALTER TABLE students AUTO_INCREMENT = 1;

-- Thêm dữ liệu mẫu
INSERT INTO students (name, phone, email, address) VALUES 
('Nguyễn Văn A', '0901234567', 'nguyenvana@gmail.com', 'Hà Nội'),
('Trần Thị B', '0912345678', 'tranthib@gmail.com', 'Hồ Chí Minh'),
('Lê Văn C', '0923456789', 'levanc@gmail.com', 'Đà Nẵng'),
('Phạm Thị D', '0934567890', 'phamthid@gmail.com', 'Hải Phòng'),
('Hoàng Văn E', '0945678901', 'hoangvane@gmail.com', 'Cần Thơ'),
('Ngô Thị F', '0956789012', 'ngothif@gmail.com', 'Huế'),
('Đỗ Văn G', '0967890123', 'dovang@gmail.com', 'Nha Trang'),
('Lý Thị H', '0978901234', 'lythih@gmail.com', 'Đà Lạt'),
('Trương Văn I', '0989012345', 'truongvani@gmail.com', 'Vũng Tàu'),
('Bùi Thị K', '0990123456', 'buithik@gmail.com', 'Hạ Long'); 