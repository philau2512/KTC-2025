import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        int choice;
        do {
            showMenu();
            System.out.print("Chọn chức năng: ");
            choice = Integer.parseInt(scanner.nextLine());
            switch (choice) {
                case 1:
                    System.out.println("===== Tính tiền điện cuối tháng =====");

                    System.out.print("Nhập giá điện: ");
                    double price = Double.parseDouble(scanner.nextLine());

                    System.out.print("Nhập số điện tiêu thụ: ");
                    float number = Float.parseFloat(scanner.nextLine());

                    System.out.println("Tổng tiền điện cuối tháng: " + (price * number) + " VND");
                    break;
                case 2:
                    System.out.println("===== Tính tiền taxi cuối tháng =====");

                    System.out.print("Nhập số km đã đi: ");
                    float km = Float.parseFloat(scanner.nextLine());

                    System.out.print("Nhập giá trên 1 km: ");
                    float pricePerKm = Float.parseFloat(scanner.nextLine());

                    System.out.println("Tổng tiền taxi cuối tháng: " + (km * pricePerKm) + " VND");
                    break;
                case 3:
                    System.out.println("===== Tính tiền lương cuối tháng (thuế 15%) =====");

                    System.out.print("Nhập số giờ làm việc: ");
                    int hours = Integer.parseInt(scanner.nextLine());

                    System.out.print("Nhập mức lương/1h: ");
                    float salaryPerHour = Float.parseFloat(scanner.nextLine());

                    float salary = hours * salaryPerHour;

                    System.out.println("Tổng tiền lương cuối tháng: " + salary + " VND");
                    System.out.println("Tổng tiền lương cuối tháng (đã trừ 15% thuế): " + (salary - 0.15 * salary) + " VND");
                    break;
                case 4:
                    System.out.println("===== Tính tổng thu nhập sau khi chi tiêu cuối tháng =====");

                    System.out.print("Nhập số tiền thu nhập: ");
                    float income = Float.parseFloat(scanner.nextLine());

                    System.out.print("Nhập số tiền chi tiêu: ");
                    float expenses = Float.parseFloat(scanner.nextLine());

                    System.out.println("Tổng thu nhập sau khi chi tiêu: " + (income - expenses) + " VND");
                    break;
                default:
                    System.out.println("Cảm ơn đã dùng chương trình");
                    break;
            }
        } while (choice >= 1 && choice <= 4);
    }

    public static void showMenu() {
        System.out.println("1. Tính tiền điện cuối tháng");
        System.out.println("2. Tính tiền taxi cuối tháng (giả sử: đi 1 lần/ tháng)");
        System.out.println("3. Tính tiền lương cuối tháng (giả sử: thuế = 15%)");
        System.out.println("4. Tính tổng thu nhập sau khi chi tiêu cuối tháng");
    }
}
