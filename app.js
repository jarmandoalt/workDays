import { asigdia1, asigdia2 } from "./asigdia.js";
import { si, no, mismoDia, diaAnterior, mas1ano } from "./errores.js";

const $root = document.getElementById("root"),
  $btnInf = document.getElementById("inf"),
  $btnmod = document.getElementById("mod"),
  $btnClose = document.getElementById("cerrar_pestaña"),
  $dates = document.getElementById("dates");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  tomadatos();
  $btnInf.classList.add("is-active");
});

$btnClose.addEventListener("click", (e) => {
  $btnInf.classList.remove("is-active");
  for (let index = 0; index < 74; index++) {
    $dates.removeChild($dates.firstChild);
  }
});

export function tomadatos() {
  let x = document.getElementById("inicio").value,
    k = document.getElementById("final").value,
    fecha_inicio = x.split("-"),
    fecha_final = k.split("-"),
    dia_inicio = parseInt(fecha_inicio[2], 0),
    mes_inicio = parseInt(fecha_inicio[1], 0),
    ano_inicio = parseInt(fecha_inicio[0], 0),
    dia_final = parseInt(fecha_final[2], 0),
    mes_final = parseInt(fecha_final[1], 0),
    ano_final = parseInt(fecha_final[0], 0),
    aux1 = ano_inicio - 2020,
    aux2 = ano_final - 2020,
    lista_turno = document.getElementById("turno"),
    no_turno = turno.value,
    date = new Date(x.replace(/-+/g, "/")),
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
    arrayNombreDia = date.toLocaleDateString("es-MX", options).split(","),
    nombreDia = arrayNombreDia[0];

  hello(
    fecha_inicio,
    fecha_final,
    mes_inicio,
    ano_inicio,
    dia_final,
    mes_final,
    ano_final,
    aux1,
    aux2,
    dia_inicio,
    no_turno,
    nombreDia
  );
}

