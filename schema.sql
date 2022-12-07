create database modulosmysql;
use modulosmysql;

create table modulos (
    id int unsigned auto_increment primary key,
    nombre varchar(255)
);

create table estudiantes (
    id int unsigned auto_increment primary key,
    nombre varchar(255)
);

create table modulos_estudiantes(
    id_modulo int unsigned,
    id_estudiante int unsigned,
    curso varchar (255),
    calificacion int unsigned,
    primary key(id_modulo, id_estudiante, curso)
    foreign key(id_modulo) references modulos(id)
    foreign key(id_estudiante) references estudiantes(id)
);
