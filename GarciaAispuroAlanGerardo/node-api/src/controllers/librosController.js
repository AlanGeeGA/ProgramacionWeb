const connection = require('../config/connection');
const { connect } = require('../routes/librosRoute');

function listar(req, res) {
    if(connection) {
        let sql = 'select * from libros';
        connection.query(sql, (err, libros) => {
            if(err) {
                res.json(err);
            } else {
                console.log(libros);
                res.json(libros);
            }
        });
    }
}

function obtenerLibro(req, res) {
    if(connection) {
        const { id } = req.params;
        let sql = `select * from libros where id = ${connection.escape(id)}`;
        connection.query(sql, (err, libro) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(libro === undefined || libro.length === 0)
                    mensaje = "Libro no encontrado";
                res.json({error: false, data: libro, mensaje: mensaje});
            }
        });
    }
}

function crear(req, res) {
    if(connection) {
        const libro = req.body;

        if(!libro.titulo) {
            return res.status(400).send({error: true, mensaje: "El titulo del libro es obligatorio"});
        }

        if(!libro.autor) {
            return res.status(400).send({error: true, mensaje: "El autor del libro es obligatorio"});
        }

        if(libro.publicacion && libro.publicacion.length !== 4) {
            return res.status(400).send({error: true, mensaje: "El año de publicacion debe ser de 4 caracteres"});
        }

        let sql = 'insert into libros set ?';
        connection.query(sql, [libro], (err, rows) => {
            if(err) {
                res.json(err);
            } else {
                res.json({error: false, date: rows, mensaje: "Libro creado con exito"});
            }
        });
    }
}

module.exports = {
    listar,
    obtenerLibro,
    crear,
}