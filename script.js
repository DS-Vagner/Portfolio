document.addEventListener('DOMContentLoaded', () => {
    // --- 1. CÁLCULO AUTOMÁTICO DE DURAÇÃO (ANOS E MESES) ---
    const dateElements = document.querySelectorAll('.calc-duration');

    dateElements.forEach(el => {
        const startStr = el.getAttribute('data-start'); // Formato: "YYYY-MM"
        const endStr = el.getAttribute('data-end');     // Formato: "YYYY-MM", "presente" ou "present"

        if (!startStr) return;

        const [startYear, startMonth] = startStr.split('-').map(Number);
        let endYear, endMonth;

        if (endStr === 'presente' || endStr === 'present' || !endStr) {
            const now = new Date();
            endYear = now.getFullYear();
            endMonth = now.getMonth() + 1; // getMonth() é 0-indexed
        } else {
            [endYear, endMonth] = endStr.split('-').map(Number);
        }

        // Cálculo total de meses (incluindo o mês de início e o de fim)
        let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

        if (totalMonths < 1) totalMonths = 1;

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        let durationStr = '';
        
        if (years > 0) {
            durationStr += `${years} ${years === 1 ? 'ano' : 'anos'}`;
        }
        
        if (months > 0) {
            if (durationStr !== '') durationStr += ' e ';
            durationStr += `${months} ${months === 1 ? 'mês' : 'meses'}`;
        }

        // Evita duplicar a duração caso o script execute mais de uma vez
        if (durationStr && !el.dataset.calculated) {
            el.textContent = `${el.textContent.trim()} (${durationStr})`;
            el.dataset.calculated = "true";
        }
    });
});

// --- 2. MOSTRAR / OCULTAR DETALHES DE UM CARD ESPECÍFICO ---
function toggleDetails(button) {
    const card = button.closest('.card');
    if (!card) return;
    
    const content = card.querySelector('.details-content');
    if (!content) return;

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Ver menos';
    } else {
        content.style.display = "none";
        button.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Ver mais detalhes';
    }
}   

// --- 3. MOSTRAR / OCULTAR BLOCO DE DEMAIS EXPERIÊNCIAS ---
function toggleMoreExperiences(button) {
    const hiddenSection = document.getElementById('demais-experiencias');
    if (!hiddenSection) return;

    if (hiddenSection.style.display === 'none' || hiddenSection.style.display === '') {
        hiddenSection.style.display = 'block';
        button.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Ocultar demais experiências';
    } else {
        hiddenSection.style.display = 'none';
        button.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Ver demais experiências profissionais';
    }
}