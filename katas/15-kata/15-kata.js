function towerBuilder(floorNum) {
    const tower = [];
    for (let i = 1; i <= floorNum; i++) {
      const spaces = ' '.repeat(floorNum - i);
      const character = '*'.repeat(i * 2 - 1);
      tower.push(spaces + character + spaces);
    }
    return tower;
  }