create database crud;
use crud;

create table libros (
    id INT NOT NULL auto_increment,
    titulo varchar(80) NOT NULL,
    autor varchar(100) NOT NULL,
    paginas varchar(4),
    publicacion varchar(4),
    primary key(id)
);

insert into libros (titulo, autor, paginas, publicacion) values('El principito', 'Alan Gerardo', '134', '1944');

select * from libros