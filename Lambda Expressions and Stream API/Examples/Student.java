public class Student {

    private String studentName;
    private int studentMark;
    
    public Student(String studentName, int studentMark) {
        this.studentName = studentName;
        this.studentMark = studentMark;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public int getStudentMark() {
        return studentMark;
    }

    public void setStudentMark(int studentMark) {
        this.studentMark = studentMark;
    }

    @Override
    public String toString() {
        return "Student{" + "Student Name = " + studentName + ", Student Mark = " + studentMark + '}';
    }
}