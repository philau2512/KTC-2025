use sales_management;

-- Yêu cầu 1: Lấy ra tất cả các sản phẩm với mã, tên, xuất sứ ở Trung Quốc.
select p.id, p.name, p.origin from product p
where p.origin = 'Trung Quoc';

-- Yêu cầu 2: Lấy ra tất cả các sản phẩm với mã, tên, đơn vị là cây (cay) hoặc quyển (quyen).
select p.id, p.name, p.unit from product p 
where p.unit = 'cay' or p.unit = 'quyen';

-- Yêu cầu 3: Lấy ra danh sách sản phẩm với mã, tên với mã bắt đầu bằng chữ 'B' và kết thúc với ‘01’.
select p.id, p.name from product p
where p.id like 'B%' and p.id like '%01';

-- Yêu cầu 4: Lấy ra danh sách sản phẩm với mã, tên , sản xuất tại Trung Quốc và có giá khoảng từ 30000->40000.
select p.id, p.name, p.origin, p.price from product p
where p.origin = 'Trung Quoc' and p.price between 30000 and 40000;

-- Yêu cầu 5: Lấy ra danh sách sản phẩm với mã, tên, sản xuất tại Trung Quốc hoặc Thái Lan và có giá khoảng từ 30000->40000.
select p.id, p.name, p.origin, p.price from product p
where (p.origin = 'Trung Quoc' or p.origin = 'Thai Lan')
and p.price between 30000 and 40000;

-- Yêu cầu 6: Lấy ra danh sách hóa đơn với mã, tổng hóa đơn từ ngày ‘1/1/2007’ đến ngày ‘2/1/2007’.
select iv.id, iv.invoice_total from invoice iv
where DATE(iv.invoice_date) between '2007-01-01' and '2007-01-02';

-- Yêu cầu 7: Lấy ra danh sách hóa đơn với mã, tổng hóa đơn trong ngày ‘1/1/2007’ sắp xếp tăng dần theo ngày và giảm dần theo tổng hóa đơn.
select iv.id, iv.invoice_total, iv.invoice_date from invoice iv
where DATE(iv.invoice_date) = '2007-01-01'
order by iv.invoice_date asc, iv.invoice_total desc;

-- Yêu cầu 8: Lấy ra danh sách khách hàng với mã, tên những người đã mua hàng trong ngày ‘1/1/2007’.
select c.id, c.full_name from customer c
join invoice iv on c.id = iv.customer_id
where DATE(iv.invoice_date) = '2007-01-01'
group by c.id;

-- Yêu cầu 9: Lấy ra danh sách hóa đơn với mã, tổng hóa đơn được tạo ra bởi nhân viên có tên ‘Nguyen Van B’ trong ngày ‘28/10/2006’.
select iv.id, iv.invoice_total from invoice iv
join employee e on iv.employee_id = e.id
where DATE(iv.invoice_date) = '2006-10-28' and e.full_name = 'Nguyen Van B';

-- Yêu cầu 10: Lấy ra danh sách các mã hóa đơn đã thanh toán cho các sản phẩm có mã là ‘BB01’ hoặc ‘BB02’.
select * from invoice iv
join invoice_detail ivd on iv.id = ivd.invoice_id
where ivd.product_id IN ('BB01', 'BB02');

-- Yêu cầu 11: Lấy ra danh sách các mã hóa đơn đã thanh toán cho các sản phẩm có mã là ‘BB01’ hoặc ‘BB02’ và mỗi sản phẩm có tổng số từ 10->20.
select * from invoice iv
join invoice_detail ivd on iv.id = ivd.invoice_id
where ivd.product_id IN ('BB01', 'BB02')
and ivd.amount between 10 and 20;

-- Yêu cầu 12: Lấy ra hóa đơn có tổng lớn nhất và hóa đơn có tổng nhỏ nhất.
SELECT * FROM invoice
WHERE invoice_total = (SELECT MAX(invoice_total) FROM invoice)
UNION ALL
SELECT * FROM invoice
WHERE invoice_total = (SELECT MIN(invoice_total) FROM invoice);

-- Yêu cầu 13: Tính trung bình tất cả tổng các hóa đơn trong năm 2006.
SELECT AVG(invoice_total) AS average_total_2006
FROM invoice
WHERE YEAR(invoice_date) = 2006;

-- Yêu cầu 14: Tính tổng lợi nhuận kiếm được năm 2006. Biết rằng: lợi nhuận = giá cả sản phẩm * số lượng sản phẩm đã bán (trên từng chi tiết hóa đơn).
SELECT SUM(p.price * ivd.amount) AS total_profit_2006
from invoice iv
join invoice_detail ivd on iv.id = ivd.invoice_id
JOIN product p ON ivd.product_id = p.id
where year(iv.invoice_date) = '2006';

-- Yêu cầu 15: Lấy ra 3 mã, tên những khách hàng có số lượng mua hàng lớn nhất.
select c.id, c.full_name, SUM(ivd.amount) AS total_quantity
from customer c
join invoice iv on c.id = iv.customer_id
join invoice_detail ivd on iv.id = ivd.invoice_id
group by c.id
order by total_quantity DESC
limit 3;

-- Yêu cầu 16: Tính số lượng sản phẩm có xuất xứ ở Trung Quốc.
select count(id) as quantity
from product p
where p.origin = 'Trung Quoc';

-- Yêu cầu 17: Tính số lượng sản phẩm có xuất xứ ở Trung Quoc hoặc Thái Lan.
select count(id) as quantity, origin
from product
where origin in ('Trung Quoc', 'Thai Lan')
group by origin;

-- Yêu cầu 18: Tính số lượng sản phẩm mỗi quốc gia có trong cơ sở dữ liệu.
select count(id) as quantity, origin
from product
group by origin;

-- Yêu cầu 19: Với mỗi quốc gia, tìm giá lớn nhất, nhỏ nhất và trung bình của tất cả các sản phẩm.
select 
	min(price) as min_price, 
    avg(price) as avg_price, 
    max(price) as max_price, 
    origin
from product
group by origin;

-- Yêu cầu 20: Tính lợi nhuận mỗi ngày = số lượng sản phẩm × giá sản phẩm
select
	DATE(iv.invoice_date) AS sale_date,
    SUM(p.price * ivd.amount) AS daily_profit
FROM invoice iv
join invoice_detail ivd on iv.id = ivd.invoice_id
join product p on ivd.product_id = p.id
group by date(iv.invoice_date)
order by sale_date;