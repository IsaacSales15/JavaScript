document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button[type="button"]');
    const itemNameInput = document.getElementById('itemName');
    const itemQuantityInput = document.getElementById('itemQuantity');
    const itemListDiv = document.getElementById('itemList');

    // Métodos para os botões
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let valueButt = this.value;

            if (valueButt === 'Produtos') {
                window.location.href = 'produtos.html';
            } else if (valueButt === 'Gastos') {
                window.location.href = 'gastos.html';
            } else if (valueButt === 'add') {
                registerItem();
                clearInputs();
            }
        });
    });
 
    // Recuperar os itens do sessionStorage ao carregar a página
    const storedItems = JSON.parse(sessionStorage.getItem('items')) || [];
    for (const item of storedItems) {
        addItemToList(item.name, item.quantity);
    }

    // Registra o item no sessionStorage e na lista na tela
    function registerItem() {
        const itemName = itemNameInput.value.trim();
        const itemQuantity = itemQuantityInput.value.trim();

        if (itemName === '' || itemQuantity === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (!(/^\d+$/.test(itemQuantity))) {
            alert('Por favor, insira apenas números no campo Quantidade!');
            return;
        }

        const item = { name: itemName, quantity: parseInt(itemQuantity) };
        addItemToList(itemName, itemQuantity);
        storeItem(item);
        alert('Item adicionado com sucesso!');
    }

    // Adiciona o item à lista na tela
    function addItemToList(name, quantity) {
        const newItemDiv = document.createElement('div');
        newItemDiv.classList.add('item');

        const itemInfo = document.createElement('p');
        itemInfo.textContent = `Item: ${name}, Quantidade: ${quantity}`;
        newItemDiv.appendChild(itemInfo);

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');

        const editBtn = document.createElement('button');
        editBtn.textContent = '+';

        editBtn.addEventListener('click', function() {
// Vou pensar como vou fazer isso ainda
        });

        btnContainer.appendChild(editBtn);

// Subtrai um número da quantidade do armazenamento
const subtractBtn = document.createElement('button');
subtractBtn.textContent = '-';
subtractBtn.dataset.itemName = itemName;

subtractBtn.addEventListener('click', function () {
    // Ainda vou quebrar a cabeça com isso
});
        btnContainer.appendChild(subtractBtn);

        newItemDiv.appendChild(btnContainer);

        itemListDiv.appendChild(newItemDiv);
    }

// Armazena o item no sessionStorage (versão mais "simples" do localStorage)
    function storeItem(item) {
        const storedItems = JSON.parse(sessionStorage.getItem('items')) || [];
        storedItems.push(item);
        sessionStorage.setItem('items', JSON.stringify(storedItems));
    }


    // Limpa o conteúdo dos campos 
    function clearInputs() {
        itemNameInput.value = '';
        itemQuantityInput.value = '';
    }
});

// Seishinkai ga hitsuyõda to omou 