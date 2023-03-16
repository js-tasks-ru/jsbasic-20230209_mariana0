import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();
    this.addListeners();
    this.setValue(value);
  }
  render() {
    this.elem = createElement(`
    <div class="slider">


      <div class="slider__thumb">
        <span class="slider__value"></span>
      </div>


      <div class="slider__progress"></div>


      <div class="slider__steps">
       ${`<span></span>`.repeat(this.steps)}
      </div>
    `);
  }
  setValue(value) {
    this.value = value;

    let valuePersent = (value / this.segments) * 100;

    this.sub('thumb').style.left = `${valuePersent}%`;
    this.sub('progress').style.width = `${valuePersent}%`;

    this.sub('value').innerHTML = value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  }


  addListeners() {
    this.elem.onclick = this.onClick;
  }

  onClick = event => {
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    this.setValue(Math.round(this.segments * newLeft));

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  }

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }
}
