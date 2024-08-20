function areYouPlayingBanjo(name) {
    const lasErres = [82,114];
    if (lasErres.includes(name.charCodeAt(0))){
      return `${name} plays banjo`;
    } else {
      return `${name} does not play banjo`
    }
  }