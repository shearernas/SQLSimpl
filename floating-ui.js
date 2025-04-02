import {
  computePosition,
  flip,
  shift,
  offset,
} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.13/+esm';

const buttons = document.querySelectorAll('.code_button');

function update(button, tooltip) {
  computePosition(button, tooltip, {
      placement: 'bottom-start',
      middleware: [offset(10), flip(), shift()],
  }).then(({x, y}) => {
      Object.assign(tooltip.style, {
          left: `${x}px`,
          top: `${y}px`,
          visibility: 'visible',
          display: 'block'
      });
  });
}

function showTooltip(event) {
  const button = event.currentTarget;
  const tooltip = button.nextElementSibling;
  
  document.querySelectorAll('.code_tooltip').forEach(t => {
      t.style.display = 'none';
  });
  
  tooltip.style.display = 'block';
  update(button, tooltip);
}
 
function hideTooltip(event) {
  const button = event.currentTarget;
  const tooltip = button.nextElementSibling;
  tooltip.style.display = 'none';
}
 
buttons.forEach(button => {
  [
      ['mouseenter', showTooltip],
      ['mouseleave', hideTooltip],
      ['focus', showTooltip],
      ['blur', hideTooltip],
  ].forEach(([event, listener]) => {
      button.addEventListener(event, listener);
  });
});