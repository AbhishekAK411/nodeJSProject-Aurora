create table token(
    tokenId int NOT NULL AUTO_INCREMENT,
    token varchar(200) NOT NULL,
    PRIMARY KEY (tokenId),
    CHECK  (token REGEXP '^[A-Za-z0-9]{100}$')
)