function hello(
  fecha_inicio,
  fecha_final,
  mes_inicio,
  ano_inicio,
  dia_final,
  mes_final,
  ano_final,
  aux1,
  aux2,
  dia_inicio,
  no_turno,
  nombreDia
) {
  let $root = document.getElementById("root");

  function manana(otro) {
    const $h1 = document.getElementById("turno_select");

    $h1.innerHTML = "<h1> Estarás en el Turno Mañana </h1>";
    $h1.classList.add("turno_select");

    switch (otro) {
      case 0:
        si();
        break;
      case 1:
        si();
        break;
      case 2:
        si();
        break;
      case 3:
        si();
        break;
      case 4:
        no();
        break;
      case 5:
        no();
        break;
      case 6:
        no();
        break;
      case 7:
        si();
        break;
      case 8:
        si();
        break;
      case 9:
        si();
        break;
      case 10:
        si();
        break;
      case 11:
        no();
        break;
      case 12:
        no();
        break;
      case 13:
        no();
        break;
      case 14:
        si();
        break;
      case 15:
        si();
        break;
      case 16:
        si();
        break;
      case 17:
        si();
        break;
      case 18:
        no();
        break;
      case 19:
        no();
        break;
      case 20:
        no();
        break;
      case 21:
        si();
        break;
      case 22:
        si();
        break;
      case 23:
        si();
        break;
      case 24:
        si();
        break;
      case 25:
        no();
        break;
      case 26:
        no();
        break;
      case 27:
        no();
        break;
    }
  }

  function noche(otro) {
    const $h1 = document.getElementById("turno_select");

    $h1.innerHTML = "<h1> Estarás en el Turno Noche </h1>";
    $h1.classList.add("turno_select");

    switch (otro) {
      case 0:
        no();
        break;
      case 1:
        no();
        break;
      case 2:
        si();
        break;
      case 3:
        si();
        break;
      case 4:
        si();
        break;
      case 5:
        si();
        break;
      case 6:
        no();
        break;
      case 7:
        no();
        break;
      case 8:
        no();
        break;
      case 9:
        si();
        break;
      case 10:
        si();
        break;
      case 11:
        si();
        break;
      case 12:
        si();
        break;
      case 13:
        no();
        break;
      case 14:
        no();
        break;
      case 15:
        no();
        break;
      case 16:
        si();
        break;
      case 17:
        si();
        break;
      case 18:
        si();
        break;
      case 19:
        si();
        break;
      case 20:
        no();
        break;
      case 21:
        no();
        break;
      case 22:
        no();
        break;
      case 23:
        si();
        break;
      case 24:
        si();
        break;
      case 25:
        si();
        break;
      case 26:
        si();
        break;
      case 27:
        no();
        break;
    }
  }

  function mixto(otro) {
    const $h1 = document.getElementById("turno_select");
    $h1.classList.add("turno_select");

    $h1.innerHTML = "<h1> Estarás en el Turno Mixto</h1>";

    switch (otro) {
      case 0:
        si();
        break;
      case 1:
        si();
        break;
      case 2:
        no();
        break;
      case 3:
        no();
        break;
      case 4:
        si();
        break;
      case 5:
        si();
        break;
      case 6:
        no();
        break;
      case 7:
        si();
        break;
      case 8:
        si();
        break;
      case 9:
        no();
        break;
      case 10:
        no();
        break;
      case 11:
        si();
        break;
      case 12:
        si();
        break;
      case 13:
        no();
        break;
      case 14:
        si();
        break;
      case 15:
        si();
        break;
      case 16:
        no();
        break;
      case 17:
        no();
        break;
      case 18:
        si();
        break;
      case 19:
        si();
        break;
      case 20:
        no();
        break;
      case 21:
        si();
        break;
      case 22:
        si();
        break;
      case 23:
        no();
        break;
      case 24:
        no();
        break;
      case 25:
        si();
        break;
      case 26:
        si();
        break;
      case 27:
        no();
        break;
    }
  }

  function first(value2) {
    if (no_turno == 1) {
      noche(value2);
    } else {
      if (no_turno == 2) {
        mixto(value2);
      } else {
        if (no_turno == 3) {
          manana(value2);
        }
      }
    }
  }

  function second(value2) {
    if (no_turno == 1) {
      mixto(value2);
    } else {
      if (no_turno == 2) {
        manana(value2);
      } else {
        if (no_turno == 3) {
          noche(value2);
        }
      }
    }
  }

  function masdetres(numeroDeDiasSobrantes, turno) {
    if (turno == 0) {
      if (no_turno == 1) {
        manana(numeroDeDiasSobrantes);
      } else {
        if (no_turno == 2) {
          noche(numeroDeDiasSobrantes);
        } else {
          if (no_turno == 3) {
            mixto(numeroDeDiasSobrantes);
          }
        }
      }
    } else {
      if (turno == 1) {
        first(numeroDeDiasSobrantes);
      } else {
        if (turno == 2) {
          second(numeroDeDiasSobrantes);
        }
      }
    }
  }

  let numero1 = asigdia1(aux1, dia_inicio, mes_inicio),
    numero2 = asigdia2(aux2, dia_final, mes_final);
  if (no_turno == 2 && nombreDia == "miércoles") {
    //se restan 2 das al turno de noche para que empiecce en lunes
    numero1 = numero1 - 2;
  }

  let resta = numero2 - numero1;

  if (ano_final > ano_inicio) {
    let aux = 365 - numero1;
    resta = aux + numero2;
  }

  let mesesDiferencia = Math.floor(resta / 28), //es para saber el numero de meses que pasaron
    numeroDiasSobrantes = resta % 28, //el numero de dias que sobraron despues de los meses
    turnoNuevo = mesesDiferencia % 3, //cuantos turnos de diferencia hay entre mes y mes
    auxMes = mesesDiferencia + 1, //para que en el for tenga un mes mas de recorrido
    aux28 = 28, //para sumar los dias del mes que faltan
    aux0 = 0, //para mandar un numero a las funciones y no marque NAN en la suma
    diasDeTrabajoManana = [], // arreglo donde se guardaran el numero de los dias que trabajaras turno Mañana
    diasDeTrabajoNoche = [], // arreglo donde se guardaran el numero de los dias que trabajaras turno Noche
    diasDeTrabajoMixto = [], // arreglo donde se guardaran el numero de los dias que trabajaras turno Mixto
    arrayTurnoMañana = [
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
    ],
    arrayTurnoNoche = [
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
    ],
    arrayTurnoMixto = [
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
      turnoManana,
      turnoNoche,
      turnoMixto,
    ];

  function turnoManana(numeroDeDia, diaDelMesAux) {
    let auxAnoDiferente = numero1 + numeroDeDia + diaDelMesAux;
    if (numero1 + numeroDeDia + diaDelMesAux > 365) {
      auxAnoDiferente = auxAnoDiferente - 365;
    }
    switch (numeroDeDia) {
      case 0:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 1:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 2:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 3:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 7:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 8:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 9:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 10:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 14:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 15:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 16:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 17:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 21:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 22:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 23:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
      case 24:
        diasDeTrabajoManana.push(auxAnoDiferente);
        break;
    }
  }

  function turnoNoche(numeroDeDia, diaDelMesAux) {
    let auxAnoDiferente = numero1 + numeroDeDia + diaDelMesAux;
    if (numero1 + numeroDeDia + diaDelMesAux > 365) {
      auxAnoDiferente = auxAnoDiferente - 365;
    }
    switch (numeroDeDia) {
      case 2:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 3:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 4:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 5:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 9:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 10:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 11:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 12:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 16:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 17:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 18:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 19:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 23:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 24:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 25:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
      case 26:
        diasDeTrabajoNoche.push(auxAnoDiferente);
        break;
    }
  }

  function turnoMixto(numeroDeDia, diaDelMesAux) {
    let auxAnoDiferente = numero1 + numeroDeDia + diaDelMesAux;
    if (numero1 + numeroDeDia + diaDelMesAux > 365) {
      auxAnoDiferente = auxAnoDiferente - 365;
    }
    switch (numeroDeDia) {
      case 0:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 1:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 4:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 5:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 7:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 8:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 11:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 12:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 14:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 15:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 18:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 19:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 21:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 22:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 25:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
      case 26:
        diasDeTrabajoMixto.push(auxAnoDiferente);
        break;
    }
  }

  if (no_turno == 1) {
    if (resta < 28) {
      //Para cuando es menos de un mes
      for (let numeroDeDias = 0; numeroDeDias < resta; numeroDeDias++) {
        turnoManana(numeroDeDias, aux0);
      }
    } else {
      for (let index = 0; index < auxMes; index++) {
        let auxMesCompleto = aux28 * index,
          auxTurno = arrayTurnoMañana[index],
          auxforDias = 28;
        if (index == mesesDiferencia) {
          auxforDias = numeroDiasSobrantes + 1;
        }
        for (let numeroDeDias = 0; numeroDeDias < auxforDias; numeroDeDias++) {
          auxTurno(numeroDeDias, auxMesCompleto);
        }
      }
    }
  }

  if (no_turno == 2) {
    if (resta < 28) {
      //Para cuando es menos de un mes
      for (let numeroDeDias = 0; numeroDeDias < resta; numeroDeDias++) {
        turnoNoche(numeroDeDias, aux0);
      }
    } else {
      for (let index = 0; index < auxMes; index++) {
        let auxMesCompleto = aux28 * index,
          auxTurno = arrayTurnoNoche[index],
          auxforDias = 28;
        if (index == mesesDiferencia) {
          auxforDias = numeroDiasSobrantes + 1;
        }
        for (let numeroDeDias = 0; numeroDeDias < auxforDias; numeroDeDias++) {
          auxTurno(numeroDeDias, auxMesCompleto);
        }
      }
    }
  }

  if (no_turno == 3) {
    if (resta < 28) {
      //Para cuando es menos de un mes
      for (let numeroDeDias = 0; numeroDeDias < resta; numeroDeDias++) {
        turnoMixto(numeroDeDias, aux0);
      }
    } else {
      for (let index = 0; index < auxMes; index++) {
        let auxMesCompleto = aux28 * index,
          auxTurno = arrayTurnoMixto[index],
          auxforDias = 28;
        if (index == mesesDiferencia) {
          auxforDias = numeroDiasSobrantes + 1;
        }
        for (let numeroDeDias = 0; numeroDeDias < auxforDias; numeroDeDias++) {
          auxTurno(numeroDeDias, auxMesCompleto);
        }
      }
    }
  }

  if (ano_final < ano_inicio) {
    diaAnterior();
  } else {
    if (ano_inicio == ano_final) {
      //el mismo año
      if (numero1 > numero2) {
        //el mismo año dia atrasado
        diaAnterior();
      } else {
        if (numero1 == numero2) {
          //el mismo año el mismo dia
          mismoDia();
        } else {
          //el mismmo año antes de un mes
          if (resta < 28) {
            if (no_turno == 1) {
              manana(resta);
            } else {
              if (no_turno == 2) {
                noche(resta);
              } else {
                mixto(resta);
              }
            }
          } else {
            //el mismo año pero mas de un mes
            let mesesDeDiferencia = Math.floor(resta / 28), //es para saber el numero de meses que pasaron
              numeroDeDiasSobrantes = resta % 28, //el numero de dias que sobraron despues de los meses
              turno = mesesDeDiferencia % 3; //cuantos turnos de diferencia hay entre mes y mes
            if (mesesDeDiferencia == 1) {
              first(numeroDeDiasSobrantes);
            } else {
              if (mesesDeDiferencia == 2) {
                second(numeroDeDiasSobrantes);
              } else {
                masdetres(numeroDeDiasSobrantes, turno);
              }
            }
          }
        }
      }
    } else {
      //diferente año
      let auxano = ano_final - ano_inicio;

      if (auxano >= 2) {
        mas1ano();
      } else {
        let auxidiaresta = 365 - numero1, //saber cuantos dias faltaban para completar el mes
          sumadias = auxidiaresta + numero2; //para saber el numero de dias entre dia1 y dia2

        if (sumadias < 28) {
          if (no_turno == 1) {
            manana(sumadias);
          } else {
            if (no_turno == 2) {
              noche(sumadias);
            } else {
              mixto(sumadias);
            }
          }
        } else {
          //mas de un mes
          let auxNumeroMes = Math.floor(sumadias / 28), //numero de dias
            auxNumeroDia = sumadias % 28, //el numero de dias que sobraron despues de los meses
            turno = auxNumeroMes % 3; //cuantos turnos de diferencia hay entre mes y mes

          if (auxNumeroMes == 1) {
            first(auxNumeroDia);
          } else {
            if (auxNumeroMes == 2) {
              second(auxNumeroDia);
            } else {
              masdetres(auxNumeroDia, turno);
            }
          }
        }
      }
    }
  }

  /************************* PINTAR CALENDARIO **********************************/

  let monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let monthNumber = mes_inicio - 1;
  let currentYear = ano_inicio;

  let dates = document.getElementById("dates"),
    month = document.getElementById("month"),
    year = document.getElementById("year");

  let prevMonthDOM = document.getElementById("prev-month"),
    nextMonthDOM = document.getElementById("next-month");

  month.textContent = monthNames[monthNumber];
  year.textContent = currentYear.toString();

  prevMonthDOM.addEventListener("click", () => lastMonth());
  nextMonthDOM.addEventListener("click", () => nextMonth());

  const writeMonth = (month) => {
    let auxNumber = 1;

    switch (month) {
      case 1:
        auxNumber = 32;
        break;
      case 2:
        isLeap() ? (auxNumber = 61) : (auxNumber = 60);
        break;
      case 3:
        isLeap() ? (auxNumber = 92) : (auxNumber = 91);
        break;
      case 4:
        isLeap() ? (auxNumber = 122) : (auxNumber = 121);
        break;
      case 5:
        isLeap() ? (auxNumber = 153) : (auxNumber = 152);
        break;
      case 6:
        isLeap() ? (auxNumber = 183) : (auxNumber = 182);
        break;
      case 7:
        isLeap() ? (auxNumber = 214) : (auxNumber = 213);
        break;
      case 8:
        isLeap() ? (auxNumber = 245) : (auxNumber = 244);
        break;
      case 9:
        isLeap() ? (auxNumber = 275) : (auxNumber = 274);
        break;
      case 10:
        isLeap() ? (auxNumber = 306) : (auxNumber = 305);
        break;
      case 11:
        isLeap() ? (auxNumber = 334) : (auxNumber = 335);
        break;
      default:
        break;
    }

    for (let i = startDay(); i > 0; i--) {
      dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber - 1) - (i - 1)}
        </div>`;
    }

    for (let i = 1; i <= getTotalDays(month); i++) {
      let auxContador = auxNumber++;

      if (diasDeTrabajoManana.includes(auxContador)) {
        if (auxContador == numero2) {
          dates.innerHTML += ` <div class="calendar__date calendar__item calendar__select_manana">${i}</div>`;
        } else {
          dates.innerHTML += ` <div class="calendar__date calendar__item calendar__manana">${i}</div>`;
        }
      } else {
        if (diasDeTrabajoNoche.includes(auxContador)) {
          if (auxContador == numero2) {
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__select_noche">${i}</div>`;
          } else {
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__noche">${i}</div>`;
          }
        } else {
          if (diasDeTrabajoMixto.includes(auxContador)) {
            if (auxContador == numero2) {
              dates.innerHTML += ` <div class="calendar__date calendar__item calendar__select_mixto">${i}</div>`;
            } else {
              dates.innerHTML += ` <div class="calendar__date calendar__item calendar__mixto">${i}</div>`;
            }
          } else {
            if (auxContador == numero2) {
              dates.innerHTML += ` <div class="calendar__date calendar__item calendar__select">${i}</div>`;
            } else {
              dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
            }
          }
        }
      }
    }
  };

  const getTotalDays = (month) => {
    if (month === -1) month = 11;

    if (
      month == 0 ||
      month == 2 ||
      month == 4 ||
      month == 6 ||
      month == 7 ||
      month == 9 ||
      month == 11
    ) {
      return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
      return 30;
    } else {
      return isLeap() ? 29 : 28;
    }
  };

  const isLeap = () => {
    return (
      (currentYear % 100 !== 0 && currentYear % 4 === 0) ||
      currentYear % 400 === 0
    );
  };

  const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
  };

  const lastMonth = () => {
    if (monthNumber !== 0) {
      monthNumber--;
    } else {
      monthNumber = 11;
      currentYear--;
    }

    setNewDate();
  };

  const nextMonth = () => {
    if (monthNumber !== 11) {
      monthNumber++;
    } else {
      monthNumber = 0;
      currentYear++;
    }

    setNewDate();
  };

  const setNewDate = () => {
    currentDate.setFullYear(currentYear, monthNumber, currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = "";
    writeMonth(monthNumber);
  };

  writeMonth(monthNumber);
}
