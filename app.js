const carrusel = document.getElementById('carrusel');
const slides = carrusel.querySelectorAll('.slide');
const indicadores = document.getElementById('indicadores');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let index = 0;

slides.forEach((_, i) => {
  const punto = document.createElement('div');
  punto.classList.add('punto');
  if (i === 0) punto.classList.add('activo');
  punto.addEventListener('click', () => mostrarSlide(i));
  indicadores.appendChild(punto);
});

const actualizarCarrusel = () => {
  carrusel.style.transform = `translateX(-${index * 100}%)`;
  indicadores.querySelectorAll('.punto').forEach((p, i) =>
    p.classList.toggle('activo', i === index)
  );
};

const mostrarSlide = (i) => {
  index = i;
  actualizarCarrusel();
};

btnNext.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  actualizarCarrusel();
});

btnPrev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  actualizarCarrusel();
});


const carrusel2 = document.getElementById('carrusel2');
const slides2 = carrusel2.querySelectorAll('.slide');
const indicadores2 = document.getElementById('indicadores2');
const btnPrev2 = document.getElementById('prev2');
const btnNext2 = document.getElementById('next2');

let index2 = 0;

slides2.forEach((_, i) => {
  const punto = document.createElement('div');
  punto.classList.add('punto');
  if (i === 0) punto.classList.add('activo');
  punto.addEventListener('click', () => mostrarSlide2(i));
  indicadores2.appendChild(punto);
});

const actualizarCarrusel2 = () => {
  carrusel2.style.transform = `translateX(-${index2 * 100}%)`;
  indicadores2.querySelectorAll('.punto').forEach((p, i) =>
    p.classList.toggle('activo', i === index2)
  );
};

const mostrarSlide2 = (i) => {
  index2 = i;
  actualizarCarrusel2();
};

btnNext2.addEventListener('click', () => {
  index2 = (index2 + 1) % slides2.length;
  actualizarCarrusel2();
});

btnPrev2.addEventListener('click', () => {
  index2 = (index2 - 1 + slides2.length) % slides2.length;
  actualizarCarrusel2();
});
