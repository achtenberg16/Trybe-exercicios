import React from "react";

const compromissos = ['acordar', 'almoçar', 'estudar', 'jantar']

const Task = (value) => {
  return (
    compromissos.map((compromisso) => <li>{compromisso}</li>)
  );
}

export default Task