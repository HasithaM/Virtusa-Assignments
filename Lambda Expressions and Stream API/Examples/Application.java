import java.util.*;
import java.util.stream.Collectors;

public class Application {

    public static List<Student> getAllStudentList() {
        List<Student> students = new ArrayList<>();
        students.add(new Student("Hasitha", 75));
        students.add(new Student("Ruzaik", 85));
        students.add(new Student("Razmeen", 50));
        students.add(new Student("Alfar", 55));
        students.add(new Student("Ishan", 80));

        return students;
    }

    public static void comparator() {
        System.out.println("==========Comparator==========\n");

        List<Student> studentList = Application.getAllStudentList();

        Comparator<Student> studentComparator = (student1, student2) -> ((student1.getStudentMark() > student2.getStudentMark()) ? +1 : (student1.getStudentMark() < student2.getStudentMark()) ? -1 : 0);
        Collections.sort(studentList, studentComparator);

        System.out.println(studentList + "\n");
    }

    public static void filter() {
        System.out.println("==========Filter==========\n");

        List<Student> filteredStudents = Application.getAllStudentList()
                .stream()
                .filter(student -> student.getStudentName().contains("i"))
                .collect(Collectors.toList());

        System.out.println(filteredStudents + "\n");
    }

    public static void map() {
        System.out.println("==========Map==========\n");

        List<Student> changedStudents = Application.getAllStudentList()
                .stream()
                .filter(student -> student.getStudentMark() < 60)
                .map(student -> new Student("Idiot " + student.getStudentName(), student.getStudentMark()))
                .collect(Collectors.toList());

        System.out.println(changedStudents + "\n");
    }

    public static void sorting() {
        System.out.println("==========Sorting==========\n");

        List<Student> sortedStudents = Application.getAllStudentList()
                .stream()
                .sorted((student1, student2) -> new Integer(student1.getStudentName().length()).compareTo(student2.getStudentName().length()))
                .collect(Collectors.toList());

        System.out.println(sortedStudents + "\n");
    }

    public static void main(String[] args) {
        comparator();
        filter();
        map();
        sorting();
    }
}
