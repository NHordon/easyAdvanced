/*
Создать файл, при запуске которого в терминале отобразится
информация о текущей дате (часы, минуты, число, месяц, год), а также имя файла, запущенного в данный момент.
 */
console.log(process.cwd());
const getDate = () => new Date();
console.log(getDate());

/*
Создать модуль, который экспортирует функцию, принимающую два аргумента: начальное число и конечное. Функция 
должна вернуть случайное число в указанном диапазоне. Модуль импортировать в главный файл, вызвать функцию для
 генерации случайного числа.
 */
const showRandomNumber = require('./random');
console.log(showRandomNumber(0, 5));