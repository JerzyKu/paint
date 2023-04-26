document.getElementById('save').addEventListener('click', e => {
  let link = document.createElement('a');
  link.download = 'download.png';
  link.href = document.querySelector('#main_canvas').toDataURL()
  link.click();
  link.delete;
});