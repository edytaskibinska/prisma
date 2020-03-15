export default function DynamicParallax(element) {
  this.item = document.querySelector(element);
  this.parallax = function(speed, distance) {
    this.item.style.transform = `translateY(-${distance * speed}px)`;
  };
}
