// UniBot - Sistema Asesor Académico
// Fase 2: prototipo estructurado en JavaScript
// Commit 1: menú principal dual

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

/**
 * Muestra las opciones del menú principal.
 */
function showMainMenu() {
  console.log('\n===================================');
  console.log('   UniBot - Sistema Asesor Académico');
  console.log('===================================');
  console.log('1. Ingresar como Estudiante');
  console.log('2. Ingresar como Administrador');
  console.log('0. Salir');
}

/**
 * Módulo del estudiante (se completa en el commit 3).
 */
async function studentModule() {
  console.log('\n[Estudiante] Módulo en construcción.');
}

/**
 * Módulo del administrador (se completa en el commit 2).
 */
async function adminModule() {
  console.log('\n[Administrador] Módulo en construcción.');
}

/**
 * Ciclo principal: repite el menú hasta que el usuario elige salir.
 */
async function main() {
  let option = '';

  while (option !== '0') {
    showMainMenu();
    option = (await rl.question('Seleccione una opción: ')).trim();

    switch (option) {
      case '1':
        await studentModule();
        break;
      case '2':
        await adminModule();
        break;
      case '0':
        console.log('\nGracias por usar UniBot. ¡Hasta pronto!');
        break;
      default:
        console.log('\nOpción no válida. Escriba 1, 2 o 0.');
    }
  }

  rl.close();
}

main();
