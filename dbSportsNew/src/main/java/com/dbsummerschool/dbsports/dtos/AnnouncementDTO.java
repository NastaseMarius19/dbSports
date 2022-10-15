package com.dbsummerschool.dbsports.dtos;

public class AnnouncementDTO {
    public String title;
    private String nameUser;
    private String sportName;
    private String timeOfPost;
    private String description;
    private byte[] picture;

    public String getTitle() {
        return title;
    }

    public String getNameUser() {
        return nameUser;
    }

    public String getSportName() {
        return sportName;
    }

    public String getTimeOfPost() {
        return timeOfPost;
    }

    public String getDescription() {
        return description;
    }

    public byte[] getPicture() {
        return picture;
    }
}
