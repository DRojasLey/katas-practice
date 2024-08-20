function countSheeps(sheep) {
    let counter = 0;
    sheep.forEach(element => {
      if (element == true){
        counter++;
      }
    });
    return counter;
  }