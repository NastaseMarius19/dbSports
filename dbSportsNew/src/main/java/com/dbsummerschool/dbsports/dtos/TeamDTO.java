package com.dbsummerschool.dbsports.dtos;

import com.dbsummerschool.dbsports.model.User;
import lombok.Builder;

import java.util.List;
import java.util.Set;

@Builder
public class TeamDTO {

    private String name;

    private String typeOfSport;

    private List<String> usersEmails;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTypeOfSport() {
        return typeOfSport;
    }

    public void setTypeOfSport(String typeOfSport) {
        this.typeOfSport = typeOfSport;
    }

    public List<String> getUsersEmails() {
        return usersEmails;
    }

    public void setUsers(List<String> usersEmails) {
        this.usersEmails = usersEmails;
    }
}
