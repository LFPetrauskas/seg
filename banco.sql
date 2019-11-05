CREATE TABLE empresa(
  cd_empresa INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome_empresarial VARCHAR(200),
  cnpj VARCHAR(20),
  logradouro VARCHAR(200),
  nr_endereco VARCHAR(10),
  complemento VARCHAR(20),
  cep VARCHAR(10),
  bairro VARCHAR(50),
  municipio VARCHAR(50),
  email VARCHAR(200),
  telefone VARCHAR(20)
);

CREATE TABLE funcionario (
  cd_funcionario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(200),
  logradouro VARCHAR(200),
  nr_endereco VARCHAR(20),
  bairro VARCHAR(50),
  cidade VARCHAR(50),
  cd_empresa INT,
  constraint fk_func_cd_empresa foreign key (cd_empresa) references empresa(cd_empresa)
);

CREATE TABLE documento (
  cd_documento INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(50),
  validade_dias INT,
  frequencia_dias INT,
  ao_validade INT(1),
  ao_frequencia INT (1),
  ao_qualificacao INT (1),
  ao_utiliza_func INT(1),
  ao_utiliza_empresa INT(1)
);


CREATE TABLE usuario (
	cd_usuario INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	login VARCHAR(50),
	senha VARCHAR(200),
	nome VARCHAR(200),
	email VARCHAR(200)
);

DELIMITER $$
CREATE PROCEDURE `add_empresa`(
  IN `p_nome_empresarial` VARCHAR(200),
  IN `p_cnpj` VARCHAR(20),
  IN `p_logradouro` VARCHAR(200),
  IN `p_nr_endereco` VARCHAR(10),
  IN `p_complemento` VARCHAR(20),
  IN `p_cep` VARCHAR(10),
  IN `p_bairro` VARCHAR(50),
  IN `p_municipio` VARCHAR(50),
  IN `p_email` VARCHAR(200),
  IN `p_telefone` VARCHAR(20)
) LANGUAGE SQL NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER COMMENT '' BEGIN
INSERT INTO empresa (
    nome_empresarial,
    cnpj,
    logradouro,
    nr_endereco,
    complemento,
    cep,
    bairro,
    municipio,
    email,
    telefone
  )
VALUES
  (
    p_nome_empresarial,
    p_cnpj,
    p_logradouro,
    p_nr_endereco,
    p_complemento,
    p_cep,
    p_bairro,
    p_municipio,
    p_email,
    p_telefone
  );
END;
$$;
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE `edit_empresa`(
  IN `p_cd_empresa` INT,
  IN `p_nome_empresarial` VARCHAR(200),
  IN `p_cnpj` VARCHAR(20),
  IN `p_logradouro` VARCHAR(200),
  IN `p_nr_endereco` VARCHAR(10),
  IN `p_complemento` VARCHAR(20),
  IN `p_cep` VARCHAR(10),
  IN `p_bairro` VARCHAR(50),
  IN `p_municipio` VARCHAR(50),
  IN `p_email` VARCHAR(200),
  IN `p_telefone` VARCHAR(20)
) LANGUAGE SQL NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER COMMENT '' BEGIN
UPDATE empresa
set
  nome_empresarial = p_nome_empresarial,
  cnpj = p_cnpj,
  logradouro = p_logradouro,
  nr_endereco = p_nr_endereco,
  complemento = p_complemento,
  cep = p_cep,
  bairro = p_bairro,
  municipio = p_municipio,
  email = p_email,
  telefone = p_telefone
WHERE
  cd_empresa = p_cd_empresa;
END;
$$;
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE `delete_empresa`(
  IN `p_cd_empresa` INT
) LANGUAGE SQL NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER COMMENT '' BEGIN
DELETE FROM empresa
WHERE
  cd_empresa = p_cd_empresa;
END;
$$;
DELIMITER ;

DELIMITER $$ 
CREATE PROCEDURE `add_funcionario`(
  IN p_nome VARCHAR(200),
  IN p_logradouro VARCHAR(200),
  IN p_nr_endereco VARCHAR(20),
  IN p_bairro VARCHAR(50),
  IN p_cidade VARCHAR(50),
  IN p_cd_empresa INT
) LANGUAGE SQL NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER COMMENT '' BEGIN
INSERT INTO funcionario (
    nome,
    logradouro,
    nr_endereco,
    bairro,
    cidade,
    cd_empresa
  )
VALUES
  (
    p_nome,
    p_logradouro,
    p_nr_endereco,
    p_bairro,
    p_cidade,
    p_cd_empresa
  );
END;
$$;
DELIMITER ;

DELIMITER $$ 
CREATE PROCEDURE `edit_funcionario`(
IN p_cd_funcionario INT,
  IN p_nome VARCHAR(200),
  IN p_logradouro VARCHAR(200),
  IN p_nr_endereco VARCHAR(20),
  IN p_bairro VARCHAR(50),
  IN p_cidade VARCHAR(50),
  IN p_cd_empresa INT
) LANGUAGE SQL NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER COMMENT '' BEGIN
update funcionario 
set
    nome = p_nome,
    logradouro = p_logradouro,
    nr_endereco = p_nr_endereco,
    bairro = p_bairro,
    cidade = p_cidade,
    cd_empresa = p_cd_empresa
  WHERE cd_funcionario = p_cd_funcionario;
END;
$$;
DELIMITER ;

DELIMITER $$ 
CREATE PROCEDURE `delete_funcionario`(
IN p_cd_funcionario INT
) LANGUAGE SQL NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER COMMENT '' BEGIN
DELETE from funcionario 
  WHERE cd_funcionario = p_cd_funcionario;
END;
$$;
DELIMITER ;

DELIMITER $$ 
CREATE PROCEDURE `add_documento`(
  IN p_descricao VARCHAR(50),
  IN p_validade_dias INT,
  IN p_frequencia_dias INT,
  IN p_ao_validade INT(1),
  IN p_ao_frequencia INT (1),
  IN p_ao_qualificacao INT (1),
  IN p_ao_utiliza_func INT(1),
  IN p_ao_utiliza_empresa INT(1)
) LANGUAGE SQL NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER COMMENT '' BEGIN
INSERT INTO documento (
    descricao,
    validade_dias,
    frequencia_dias,
    ao_validade,
    ao_frequencia,
    ao_qualificacao,
    ao_utiliza_func,
    ao_utiliza_empresa
  )
VALUES
  (
    p_descricao,
    p_validade_dias,
    p_frequencia_dias,
    p_ao_validade,
    p_ao_frequencia,
    p_ao_qualificacao,
    p_ao_utiliza_func,
    p_ao_utiliza_empresa
  );
END;
$$;
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE `delete_documento`(IN p_cd_documento INT) LANGUAGE SQL NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER COMMENT '' BEGIN
DELETE FROM documento
WHERE
  cd_documento = p_cd_documento;
END;
$$;
DELIMITER ;


DELIMITER $$ 
CREATE PROCEDURE `login_usuario`(
  IN p_login VARCHAR(50),
  IN p_senha VARCHAR(200)
) LANGUAGE SQL NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER COMMENT '' BEGIN
SELECT
  COUNT(1) resultado, login, nome, email
FROM usuario
WHERE
  login = p_login
  AND senha = p_senha;
END;
$$;
DELIMITER ;