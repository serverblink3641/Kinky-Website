document.addEventListener('DOMContentLoaded', () => {
    // Load dynamic content (reviews, news, deals)
    loadReviews();
    loadNews();
    loadDeals();

    // Form submission handler
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Send data to server
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Sign up successful!');
            } else {
                alert('Error signing up. Please try again.');
            }
        });
    });
});

function loadReviews() {
    // Fetch and display reviews
    fetch('/reviews')
        .then(response => response.json())
        .then(data => {
            const reviewsContainer = document.getElementById('reviews-container');
            data.reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review';
                reviewElement.innerHTML = `<h3>${review.title}</h3><p>${review.content}</p>`;
                reviewsContainer.appendChild(reviewElement);
            });
        });
}

function loadNews() {
    // Fetch and display news
    fetch('/news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.news.forEach(news => {
                const newsElement = document.createElement('div');
                newsElement.className = 'news';
                newsElement.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
                newsContainer.appendChild(newsElement);
            });
        });
}

function loadDeals() {
    // Fetch and display deals
    fetch('/deals')
        .then(response => response.json())
        .then(data => {
            const dealsContainer = document.getElementById('deals-container');
            data.deals.forEach(deal => {
                const dealElement = document.createElement('div');
                dealElement.className = 'deal';
                dealElement.innerHTML = `<h3>${deal.title}</h3><p>${deal.content}</p>`;
                dealsContainer.appendChild(dealElement);
            });
        });
}
