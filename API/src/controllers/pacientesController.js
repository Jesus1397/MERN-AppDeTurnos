const Paciente = require("../models/Paciente");

exports.nuevoCliente = async (req, res, next) => {
  const paciente = new Paciente(req.body);

  try {
    await paciente.save();
    res.json({ mensaje: "El cliente se agrego correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obtenerPaciente = async (req, res, next) => {
  let id = req.params.id;
  try {
    const paciente = await Paciente.findById(id);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizarPaciente = async (req, res, next) => {
  let id = req.params.id;
  try {
    const paciente = await Paciente.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    });
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarPaciente = async (req, res, next) => {
  let id = req.params.id;
  try {
    await Paciente.findOneAndDelete({ _id: id });
    res.json({ mensaje: "El paciente fue eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
