DROP TABLE IF EXISTS tournaments_teams;
DROP TABLE IF EXISTS teams_users;
DROP TABLE IF EXISTS users_sport_list;
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

create table users
(
    user_id  integer      not null
        primary key,
    email    varchar(255) not null,
    name     varchar(255) not null,
    password varchar(255) not null,
    surname  varchar(255) not null
);

INSERT INTO users (user_id, email, name, password, surname) VALUES (1,'andrei.19@yahoo.com', 'Andrei', 'pass', 'Andrei');
INSERT INTO users (user_id, email, name, password, surname) VALUES (2,'maria.1@yahoo.com', 'Maria', 'pass', 'Maria');

create table teams
(
    team_id       integer      not null
        primary key,
    name          varchar(255) not null,
    type_of_sport varchar(255) not null
);

INSERT INTO teams (team_id, name, type_of_sport) VALUES (1,'Football team', 'football');
INSERT INTO teams (team_id, name, type_of_sport) VALUES (2,'Bascketball team', 'bascketball');

create table announcements
(
    announcement_id integer      not null
        primary key,
    posting_user    varchar(255) not null,
    time_of_post    timestamp    not null,
    sport_sport_id  integer
        constraint fk3cx6y583fgxqeamgr7vcmy0t6
            references sports
);

INSERT INTO announcements (announcement_id, posting_user, time_of_post, sport_sport_id) VALUES (1,'Andrei', '09/30/2022',1);
INSERT INTO announcements (announcement_id, posting_user, time_of_post, sport_sport_id) VALUES (2,'Andrei', '09/30/2022',2);

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

create table users_sport_list
(
    user_user_id        integer not null
        constraint fk496e0agnfhtb4lof9pt4tssj4
            references users,
    sport_list_sport_id integer not null
        constraint fkqfcw2g95wafeebj8opn3sxxnq
            references sports,
    primary key (user_user_id, sport_list_sport_id)
);

INSERT INTO users_sport_list (user_user_id, sport_list_sport_id) VALUES (1,1);
INSERT INTO users_sport_list (user_user_id, sport_list_sport_id) VALUES (1,2);
INSERT INTO users_sport_list (user_user_id, sport_list_sport_id) VALUES (2,2);

create table teams_users
(
    team_team_id  integer not null
        constraint fkhkyfoqdgcmifeduoqqm99guc
            references teams,
    users_user_id integer not null
        constraint uk_d9s95egmc8t5x9t6gigu98xqw
            unique
        constraint fk7bl7qpb58wraa0bfrw7m7btci
            references users,
    primary key (team_team_id, users_user_id)
);

INSERT INTO teams_users (team_team_id, users_user_id) VALUES (1,1);
INSERT INTO teams_users (team_team_id, users_user_id) VALUES (1,2);

create table tournaments_teams
(
    tournament_tournament_id integer not null
        constraint fkc7qsvcstl5d9fr345ul8jk00f
            references tournaments,
    teams_team_id            integer not null
        constraint uk_l10x0w11y9si900xx4al2oojy
            unique
        constraint fkrq2pupd6svs3vnuysq08frilw
            references teams,
    primary key (tournament_tournament_id, teams_team_id)
);

INSERT INTO tournaments_teams (tournament_tournament_id, teams_team_id) VALUES (1,1);