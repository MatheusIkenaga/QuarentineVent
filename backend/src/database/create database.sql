create database QUARENTINEWHISPER;

use QUARENTINEWHISPER;

create table login
(user_id  int not null auto_increment,
user_nickname varchar (40),
user_password varchar (60),
user_email varchar(60),
user_validation boolean,
primary key (user_id));

create table post
(post_id int not null auto_increment,
post_author int,
post_title varchar (30),
post_description varchar (999),
post_created datetime default now(),
post_edited datetime,
primary key(post_id),
constraint author_post foreign key(post_author) references login (user_id));

create table post_comment(
comment_id int not null auto_increment,
comment_description varchar(999),
comment_created datetime default now(),
comment_author int,
comment_post_id int,  -- primary key of table post
primary key(comment_id),
constraint original_post foreign key (comment_post_id) references post(post_id))
