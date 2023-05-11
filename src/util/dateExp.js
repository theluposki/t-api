const dateExp = (expire) => {
  const now = Math.floor(Date.now() / 1000);
  const remainingTime = parseInt(expire) - now;

  // converte o tempo restante para horas e minutos
  const remainingMinutes = Math.floor(remainingTime / 60);
  const remainingHours = Math.floor(remainingMinutes / 60);
  const remainingMinutesAfterLastHour = remainingMinutes % 60;

  // exibe a mensagem apropriada de acordo com o tempo restante
  if (remainingHours > 0) {
    return `O token expira em ${remainingHours} horas e ${remainingMinutesAfterLastHour} minutos`
  } else if (remainingMinutesAfterLastHour > 0) {
    return `O token expira em ${remainingMinutesAfterLastHour} minutos`
  } else {
    return 'O token expirou'
  }
}

export default dateExp
