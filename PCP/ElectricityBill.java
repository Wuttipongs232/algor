import java.util.Scanner;

public class ElectricityBill {

    public static double calculateElectricityBill(double units) {
        double serviceFee = 50.0;
        double totalCost = 0.0;

        if (units <= 150) {
            totalCost = units * 3.50;
        } else if (units <= 400) {
            // First 150 units at 3.50, the rest at 4.20
            totalCost = (150 * 3.50) + ((units - 150) * 4.20);
        } else {
            // First 150 units at 3.50, next 250 units at 4.20, the rest at 5.00
            totalCost = (150 * 3.50) + (250 * 4.20) + ((units - 400) * 5.00);
        }

        return totalCost + serviceFee;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.print("Enter electricity units used (kWh): ");
            if (scanner.hasNextDouble()) {
                double unitsInput = scanner.nextDouble();
                if (unitsInput < 0) {
                    System.out.println("Units cannot be negative.");
                } else {
                    double bill = calculateElectricityBill(unitsInput);
                    System.out.printf("Total electricity bill: %,.2f Baht (including 50 Baht service fee)%n", bill);
                }
            } else {
                System.out.println("Invalid input. Please enter a number.");
            }
        } catch (Exception e) {
            System.out.println("An error occurred.");
        } finally {
            scanner.close();
        }
    }
}
