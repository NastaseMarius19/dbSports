package com.dbsummerschool.dbsports.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "sports")
@Getter
@Setter
@NoArgsConstructor
public class Sport {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int sport_id;

    @Column(nullable = false)
    private String name;

    public Sport(int sport_id, String name) {
        this.sport_id = sport_id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Sport{" +
                "sport_id=" + sport_id +
                ", name='" + name + '\'' +
                '}';
    }
}
