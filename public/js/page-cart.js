
document.querySelectorAll('.remove-cart').forEach(function(button) {
  button.addEventListener('click', function() {
    const row = button.closest('tr');
    if (row) {
      row.remove();
      calcularTotal();
      checkCartItems(); 
    }
  });
});

function calcularTotal() {
  let total = 0;

  const rows = document.querySelectorAll('.favoritos-table tbody tr');

  rows.forEach(row => {
    const quantidade = parseInt(row.cells[2].textContent.replace('x', '').trim());
    const preco = parseFloat(row.cells[3].textContent.replace('R$', '').replace(',', '.').trim());
    
    total += quantidade * preco;
  });

  document.querySelector('.price').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function checkCartItems() {
  const cartItemsDiv = document.querySelector('.favoritos-table tbody');
  const emptyCartMessageDiv = document.getElementById('empty-cart-message');

  if (cartItemsDiv.children.length === 0) {
    emptyCartMessageDiv.style.display = 'block';
  } else {
    emptyCartMessageDiv.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  checkCartItems(); 
});

    
    document.querySelectorAll('input[name="opcao"]').forEach(input => {
      input.addEventListener('change', function() {
        const formEndereco = document.getElementById('form-endereco');
        const metodoPayment = document.getElementById('metodo-payment');
        const modal = document.getElementById('modal');
        const confirmar = document.getElementById('confirmar');
    
        // Quando uma opção é selecionada, exibir a div confirmar
        confirmar.style.display = 'block';
    
        if (this.value === 'delivery') {
          formEndereco.style.display = 'block';
          metodoPayment.style.display = 'block';
    
          document.querySelectorAll('input[name="payment"]').forEach(paymentInput => {
            paymentInput.addEventListener('change', function() {
              if (this.value === 'cartao') {
                modal.style.display = 'block';
              } else {
                modal.style.display = 'none';
              }
            });
          });
    
        } else if (this.value === 'retirada') {
          formEndereco.style.display = 'none';
          metodoPayment.style.display = 'none';
          modal.style.display = 'none';
        }
      });
    });