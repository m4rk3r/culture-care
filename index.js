const hrs = document.querySelectorAll('hr');

const amp = 5;
const rarity = 1;
const freq = 0.2;
const phase = 0;
const pad = 5;


hrs.forEach((hr) => {
  const bcr = hr.getBoundingClientRect();
  hr.innerHTML = '';
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute('width', bcr.width);
  svg.setAttribute('height', amp * 2 + pad);
  hr.append(svg);

  const origX  = 10;
  const origY = amp + pad/2;

  for(var i = -amp*2; i < bcr.width; i++) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute('x1', (i - 1) * rarity + origX);
    line.setAttribute('y1', Math.sin(freq*(i - 1 + phase)) * amp + origY);

    line.setAttribute('x2', i * rarity + origX);
    line.setAttribute('y2', Math.sin(freq*(i + phase)) * amp + origY);

    //line.setAttribute('style', `stroke:hsl(${Math.abs(i%360)}, 10%, 50%);`);
    //line.setAttribute('style', `opacity: ${i/100};`);

    svg.appendChild(line);
  }
});

const dls = document.querySelectorAll('dl');
dls.forEach(dl => {
  dl.addEventListener('click', (evt) => {
    const trg = evt.target.tagName.toLowerCase();
    if (['dt', 'dd'].includes(trg)) {
      evt.target.classList.toggle('crossed');

      if (evt.target.classList.contains('span')) {
        return;
      }

      const sibling = 'dt' === trg ? evt.target.nextElementSibling : evt.target.previousElementSibling;
      sibling.classList.toggle('crossed');
    }
  });
});

const uls = document.querySelectorAll('ol');
uls.forEach(ul => {
  ul.addEventListener('click', (evt) => {
    if (evt.target.tagName.toLowerCase()  === 'li') {
      evt.target.classList.toggle('crossed');
    }
  });
});
