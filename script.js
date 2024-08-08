document.getElementById('startBot').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;
    if (prompt.trim() === '') {
        alert('Bitte gib einen Prompt ein!');
        return;
    }

    try {
        const response = await fetch('/start-bot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        if (!response.ok) {
            throw new Error('Fehler beim Starten des Bots');
        }

        const result = await response.text();
        document.getElementById('resultBox').textContent = result;
    } catch (error) {
        console.error('Fehler:', error);
        alert('Ein Fehler ist aufgetreten.');
    }
});
