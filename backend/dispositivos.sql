CREATE DATABASE trabalhoPP;
CREATE TABLE Dispositivos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_dispositivo VARCHAR(50) NOT NULL,      -- Nome do dispositivo (ex: "Ar-condicionado Sala")
    tipo_dispositivo VARCHAR(50),               -- Tipo de dispositivo (ex: "Ar-condicionado", "Lâmpada")
    status VARCHAR(10) NOT NULL,                -- Ligado ou Desligado
    horario_ultima_acao DATETIME,               -- Data e hora da última vez que foi ligado/desligado
    umidade INT,                                -- Umidade (em %), caso aplicável ao dispositivo
    temperatura INT,                            -- Temperatura (em ºC), caso aplicável ao dispositivo
    consumo_energia DECIMAL(10, 2),             -- Consumo de energia em kWh, caso aplicável
    localizacao VARCHAR(50)                     -- Localização do dispositivo (ex: "Sala", "Cozinha")
);
