DROP TABLE IF EXISTS tournaments;
DROP TABLE IF EXISTS announcements;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS sports;

create table sports
(
    sport_id integer      not null
        primary key,
    name     varchar(255) not null
);

INSERT INTO sports (sport_id, name) VALUES (1,'football');
INSERT INTO sports (sport_id, name) VALUES (2,'basketball');

create table teams
(
    team_id       integer      not null
        primary key,
    name          varchar(255) not null,
    type_of_sport varchar(255) not null
);

INSERT INTO teams (team_id, name, type_of_sport) VALUES (1,'Football team', 'football');
INSERT INTO teams (team_id, name, type_of_sport) VALUES (2,'Bascketball team', 'bascketball');

create table tournaments
(
    tournament_id   integer      not null
        primary key,
    end_date        timestamp    not null,
    name            varchar(255) not null,
    no_of_max_teams integer      not null,
    start_date      timestamp    not null,
    sport_sport_id  integer
        constraint fkbxuctdtq12g8734v74ncsf6pm
            references sports
);

INSERT INTO tournaments (tournament_id, end_date, name, no_of_max_teams, start_date, sport_sport_id) VALUES (1,'12/30/2022','Football tournament',5,'09/30/2022',1);
INSERT INTO tournaments (tournament_id, end_date, name, no_of_max_teams, start_date, sport_sport_id) VALUES (2,'12/30/2022','Bascketball tournament',5,'09/30/2022',2);

create table announcements
(
    announcement_id integer      not null
        primary key,
    description     varchar(255) not null,
    picture         oid,
    posting_user    varchar(255) not null,
    time_of_post    timestamp    not null,
    title           varchar(255) not null,
    sport_sport_id  integer
        constraint fk3cx6y583fgxqeamgr7vcmy0t6
            references sports
);

INSERT INTO announcements (announcement_id, description, picture, posting_user, time_of_post, title, sport_sport_id) VALUES (1,'description', '0','Andrei', '09/30/2022', 'title1',1);
INSERT INTO announcements (announcement_id, description, picture, posting_user, time_of_post, title, sport_sport_id) VALUES (2,'description', '0','Andrei', '09/30/2022', 'title2',2);

create table users
(
    user_id  integer      not null
        primary key,
    email    varchar(255) not null,
    name     varchar(255) not null,
    password varchar(255) not null,
    surname  varchar(255) not null,
    verification_code varchar(255),
    enabled boolean not null
);

INSERT INTO users (user_id, email, name, password, surname, verification_code, enabled) VALUES (1,'andrei.19@yahoo.com', 'Andrei', 'pass', 'Andrei', 'test', false);
INSERT INTO users (user_id, email, name, password, surname, verification_code, enabled) VALUES (2,'maria.1@yahoo.com', 'Maria', 'pass', 'Maria', 'test', false);