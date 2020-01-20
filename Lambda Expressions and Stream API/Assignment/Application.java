import java.util.*;
import java.util.stream.Collectors;

public class Application {

    public static Map<String, Integer> getAllStudents() {
        Map<String, Integer> students = new HashMap<String, Integer>();
        students.put("Hasitha", 75);
        students.put("Ruzaik", 85);
        students.put("Razmeen", 50);
        students.put("Alfar", 55);
        students.put("Ishan", 80);

        return students;
    }

    public static void sorting() {
        System.out.println("==========Sorting==========\n");

        List<String> studentList = Application.getAllStudents()
                .keySet()
                .stream()
                .filter(student -> Application.getAllStudents().get(student) > 60)
				.sorted()
                .collect(Collectors.toList());

        System.out.println(studentList);
    }

    public static void main(String[] args) {
        sorting();
    }
}
