/*
ALUMNO: ALAN GERARDO GARCIA AISPURO
EXAMEN UNIDAD 3 Y 4
*/

const connection = require('../config/connection');
const { connect } = require('../routes/personasRoute');

function listar(req, res) {
    if(connection) {
        let sql = 'select * from personas';
        connection.query(sql, (err, personas) => {
            if(err) {
                res.json(err);
            } else {
                console.log(personas);
                res.json(personas);
            }
        });
    }
}

function obtenerPersona(req, res) {
    if(connection) {
        const { id } = req.params;
        let sql = `select * from personas where id = ${connection.escape(id)}`;
        connection.query(sql, (err, persona) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(persona === undefined || persona.length === 0)
                    mensaje = "persona no encontrada";
                res.json({error: false, data: persona, mensaje: mensaje});
            }
        });
    }
}

function crear(req, res) {
    if(connection) {
        const persona = req.body;

        if(!persona.nombre) {
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"});
        }

        if(persona.telefono && persona.telefono.length !== 10) {
            return res.status(400).send({error: true, mensaje: "La logntidud del telefono debe ser de 10 caracteres"});
        }

        let sql = 'INSERT INTO personas set ?';
        connection.query(sql, [persona], (err, rows) => { // El (err, rows) es la función de callback
            if(err) {
                res.json(err);
            } else {
                res.json({error: false, date: rows, mensaje: "Persona creada con exito"});
            }
        });
    }
}

function editar(req, res) {
    if(connection) {
        const { id } = req.params; // Si fuera id sin la llaves sería req.params.id
        const persona = req.body;
        let sql = 'UPDATE personas set ? WHERE id = ?';
        connection.query(sql, [persona, id], (err, rows) => {
            if(err){
                res.json(err);
            } else {
                let mensaje = "";
                if(rows.changedRows === 0)
                    mensaje = "La información es la misma";
                else
                    mensaje = "Persona identificada con exito";
                res.json({error: false, data: rows, mensaje});            
            }
        });
    }
}

function eliminar(req, res) { // Parametros request y respond
    if(connection) {
        const { id } = req.params;
        let sql = 'DELETE FROM personas WHERE id = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(rows.affectedRows === 0)
                    mensaje = "Persona no encontrada";
                else
                    mensaje = "Persona eliminada con exito";
                res.json({error: false, data: rows, mensaje});
            }
        });
    }
}

module.exports = {
    listar,
    obtenerPersona,
    crear,
    editar,
    eliminar
}