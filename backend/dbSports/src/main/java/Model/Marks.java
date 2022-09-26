package Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name = "marks")
@Getter
@Setter
@NoArgsConstructor
public class Marks {
    @Id
    private int id;

    private int student_id;

    private int mark;

    private String subject;

    public Marks(int id, int student_id, int mark, String subject) {
        this.id = id;
        this.student_id = student_id;
        this.mark = mark;
        this.subject = subject;
    }

    @Override
    public String toString() {
        return "Marks{" +
                "id=" + id +
                ", student_id=" + student_id +
                ", mark=" + mark +
                ", subject='" + subject + '\'' +
                '}';
    }
}
