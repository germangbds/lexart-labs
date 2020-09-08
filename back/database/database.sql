CREATE DATABASE stock_db;

USE stock_db;

CREATE TABLE client(
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE product(
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(250),
  image VARCHAR(250)
);

CREATE TABLE stock(
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  quantity INT(11),
  id_client INT(11),
  id_product INT(11),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user VARCHAR(100),
  FOREIGN KEY (id_client) REFERENCES client(id),
  FOREIGN KEY (id_product) REFERENCES product(id)
);

INSERT INTO client () VALUES (1,'Juan');
INSERT INTO client () VALUES (2,'Pepe');
INSERT INTO client () VALUES (3,'Felipe');
INSERT INTO client () VALUES (4,'German');

INSERT INTO product () VALUES (1,'Monitor','Pantalla 24 Full HD','https://images-na.ssl-images-amazon.com/images/I/81nSaeP3AvL._AC_SX466_.jpg');
INSERT INTO product () VALUES (2,'Teclado','Mecanico y retroiluminado','https://http2.mlstatic.com/xtech-teclado-gamer-usb-xtk-520s-revenger-D_NQ_NP_770411-MLA32173208111_092019-F.jpg');
INSERT INTO product () VALUES (3,'Mouse','Laser con 6 botones','https://d26lpennugtm8s.cloudfront.net/stores/001/003/404/products/717321-mco30545993793_052019-o-93e88997cbb556cf9915591735054851-640-0.jpg');
INSERT INTO product () VALUES (4,'Gabinete','Con ventana y sin fuente','https://www.infinit.com.uy/imgs/productos/productos34_7567.jpg');

INSERT INTO stock () VALUES (1,2,1,1,CURRENT_TIMESTAMP(),'Jose');
INSERT INTO stock () VALUES (2,7,3,4,CURRENT_TIMESTAMP(),'Jose');

USE stock_db;

DESCRIBE stock;
DESCRIBE client;
DESCRIBE product;
