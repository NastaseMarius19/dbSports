package com.dbsummerschool.dbsports.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "teams")
@Getter
@Setter
@NoArgsConstructor
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int team_id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String typeOfSport;

    @OneToMany
    private Set<User> users;

    public Team(int team_id, String name, String typeOfSport, Set<User> users) {
        this.team_id = team_id;
        this.name = name;
        this.typeOfSport = typeOfSport;
        this.users = users;
    }

    @Override
    public String toString() {
        return "Team{" +
                "team_id=" + team_id +
                ", name='" + name + '\'' +
                ", typeOfSport='" + typeOfSport + '\'' +
                ", users=" + users +
                '}';
    }
}
