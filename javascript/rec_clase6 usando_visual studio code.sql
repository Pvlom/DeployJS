
show DATABASES;
use laboratorio;
--Paquete WAMPSERVER. solo existe para windoes.
--FUNCIONES DE AGRUPAMIENTO
--Esta funciones siemptre devulven un solo registro como resultado
--FUNCION MAXIMO(Ingresa un argumento)      ARGUMENTO: numerico, texto, fecha

use laboratorio;
use articulos;
select* from facturas;
--Devuelve el monto mas alto
SELECT max(monto) FROM facturas;
SELECT max(monto) monto_maximo from facturas;
SELECT max(Fecha) ultima_fecha from facturas;
--me devuelve el nombre mas alto alfabeticamnte.
SELECT max(nombre) ultimo_nombre from clientes;

INSERT into clientes (nombre, apellido) VALUES ('Zelana', 'Gomez');

--Funcion min(Argumento)    Argumento: numerico, texto, fecha
SELECT min(monto) monto_minimo from facturas;
SELECT min(fecha) primer_fecha from facturas;

SELECT min(nombre) primer_nombre from clientes;
INSERT INTO clientes(nombre, apellido) values ('Abel','Trujillo');

insert into facturas (letra, numero, fecha,monto) VALUES
    ('a',1003,curdate(),45000);

-- FUNCION SUM(argumento)   ARGUMENTO: numerico     --PUEDES tener formato numerico o decimal
--La suma de todos los montos de todas las facturas.
SELECT sum(monto) total_facturado from facturas;
--NO debe haber espacion entre la funcion y el parentesis.    sum() - - ok   sum () - - x
----FUNCION AVG(ARGUMENTO)
--El separador es (,) lo tomaria como un campo. poner (.) para decimal
insert into facturas (letra, numero,fecha,monto) VALUES
    ('a',1004,curdate(),45000.50);

SELECT * FROM facturas;

--FUNCION REPLACE
SELECT letra, numero, fecha, REPLACE(round(monto,2),'.',',') from facturas;

SELECT avg(monto) promedio from facturas;
SELECT replace(round(avg(monto),2),'.',',') promedio from facturas;
-- FUNCION COUNT(*)     --cuanta registros
--El asterisco puede cambiarse por un campo


select count(*) cantidad from facturas;
SELECT COUNT(*) cantidad from clientes;
SELECT COUNT(direccion) cantidad from clientes;     -- 1 cliente con direcion, el resto tiene direccion not null
SELECT * from clientes;
select COUNT(*)-COUNT(direccion) cantidad from clientes;    -- 34 no tinenen dirreccion.

--Columna CALCULADA
select letra,numero,fecha,monto from facturas;
select letra,numero,fecha,monto, monto*0.21 valor_IVA, monto*1.21 total_IVA from facturas;
select letra,numero,fecha,monto, replace(round(monto*0.21,2),'.',',') valor_IVA, monto*1.21 total_IVA from facturas;

SELECT COUNT(*) cantidad from clientes where direccion is null;     --Remisiones con NULL
SELECT COUNT(*) cantidad from clientes WHERE direccion is not null; --Remisiones sin NULL

--Subconsultas      -- subquery. se puede hacer una consulta dentro de otra
SELECT max(monto) monto_maximo from facturas;       --Monto maximo de la factura mas grande
-- puede haber mas de una factura
INSERT into facturas (letra,numero,fecha,monto) VALUES 
('a',1010,curdate(),45000.5),
('a',1011,curdate(),45000.5);

--detras del WHERE no se puede poner una funcion de agrupamiento.
--SELECT count(*) cantidad from facturas where monto = max(monto)

SELECT count(*) cantidad from facturas where monto = 45000.50;
SELECT * from facturas where monto = 45000.50;
--sustitucion de terminos. 
--consulta interna
--consulta anidada

SELECT * from facturas  where monto = (SELECT max(monto) monto_maximo from facturas);

SELECT COUNT(*) from facturas  where monto = (SELECT max(monto) monto_maximo from facturas);

--Las facturas del ultimo dia comercial
SELECT max(fecha) from facturas;
SELECT * from facturas where fecha=(SELECT max(fecha) from facturas);
--Las facturas del primer dia comercial
SELECT * from facturas where fecha=(SELECT min(fecha) from facturas);

SELECT * from facturas;

-- Las facturas del año 2011
SELECT * from facturas where year(fecha) = 2021;
--Total facturado en marzo 2022
SELECT sum(monto) total from facturas where year(fecha)= 2022 and month(fecha)= 03;

SELECT * from clientes;
INSERT into clientes (nombre,apelllido,cuit) values
('Ana','Recio','2222'),
('Juan','Juanes','333');

ALTER TABLE clientes
ADD cuit varchar(255) AFTER apellido ;

ALTER TABLE clientes
DROP COLUMN cuit;

SELECT * from clientes;

-- GROUP BY

SELECT sum(monto) total_letra_a  from facturas where letra = 'a';
SELECT sum(monto) total_letra_b from facturas where  letra = 'b'; 
select sum(monto) total_letra_c from facturas where letra ='c';

select sum(monto) total from facturas;
SELECT * from facturas;
SELECT (SELECT sum(monto) total_letra_a  from facturas where letra = 'A')+
       (SELECT sum(monto) total_letra_a  from facturas where letra = 'B');

select 'letra A' letra, sum(monto) total from facturas where letra ='a';
select 'letra B' letra, sum(monto) total from facturas where letra ='b';

/*
letra       total
letra A     182570.75
letra B|    3878.79
*/
--En una sola consulta. agrupado por letra.
select letra, sum(monto) from facturas GROUP BY letra;

