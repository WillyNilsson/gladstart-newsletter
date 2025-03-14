document.addEventListener('DOMContentLoaded', function() {
    // Fetch the newsletter data
    fetch('newsletter-data.json')
        .then(response => response.json())
        .then(data => {
            // Populate the newsletter info
            populateNewsletterInfo(data.newsletterInfo);
            
            // Populate the upcoming newsletter
            populateUpcomingNewsletter(data.upcomingNewsletter);
            
            // Populate testimonials
            populateTestimonials(data.testimonials);
            
            // Populate featured stories
            populateFeaturedStories(data.featuredStories);
            
            // Populate categories
            populateCategories(data.categories);
            
            // Set up event listeners
            setupEventListeners();
        })
        .catch(error => {
            console.error('Error loading newsletter data:', error);
        });
});

function populateNewsletterInfo(info) {
    // Set newsletter title
    document.getElementById('newsletter-title').textContent = info.title;
    
    // Set tagline
    document.getElementById('tagline').textContent = info.tagline;
    
    // Set description
    document.getElementById('newsletter-description').textContent = info.description;
    
    // Set news avoidance message
    document.getElementById('news-avoidance-message').textContent = info.newsAvoidanceMessage;
    
    // Set frequency
    document.getElementById('frequency').textContent = info.frequency;
    
    // Set call to action
    document.getElementById('cta-button').textContent = info.callToAction;
    document.getElementById('final-cta-button').textContent = info.callToAction;
    
    // Set lead magnet
    document.getElementById('lead-magnet').textContent = info.leadMagnet;
}

function populateUpcomingNewsletter(upcoming) {
    // Set title
    document.getElementById('upcoming-title').textContent = upcoming.title;
    
    // Set date
    document.getElementById('upcoming-date').textContent = upcoming.date;
    
    // Set topics
    const topicsList = document.getElementById('upcoming-topics');
    topicsList.innerHTML = '';
    
    upcoming.topics.forEach(topic => {
        const li = document.createElement('li');
        li.textContent = topic;
        topicsList.appendChild(li);
    });
}

function populateTestimonials(testimonials) {
    const container = document.getElementById('testimonials-container');
    container.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        card.innerHTML = `
            <p class="testimonial-quote">${testimonial.quote}</p>
            <div class="testimonial-author">
                <div class="testimonial-author-info">
                    <div class="testimonial-avatar"></div>
                    <div>
                        <div class="testimonial-author-name">${testimonial.name}</div>
                        <div class="testimonial-author-location">${testimonial.location}</div>
                    </div>
                </div>
                <div class="positivity-score">+${testimonial.positivityScore}%</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function populateFeaturedStories(stories) {
    const container = document.getElementById('featured-stories');
    container.innerHTML = '';
    
    stories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        
        card.innerHTML = `
            <div class="story-image"></div>
            <div class="story-content">
                <div class="story-meta">
                    <div class="story-source">${story.source}</div>
                    <div class="positivity-score">+${story.positivityScore}%</div>
                </div>
                <h3 class="story-title">${story.title}</h3>
                <p class="story-summary">${story.summary}</p>
                <div class="story-date">${story.date}</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function populateCategories(categories) {
    const container = document.getElementById('category-tags');
    container.innerHTML = '';
    
    categories.forEach(category => {
        const tag = document.createElement('div');
        tag.className = 'category-tag';
        tag.textContent = category;
        
        container.appendChild(tag);
    });
}

function setupEventListeners() {
    // Subscribe buttons
    const subscribeButtons = document.querySelectorAll('.subscribe-button, .primary-button');
    subscribeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // In a real implementation, this would handle form submission
            // For now, we'll just show an alert
            alert('Tack för ditt intresse! Detta skulle skicka dina uppgifter till ett newsletter-system.');
        });
    });
    
    // Download lead magnet button
    const downloadButton = document.querySelector('.secondary-button');
    downloadButton.addEventListener('click', () => {
        alert('I en verklig implementation skulle detta ladda ner lead magnet-PDF:en.');
    });
    
    // Category tags
    const categoryTags = document.querySelectorAll('.category-tag');
    categoryTags.forEach(tag => {
        tag.addEventListener('click', () => {
            alert(`Du har valt kategorin: ${tag.textContent}`);
        });
    });
    
    // Story cards
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.story-title').textContent;
            alert(`Du har klickat på artikeln: ${title}`);
        });
    });
}
