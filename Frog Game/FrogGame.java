import java.util.Scanner;

public class FrogGame {

    private static int firstJump = 5;
    private static int firstWait = 1;

    private static int secondJump = 3;
    private static int secondWait = 2;

    private static int thirdJump = 1;
    private static int thirdWait = 5;

    public static void main(String[] args) {
        Scanner scanner = null;

        try {
            scanner = new Scanner(System.in);

            System.out.println("===============");
            System.out.println("===FROG GAME===");
            System.out.println("===============");
            System.out.println();

            System.out.println("Choose one option from the following options and enter the number");
            System.out.println();

            System.out.println("1 Enter Meters to get the Duration in Seconds");
            System.out.println("2 Enter Duration to get the Meters");
            System.out.println("3 Quit Game");
            System.out.println();

            int userEnteredNumber = 0;

            if (scanner.hasNextInt()) {
                userEnteredNumber = scanner.nextInt();
            } else {
                System.out.println("Please enter a valid number");
            }

            if (userEnteredNumber != 0) {
                switch (userEnteredNumber) {
                    case 1:
                        System.out.print("Enter the Meters : ");
                        
                        int meters = scanner.nextInt();
                        checkMeters(meters);
                        break;
                    case 2:
                        System.out.print("Enter the Duration : ");
                        
                        int duration = scanner.nextInt();
                        checkDuration(duration);
                        break;
                    case 3:
                        System.exit(0);
                    default:
                        break;
                }
            }
        } finally {
            scanner.close();
        }
    }

    private static void checkMeters(int meters) {
        int modulus = meters % (firstJump + secondJump + thirdJump);

        int waitingSeconds = 0;
        int totalSeconds = 0;
        int nextMeter = 5;

        while (modulus > 0) {
            waitingSeconds = (nextMeter == firstJump) ? 1 : (nextMeter == secondJump) ? 2 : (nextMeter == thirdJump) ? 5 : 0;
            modulus = (nextMeter == firstJump) ? (modulus - firstJump) : (nextMeter == secondJump) ? (modulus - secondJump) : (modulus - thirdJump);
            nextMeter = (waitingSeconds == 1) ? 3 : (waitingSeconds == 2) ? 1 : (waitingSeconds >= 5) ? 5 : 0;

            totalSeconds += waitingSeconds;
        }

        int totalJumps = meters / (firstJump + secondJump + thirdJump);
        int totalDuration = totalJumps * (firstWait + secondWait + thirdWait);

        System.out.println("Frog took : " + (totalDuration + totalSeconds) + " Seconds to Jump " + meters + " Meters");
    }

    private static void checkDuration(int duration) {
        int modulus = duration % (firstWait + secondWait + thirdWait);

        int jumpedMeters = 0;
        int totalMeters = 0;
        int nextWait = 1;

        while (modulus > 0) {
            jumpedMeters = (nextWait == firstWait) ? 5 : (nextWait == secondWait) ? 3 : (nextWait == thirdWait) ? 1 : 0;
            modulus = (nextWait == firstWait) ? (modulus - firstWait) : (nextWait == secondWait) ? (modulus - secondWait) : (modulus - thirdWait);
            nextWait = (jumpedMeters == 5) ? 2 : (jumpedMeters == 3) ? 5 : (jumpedMeters >= 1) ? 1 : 0;

            totalMeters += jumpedMeters;
        }

        int totalTime = duration / (firstWait + secondWait + thirdWait);
        int totalJumpedMeters = totalTime * (firstJump + secondJump + thirdJump);

        System.out.println("Frog Jumped : " + (totalJumpedMeters + totalMeters) + " Meters in " + duration + " Seconds");
    }
}
