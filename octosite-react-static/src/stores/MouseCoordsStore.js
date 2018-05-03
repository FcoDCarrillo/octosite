import { observable, computed, action } from 'mobx';

class MouseCoordsStore {
  @observable mouseX = 0;
  @observable mouseY = 0;

  @computed get ratio() {
    return {
      x: this.mouseX / window.innerWidth,
      y: this.mouseY / window.innerHeight
    };
  }

  @action setMouseCoords({screenX, screenY}) {
    console.log(this.mouseX);
    this.mouseX = screenX;
    this.mouseY = screenY;
  }
}

export default MouseCoordsStore;