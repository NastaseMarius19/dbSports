package com.dbsummerschool.dbsports.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "announcements")
@Getter
@Setter
@NoArgsConstructor
public class Announcement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int announcement_id;

    @Column(nullable = false)
    private String postingUser;

    @Column(nullable = false)
    private Date timeOfPost;

    // or name of sport
    @ManyToOne
    private Sport sport;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] picture;

    public Announcement(String postingUser, Date timeOfPost, Sport sport, String title, String description, byte[] picture) {
        this.postingUser = postingUser;
        this.timeOfPost = timeOfPost;
        this.sport = sport;
        this.title = title;
        this.description = description;
        this.picture = picture;
    }

    @Override
    public String toString() {
        return "Announcement{" +
                "announcement_id=" + announcement_id +
                ", postingUser='" + postingUser + '\'' +
                ", timeOfPost=" + timeOfPost +
                ", sport=" + sport +
                '}';
    }
}
