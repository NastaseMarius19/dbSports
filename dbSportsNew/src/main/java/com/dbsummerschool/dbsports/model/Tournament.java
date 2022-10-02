package com.dbsummerschool.dbsports.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "tournaments")
@Getter
@Setter
@NoArgsConstructor
public class Tournament {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int tournament_id;

    @Column(nullable = false)
    private String name;

    private int noOfMaxTeams;

    @Column(nullable = false)
    private Date startDate;

    @Column(nullable = false)
    private Date endDate;

    @ManyToOne
    private Sport sport;

    @OneToMany
    private Set<Team> teams;

    public Tournament(int tournament_id, String name, int noOfMaxTeams, Date startDate, Date endDate, Sport sport, Set<Team> teams) {
        this.tournament_id = tournament_id;
        this.name = name;
        this.noOfMaxTeams = noOfMaxTeams;
        this.startDate = startDate;
        this.endDate = endDate;
        this.sport = sport;
        this.teams = teams;
    }

    @Override
    public String toString() {
        return "Tournament{" +
                "tournament_id=" + tournament_id +
                ", name='" + name + '\'' +
                ", noOfMaxTeams=" + noOfMaxTeams +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", sport=" + sport +
                ", teams=" + teams +
                '}';
    }
}
