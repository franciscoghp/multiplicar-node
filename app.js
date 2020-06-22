const { crearArchivo, listadoMultiplicar } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv



let comando = argv._[0]

switch (comando) {
    case 'listar':
        listadoMultiplicar(argv.base, argv.limite).then(archivo => console.log(archivo))
        break
    case 'crear':
        crearArchivo(argv.base).then(archivo => console.log(`El archivo ${archivo} fue creado`));
        break
    default:
        console.log('El comando no es válido')
}