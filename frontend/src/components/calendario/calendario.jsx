// src/components/Calendario.jsx
import React, { useState } from "react";
import "./calendario.scss";

const Calendario = () => {
  const [dataAtual, setDataAtual] = useState(new Date());

  const obterIntervaloDaSemana = (data) => {
    const inicioDaSemana = new Date(data);
    inicioDaSemana.setDate(data.getDate() - data.getDay());
    const fimDaSemana = new Date(inicioDaSemana);
    fimDaSemana.setDate(inicioDaSemana.getDate() + 6);

    return { inicioDaSemana, fimDaSemana };
  };

  const { inicioDaSemana, fimDaSemana } = obterIntervaloDaSemana(dataAtual);

  const formatarData = (data) =>
    data.toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric" });

  const semanaAnterior = () => {
    const novaData = new Date(dataAtual);
    novaData.setDate(dataAtual.getDate() - 7);
    setDataAtual(novaData);
  };

  const proximaSemana = () => {
    const novaData = new Date(dataAtual);
    novaData.setDate(dataAtual.getDate() + 7);
    setDataAtual(novaData);
  };

  const resetarParaHoje = () => {
    setDataAtual(new Date());
  };

  const diasDaSemana = Array.from({ length: 7 }, (_, i) => {
    const dia = new Date(inicioDaSemana);
    dia.setDate(inicioDaSemana.getDate() + i);
    return dia;
  });

  return (
    <div className="calendario-semanal">
      <h2>AGENDAMENTO</h2>
      <div className="cabecalho-calendario">
        <button onClick={resetarParaHoje}>Hoje</button>
        <button onClick={semanaAnterior}>Anterior</button>
        <span>{`${formatarData(inicioDaSemana)} - ${formatarData(fimDaSemana)}`}</span>
        <button onClick={proximaSemana}>Próximo</button>
      </div>

      <div className="grade-calendario">
        <div className="dias-calendario">
          {diasDaSemana.map((dia, index) => (
            <div key={index} className="dia-calendario">
              <span>{dia.toLocaleDateString("pt-BR", { weekday: "long" })} {dia.getDate()}</span>
            </div>
          ))}
        </div>
        
        <div className="horarios-calendario">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="horario-calendario">
              <span>{`${i + 7}:00`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendario;