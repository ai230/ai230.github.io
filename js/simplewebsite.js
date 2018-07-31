(function() {
  'use-script';

  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var modal = document.getElementById('modal');
  var mask = document.getElementById('mask');

  open.addEventListener('click', function() {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  })
  close.addEventListener('click', function() {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  })

  mask.addEventListener('click', function() {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  })
})()
