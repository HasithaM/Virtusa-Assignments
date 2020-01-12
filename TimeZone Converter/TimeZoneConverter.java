import java.time.*;
import java.util.Scanner;

public class TimeZoneConverter {
	
	public static void main(String[] args) {
		int year, month, date, hour, minutes, seconds;

        Scanner scanner = new Scanner(System.in);
		
		System.out.print("Enter Year : ");
        year = scanner.nextInt();

        System.out.print("Enter Month : ");
        month = scanner.nextInt();

        System.out.print("Enter Date : ");
        date = scanner.nextInt();

        System.out.print("Enter Hour (24 Hour Format) : ");
        hour = scanner.nextInt();

        System.out.print("Enter Minutes : ");
        minutes = scanner.nextInt();

        System.out.print("Enter Seconds : ");
        seconds = scanner.nextInt();

        System.out.println();
		
		LocalDateTime localDateTime = LocalDateTime.of(year, Month.of(month), date, hour, minutes, seconds);

        ZoneId kolkataZoneId = ZoneId.of("Asia/Kolkata");
        ZonedDateTime asiaZonedDateTime = localDateTime.atZone(kolkataZoneId);
        System.out.println("Date Time (Sri Lanka - GMT) : " + asiaZonedDateTime);

        ZoneId losAngelesZoneId = ZoneId.of("America/Los_Angeles");
        ZonedDateTime americaZonedDateTime = asiaZonedDateTime.withZoneSameInstant(losAngelesZoneId);
        System.out.println("Date Time (Los Angeles - PST) : " + americaZonedDateTime);

        ZoneId utcZoneId = ZoneId.of("UTC");
        ZonedDateTime utcDateTime = asiaZonedDateTime.withZoneSameInstant(utcZoneId);
        System.out.println("Date Time (UTC) : " + utcDateTime);
	}
}
