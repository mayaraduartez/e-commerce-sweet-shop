
document.getElementById('addCobertura').addEventListener('click', function() {
  const coberturaContainer = document.getElementById('cobertura');
  const newCobertura = document.createElement('div');
  newCobertura.classList.add('row', 'form-itens');
  
  newCobertura.innerHTML = `
    <input type="text" name="cobertura" value="" placeholder="Nova Cobertura">
    <label>R$</label>
    <input type="number" name="price-cobertura" value="0.00" step="0.01">
    <button type="button" class="btn-delete">Excluir</button>
  `;
  
  coberturaContainer.appendChild(newCobertura);
  attachDeleteEvent(newCobertura);
});

// Função para adicionar novo recheio
document.getElementById('addRecheio').addEventListener('click', function() {
  const recheioContainer = document.getElementById('recheio');
  const newRecheio = document.createElement('div');
  newRecheio.classList.add('row', 'form-itens');
  
  newRecheio.innerHTML = `
    <input type="text" name="recheio" value="" placeholder="Novo Recheio">
    <label>R$</label>
    <input type="number" name="price-recheio" value="0.00" step="0.01">
    <button type="button" class="btn-delete">Excluir</button>
  `;
  
  recheioContainer.appendChild(newRecheio);
  attachDeleteEvent(newRecheio);
});

// Função para excluir campos
function attachDeleteEvent(element) {
  const deleteButton = element.querySelector('.btn-delete');
  deleteButton.addEventListener('click', function() {
    element.remove();
  });
}

// Adiciona o evento de exclusão para os campos já existentes
document.querySelectorAll('.form-itens').forEach(attachDeleteEvent);

