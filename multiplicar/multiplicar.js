const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((res, rej) => {
        let data = ''
        for (i = 1; i <= 10; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
            console.log(data);
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) { rej(err) } else { res(`Fue creado el archivo tabla-${base}.txt`) }
        });

    });
};

let listadoMultiplicar = (base, limite) => {
    return new Promise((res, rej) => {

        let tablas = []

        for (j = base; j <= limite; j++) {

            let data = []
            for (i = 1; i <= 10; i++) {
                data.push(`${j} * ${i} = ${j*i}\n`);
            }
            tablas.push(data)
        }
        console.log(tablas);

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, tablas, (err) => {
            if (err) { rej(err) } else { res(`Fue creado el archivo tabla-${base}.txt hasta la del tabla-${limite}`) }
        });
    });
}
module.exports = {
    crearArchivo,
    listadoMultiplicar
}