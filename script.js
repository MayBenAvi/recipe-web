document.getElementById('recipe-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const allergies = document.getElementById('allergies').value;
    const mood = document.getElementById('mood').value;
    const ingredients = document.getElementById('ingredients').value;

    try {
        const response = await fetch('https://your-backend-url/api/recipes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ allergies, mood, ingredients }),
        });

        if (!response.ok) throw new Error('Error fetching recipe.');

        const data = await response.json();
        document.getElementById('recipe-output').classList.remove('hidden');
        document.getElementById('recipes').innerText = data.recipe || 'No recipe found.';
    } catch (error) {
        console.error(error);
        document.getElementById('recipes').innerText = 'An error occurred.';
    }
});
