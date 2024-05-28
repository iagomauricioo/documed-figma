document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('input', () => {
        let value = cpfInput.value.replace(/\D/g, ''); 
        if (value.length > 11) {
            value = value.slice(0, 11); 
        }
        let formattedValue = value.replace(/(\d{3})(\d)/, '$1.$2');
        formattedValue = formattedValue.replace(/(\d{3})(\d)/, '$1.$2');
        formattedValue = formattedValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        
        cpfInput.value = formattedValue;
    });
});

function historico(event) {
    event.preventDefault();
    let cpfInput = document.getElementById("cpf").value.replace(/\D/g, ''); 
    if (cpfInput === "12345678900") {
        document.getElementById("name").innerHTML = '<p class="value">João Alberto da Silva</p>';
        document.getElementById("cpf-result").textContent = '137.588.274-00';
        document.getElementById("pathology").innerHTML = '<p class="value">Asma</p><p class="value">Rinite</p>';
        document.getElementById("injuries").innerHTML = 'Lesão nível 1 lombar<br>';
        document.getElementById("surgeries").innerHTML = 'Nenhuma';
        document.getElementById("current-medications").innerHTML = 'Nenhum';
        document.getElementById("family-history").innerHTML = '<p class="value">Diabetes</p><p class="value">Hipertensão</p><p class="value">Mal de Parkinson</p><p class="value">Alzheimer</p><p class="value">Ansiedade</p>';
        document.getElementById("allergies").innerHTML = 'Henna';
        document.getElementById("vaccinations").innerHTML = '<p class="value">BCG</p><p class="value">Hepatite B</p><p class="value">Pentavalente</p><p class="value">VIP (Vacina Inativada Poliomielite)</p><p class="value">VORH</p><p class="value">Pneumocócica 10-valente</p><p class="value">Febre Amarela</p><p class="value">Tríplice Viral (SCR)</p><p class="value">Hepatite A</p><p class="value">Tetraviral (SCRV)</p><p class="value">DTP (Tríplice Bacteriana)</p><p class="value">VOP (Vacina Oral Poliomielite)</p><p class="value">Varicela</p><p class="value">Influenza (Gripe)</p><p class="value">Covid-19</p><p class="value">DTP (Tríplice Bacteriana)</p>';
    } else {
        document.getElementById("name").textContent = 'Não encontrado';
        document.getElementById("cpf-result").textContent = '';
        document.getElementById("pathology").textContent = '';
        document.getElementById("injuries").textContent = '';
        document.getElementById("surgeries").textContent = '';
        document.getElementById("current-medications").textContent = '';
        document.getElementById("family-history").textContent = '';
        document.getElementById("allergies").textContent = '';
        document.getElementById("vaccinations").textContent = '';

    }
}
