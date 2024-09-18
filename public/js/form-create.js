
  document.getElementById('image-input').addEventListener('change', function(event) {
    const imagePreview = document.getElementById('image-preview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.innerHTML = '';
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        };

        reader.readAsDataURL(file); 
    } else {
        imagePreview.innerHTML = '<p>Imagem será exibida aqui</p>';
    }
});


document.getElementById('valor').addEventListener('input', function (e) {
  let value = e.target.value;
  value = value.replace(/[^0-9.,]/g, '');
  value = value.replace(',', '.');
  const parts = value.split('.');
  if (parts.length > 2) {
    value = parts[0] + '.' + parts[1];
  }
  if (value.includes('.')) {
    const [intPart, decimalPart] = value.split('.');
    value = `${intPart}.${decimalPart.slice(0, 2)}`;
  }
  e.target.value = value;
});
