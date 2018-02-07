// ovisno o stanju štoperice, vraća string koji se prikazuje unutar botuna

export default state => {
  if (state === true) {
    return 'LAND';
  } else {
    return 'LIFTOFF';
  }
};
