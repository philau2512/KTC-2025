// Yêu cầu 1: Tạo một collection tên là products và chèn vào 3 sản phẩm với các field: name, price, category sử dụng db.products.insertMany() --

db.products.insertMany([{
        name: "Iphone 15",
        price: 15000000,
        category: "Phone",
    },
    {
        name: "Ipad 11",
        price: 3000000,
        category: "Ipad",
    },
    {
        name: "Mac 20",
        price: 100000000,
        category: "Mac",
    },
]);

// Yêu cầu 2: Tạo một collection orders với dữ liệu chứa các trường: orderId, customerName, orderDate, totalAmount. Thêm ít nhất 2 đơn hàng. Sử dụng insertOne() hoặc insertMany() --

db.orders.insertMany([{
        orderId: 1,
        customerName: "Nguyen Van A",
        orderDate: new Date("2025-08-01"),
        totalAmount: 30000000,
        items: [{
            productId: 1,
            productName: "Iphone 15",
            quantity: 2,
            price: 15000000,
        }, ],
    },
    {
        orderId: 2,
        customerName: "Nguyen Van B",
        orderDate: new Date("2025-08-02"),
        totalAmount: 33000000,
        items: [{
                productId: 1,
                productName: "Iphone 15",
                quantity: 2,
                price: 15000000,
            },
            {
                productId: 2,
                productName: "Ipad 11",
                quantity: 1,
                price: 3000000,
            },
        ],
    },
]);

// Yêu cầu 3: Insert 5 documents vào collection users với các field: name, email, age sử dụng insertMany()

db.users.insertMany([{
        name: "Nguyen Van A",
        email: "nguyenvana@gmail.com",
        age: 26,
    },
    {
        name: "Nguyen Van B",
        email: "nguyenvanb@gmail.com",
        age: 25,
    },
    {
        name: "Nguyen Van C",
        email: "nguyenvan.c@gmail.com",
        age: 27,
    },
    {
        name: "Nguyen Van D",
        email: "nguyenvan.d@gmail.com",
        age: 23,
    },
    {
        name: "Nguyen Van E",
        email: "nguyenvan.e@gmail.com",
        age: 24,
    },
]);

//  Yêu cầu 4: Tìm tất cả các user có độ tuổi lớn hơn 25 và chỉ hiển thị name, email với find() và projection.
db.users.find({
    age: {
        $gt: 25,
    },
}, {
    name: 1,
    email: 1,
    _id: 0,
});

//  Yêu cầu 5: Cập nhật tuổi của user tên “Alice” thành 31.
db.users.updateOne({
    name: "Alice",
}, {
    $set: {
        age: 31,
    },
});

// Yêu cầu 6: Xóa tất cả user có tuổi nhỏ hơn 20.
db.users.deleteMany({
    age: {
        $lt: 20,
    },
});

// Yêu cầu 7: Tìm 3 người lớn tuổi nhất trong bảng users.
db.users
    .find()
    .sort({
        age: -1,
    })
    .limit(3);

// Yêu cầu 8: Tìm 3 user có tuổi cao nhất và hiển thị name, age sử dụng sort() + limit() + projection.
db.users
    .find({}, {
        name: 1,
        age: 1,
        _id: 0,
    })
    .sort({
        age: -1,
    })
    .limit(3);

// Yêu cầu 9: Thực hiện truy vấn aggregation để đếm số lượng user theo từng độ tuổi với $group.
db.users.aggregate([{
    $group: {
        _id: "$age",
        count: {
            $sum: 1,
        },
    },
}, ]);

// Yêu cầu 10: Tính tuổi trung bình của user có tuổi từ 25 trở lên bằng aggregation pipeline (kết hợp $match và $group)
db.users.aggregate([{
        $match: {
            age: {
                $gt: 25,
            },
        },
    },
    {
        $group: {
            _id: null,
            avgAge: {
                $avg: "$age",
            },
        },
    },
    {
        $project: {
            _id: 0,
            avgAge: 1,
        },
    },
]);