import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class Main {
    static final Scanner scanner = new Scanner(System.in);

    static final List<Contact> contactList = new ArrayList<>(List.of(
        new Contact(1, "John", "1234567890", "john@example.com", "HCM"),
        new Contact(2, "Alice", "0987654321", "alice@example.com", "HCM"),
        new Contact(3, "Bob", "1122345678", "bob@example.com", "HCM")
    ));

    public static void main(String[] args) {
        // Sử dụng enhanced switch expression (Java 14+)
        int choice;
        do {
            showMenu();
            choice = getValidNumberInput("Hãy nhập một lựa chọn hợp lệ");
            
            switch (choice) {
                case 1 -> showContactList();
                case 2 -> searchContact();
                case 3 -> addContact();
                case 4 -> updateContact();
                case 5 -> deleteContact();
                case 6 -> sortContacts();
                case 7 -> filterContacts();
                default -> System.out.println("Cảm ơn bạn đã dùng chương trình!");
            }
        } while (choice >= 1 && choice <= 7);
    }

    private static void deleteContact() {
        System.out.print("Nhập id cần xóa: ");
        int idToDelete = getValidNumberInput("Hãy nhập một ID hợp lệ");
        
        // Sử dụng stream API và method references (Java 8+)
        boolean removed = contactList.removeIf(contact -> contact.id() == idToDelete);
        
        if (removed) {
            System.out.println("Xóa liên lạc thành công!");
        } else {
            System.out.println("Không tìm thấy liên lạc với id " + idToDelete);
        }
    }

    private static void updateContact() {
        System.out.print("Nhập id cần sửa: ");
        int idToUpdate = getValidNumberInput("Hãy nhập một ID hợp lệ");
        
        // Sử dụng Stream API để tìm contact
        var contactOpt = contactList.stream()
                .filter(c -> c.id() == idToUpdate)
                .findFirst();
        
        // Sử dụng Optional API (Java 8+)
        if (contactOpt.isPresent()) {
            Contact oldContact = contactOpt.get();
            System.out.print("Nhập tên liên lạc mới: ");
            String name = scanner.nextLine();
            System.out.print("Nhập số điện thoại mới: ");
            String phone = scanner.nextLine();
            System.out.print("Nhập email mới: ");
            String email = scanner.nextLine();
            System.out.print("Nhập địa chỉ mới: ");
            String address = scanner.nextLine();
            
            // Sử dụng phương thức with của record để tạo bản sao bất biến mới
            Contact newContact = new Contact(oldContact.id(), 
                                            name.isEmpty() ? oldContact.name() : name, 
                                            phone.isEmpty() ? oldContact.phone() : phone, 
                                            email.isEmpty() ? oldContact.email() : email, 
                                            address.isEmpty() ? oldContact.address() : address);
            
            // Thay thế contact cũ bằng mới
            contactList.set(contactList.indexOf(oldContact), newContact);
            System.out.println("Sửa liên lạc thành công!");
        } else {
            System.out.println("Không tìm thấy liên lạc với id " + idToUpdate);
        }
    }

    private static void addContact() {
        // Sử dụng streams để tìm id lớn nhất
        int newId = contactList.stream()
                .mapToInt(Contact::id)
                .max()
                .orElse(0) + 1;
                
        System.out.print("Nhập tên liên lạc: ");
        String name = scanner.nextLine();
        System.out.print("Nhập số điện thoại: ");
        String phone = scanner.nextLine();
        System.out.print("Nhập email: ");
        String email = scanner.nextLine();
        System.out.print("Nhập địa chỉ: ");
        String address = scanner.nextLine();
        
        // Sử dụng try-catch để xử lý ngoại lệ từ constructor của record
        try {
            Contact newContact = new Contact(newId, name, phone, email, address);
            contactList.add(newContact);
            System.out.println("Thêm liên lạc thành công!");
        } catch (IllegalArgumentException e) {
            System.out.println("Lỗi: " + e.getMessage());
        }
    }

    private static void searchContact() {
        System.out.print("Nhập mã liên lạc cần tìm: ");
        int idToSearch = getValidNumberInput("Hãy nhập một ID hợp lệ");
        
        // Sử dụng Stream API và Optional (Java 8+) 
        contactList.stream()
                .filter(contact -> contact.id() == idToSearch)
                .findFirst()
                .ifPresentOrElse(
                        System.out::println,
                        () -> System.out.println("Không tìm thấy liên lạc với id " + idToSearch)
                );
    }

    private static void showContactList() {
        System.out.println("Danh sách liên lạc");
        
        // Sử dụng forEach và method reference (Java 8+)
        if (contactList.isEmpty()) {
            System.out.println("Danh sách liên lạc trống");
        } else {
            contactList.forEach(System.out::println);
        }
    }
    
    // Tính năng mới: Sắp xếp danh bạ
    private static void sortContacts() {
        if (contactList.isEmpty()) {
            System.out.println("Danh sách liên lạc trống");
            return;
        }
        
        // Sử dụng Text Block (Java 15+)
        String menuSort = """
                Sắp xếp theo:
                1. ID
                2. Tên
                3. Địa chỉ
                -> Chọn tiêu chí sắp xếp: """;
        System.out.print(menuSort);
        
        int sortChoice = getValidNumberInput("Hãy nhập một lựa chọn sắp xếp hợp lệ");
        
        // Sử dụng switch expression để trả về trực tiếp giá trị (Java 14+)
        Comparator<Contact> comparator = switch (sortChoice) {
            case 1 -> Comparator.comparing(Contact::id);
            case 2 -> Comparator.comparing(Contact::name);
            case 3 -> Comparator.comparing(Contact::address);
            default -> {
                System.out.println("Lựa chọn không hợp lệ, sắp xếp theo ID");
                yield Comparator.comparing(Contact::id);
            }
        };
        
        // Sử dụng stream để tạo danh sách mới đã sắp xếp và in ra
        System.out.println("Danh sách sau khi sắp xếp:");
        contactList.stream()
                .sorted(comparator)
                .forEach(System.out::println);
    }
    
    // Tính năng mới: Lọc danh bạ theo điều kiện
    private static void filterContacts() {
        if (contactList.isEmpty()) {
            System.out.println("Danh sách liên lạc trống");
            return;
        }
        
        // Sử dụng Text Block (Java 15+)
        String menuFilter = """
                Lọc theo:
                1. Địa chỉ
                2. Tên chứa từ khóa
                -> Chọn tiêu chí lọc: """;
        System.out.print(menuFilter);
        
        int filterChoice = getValidNumberInput("Hãy nhập một lựa chọn lọc hợp lệ");
        
        // Sử dụng Pattern Matching cho switch (Java 17+)
        Predicate<Contact> filterPredicate = switch (filterChoice) {
            case 1 -> {
                System.out.print("Nhập địa chỉ cần lọc: ");
                String address = scanner.nextLine();
                yield contact -> contact.address().equalsIgnoreCase(address);
            }
            case 2 -> {
                System.out.print("Nhập từ khóa tên cần tìm: ");
                String keyword = scanner.nextLine();
                yield contact -> contact.name().toLowerCase().contains(keyword.toLowerCase());
            }
            default -> {
                System.out.println("Lựa chọn không hợp lệ, hiển thị tất cả");
                yield contact -> true;
            }
        };
        
        // Sử dụng Streams để lọc và hiển thị
        List<Contact> filtered = contactList.stream()
                .filter(filterPredicate)
                .toList();
        
        if (filtered.isEmpty()) {
            System.out.println("Không có liên lạc nào phù hợp với điều kiện lọc");
        } else {
            System.out.println("Danh sách liên lạc sau khi lọc:");
            filtered.forEach(System.out::println);
        }
    }

    // Phương thức helper để nhập và xác thực số nguyên
    private static int getValidNumberInput(String errorMessage) {
        try {
            return Integer.parseInt(scanner.nextLine());
        } catch (NumberFormatException e) {
            System.out.println(errorMessage);
            return -1; // Giá trị không hợp lệ
        }
    }

    public static void showMenu() {
        // Sử dụng Text Block (Java 15+) để hiển thị menu rõ ràng hơn
        String menu = """
                1. Hiển thị danh sách liên lạc
                2. Tìm kiếm liên lạc theo mã liên lạc
                3. Thêm mới liên lạc
                4. Sửa thông tin liên lạc
                5. Xóa thông tin liên lạc
                6. Sắp xếp danh bạ
                7. Lọc danh bạ
                -> Mời bạn chọn chức năng [1->7] hoặc nhấn phím khác để thoát: """;
        System.out.print(menu);
    }
}