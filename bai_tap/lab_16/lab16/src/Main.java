import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    static Scanner scanner = new Scanner(System.in);

    static ArrayList<Contact> contactList = new ArrayList<>();

    static {
        contactList.add(new Contact(1, "John", "1234567890", "john@example.com", "HCM"));
        contactList.add(new Contact(2, "Alice", "0987654321", "alice@example.com", "HCM"));
        contactList.add(new Contact(3, "Bob", "1122345678", "bob@example.com", "HCM"));
    }


    public static void main(String[] args) {
        int choice;
        do {
            showMenu();
            choice = Integer.parseInt(scanner.nextLine());

            switch (choice) {
                case 1:
                    showContactList();
                    break;
                case 2:
                    searchContact();
                    break;
                case 3:
                    addContact();
                    break;
                case 4:
                    updateContact();
                    break;
                case 5:
                    deleteContact();
                    break;
                default:
                    System.out.println("Cảm ơn bạn đã dùng chương trình !");
            }

        } while (choice >= 1 && choice <= 5);

    }

    private static void deleteContact() {
        System.out.print("Nhập id cần xóa: ");
        int idToDelete = Integer.parseInt(scanner.nextLine());
        boolean isFound = false;
        for (int i = 0; i < contactList.size(); i++) {
            if (contactList.get(i).getId() == idToDelete) {
                contactList.remove(i);
                isFound = true;
                System.out.println("Xóa liên lạc thành công !");
                break;
            }
        }
        if (!isFound) {
            System.out.println("Không tìm thấy liên lạc với id " + idToDelete);
        }
    }

    private static void updateContact() {
        System.out.print("Nhập id cần sửa: ");
        int idToUpdate = Integer.parseInt(scanner.nextLine());
        boolean isFound = false;
        for (Contact contact : contactList) {
            if (contact.getId() == idToUpdate) {
                System.out.print("Nhập tên liên lạc mới: ");
                String name = scanner.nextLine();
                System.out.print("Nhập số điện thoại mới: ");
                String phone = scanner.nextLine();
                System.out.print("Nhập email mới: ");
                String email = scanner.nextLine();
                System.out.print("Nhập địa chỉ mới: ");
                String address = scanner.nextLine();
                contact.setName(name);
                contact.setPhone(phone);
                contact.setEmail(email);
                contact.setAddress(address);
                isFound = true;
                System.out.println("Sửa liên lạc thành công !");
                break;
            }
        }
        if (!isFound) {
            System.out.println("Không tìm thấy liên lạc với id " + idToUpdate);
        }
    }

    private static void addContact() {
        int newId = contactList.size() + 1;
        System.out.print("Nhập tên liên lạc: ");
        String name = scanner.nextLine();
        System.out.print("Nhập số điện thoại: ");
        String phone = scanner.nextLine();
        System.out.print("Nhập email: ");
        String email = scanner.nextLine();
        System.out.print("Nhập địa chỉ: ");
        String address = scanner.nextLine();
        Contact newContact = new Contact(newId, name, phone, email, address);
        contactList.add(newContact);
        System.out.println("Thêm liên lạc thành công !");
    }

    private static void searchContact() {
        System.out.print("Nhập mã liên lạc cần tìm: ");
        int idToSearch = Integer.parseInt(scanner.nextLine());
        boolean isFound = false;
        for (Contact contact : contactList) {
            if (contact.getId() == idToSearch) {
                System.out.println(contact.toString());
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            System.out.println("Không tìm thấy liên lạc với id " + idToSearch);
        }
    }

    private static void showContactList() {
        System.out.println("Danh sách liên lạc");
        for (Contact contact : contactList) {
            System.out.println(contact.toString());
        }
    }

    public static void showMenu() {
        System.out.println("1. Hiển thị danh sách liên lạc");
        System.out.println("2. Tìm kiếm liên lạc theo mã liên lạc");
        System.out.println("3. Thêm mới liên lạc");
        System.out.println("4. Sửa thông tin liên lạc");
        System.out.println("5. Xóa thông tin liên lạc");
        System.out.print("-> Mời bạn chọn chức năng [1->5] hoặc nhấn phím khác để thoát: ");
    }
}