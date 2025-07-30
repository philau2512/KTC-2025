/**
 * Contact record đại diện cho thông tin liên lạc
 * Sử dụng Java Record (từ Java 16+) để tạo một lớp bất biến với getter và constructor tự động
 */
public record Contact(int id, String name, String phone, String email, String address) {
    // Constructor với xác thực
    public Contact {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Tên không được để trống");
        }
        if (phone == null || phone.isEmpty()) {
            throw new IllegalArgumentException("Số điện thoại không được để trống");
        }
    }
    
    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}