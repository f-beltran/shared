module.exports = () => {
    const faker = require('faker');
    const estudiantes = { datos: [] };
    for (let i = 0; i < 22; i++) {
        estudiantes.datos.push({
            id: i + 1,
            nombre: faker.name.findName(),
            carrera: faker.name.jobTitle(),
            correoElectronico: faker.internet.email()
        })
    }
    const docentes = { datos: [] };
    for (let i = 0; i < 10; i++) {
        docentes.datos.push({
            id: i + 1,
            urlFoto: faker.image.people(),
            nombre: faker.name.findName(),
            correoElectronico: faker.internet.email(),
            profesion: faker.name.jobTitle()
        });
    }
    const profesiones = { datos: [] };
    for (let i = 0; i < 60; i++) {
        profesiones.datos.push({
            id: i + 1,
            profesion: faker.name.jobTitle()
        });
    }
    return { estudiantes, docentes, profesiones };
}
