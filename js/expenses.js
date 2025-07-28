// Franklin Nweke Services - expenses.js
// A side project by Chigozie Franklin Nweke (Student ID: 8972856)

$(document).ready(function() {
    // Load expenses from localStorage or initialize
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function updateTotal() {
        let total = 0;
        for (let i = 0; i < expenses.length; i++) {
            total += parseFloat(expenses[i].amount);
        }
        // Animate total for advanced JS feature
        let displayed = parseFloat($('#total-amount').text());
        let step = (total - displayed) / 20;
        let count = 0;
        let interval = setInterval(function() {
            if (count < 19) {
                displayed += step;
                $('#total-amount').text(displayed.toFixed(2));
                count++;
            } else {
                $('#total-amount').text(total.toFixed(2));
                clearInterval(interval);
            }
        }, 20);
    }

    function renderExpenses() {
        const tbody = $('#expenses-table tbody');
        tbody.empty();
        for (let i = 0; i < expenses.length; i++) {
            const exp = expenses[i];
            const row = $('<tr></tr>');
            row.append(`<td>${exp.date}</td>`);
            row.append(`<td>${exp.name}</td>`);
            row.append(`<td>$${parseFloat(exp.amount).toFixed(2)}</td>`);
            row.append(`<td><button class="delete-btn" data-index="${i}">Delete</button></td>`);
            tbody.append(row);
        }
    }

    // Add expense
    $('#expense-form').on('submit', function(e) {
        e.preventDefault();
        const name = $('#expense-name').val().trim();
        const amount = $('#expense-amount').val();
        if (!name || !amount || parseFloat(amount) <= 0) {
            alert('Please enter a valid name and amount.');
            return;
        }
        const date = new Date().toLocaleDateString();
        expenses.push({ name, amount, date });
        saveExpenses();
        renderExpenses();
        updateTotal();
        $('#expense-form')[0].reset();
    });

    // Delete expense
    $('#expenses-table').on('click', '.delete-btn', function() {
        const idx = $(this).data('index');
        if (confirm('Delete this expense?')) {
            expenses.splice(idx, 1);
            saveExpenses();
            renderExpenses();
            updateTotal();
        }
    });

    // Initial render
    renderExpenses();
    updateTotal();
}); 