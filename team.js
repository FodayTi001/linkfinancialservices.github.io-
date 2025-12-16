// team.js

document.addEventListener('DOMContentLoaded', () => {
    const viewButtons = document.querySelectorAll('.view-btn');
    const modal = document.getElementById('profile-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalImage = document.getElementById('modal-image');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalDescription = document.getElementById('modal-description');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const profileDetails = event.target.closest('.team-card').querySelector('.profile-details');
            modalImage.src = event.target.closest('.team-card').querySelector('img').src;
            modalName.textContent = event.target.closest('.meta').querySelector('.name').textContent;
            modalRole.textContent = event.target.closest('.meta').querySelector('.role').textContent;

            // Toggle visibility of modal description
            if (profileDetails) {
                modalDescription.innerHTML = profileDetails.innerHTML; // Use innerHTML to bring the content
            } else {
                modalDescription.innerHTML = "No profile details available.";
            }

            // Display the modal
            modal.style.display = 'block';
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal on outside click
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const filterValue = button.getAttribute('data-filter');
            const teamCards = document.querySelectorAll('.team-card');
            
            teamCards.forEach(card => {
                const cardType = card.classList.contains(filterValue) || filterValue === 'all';
                card.style.display = cardType ? 'block' : 'none';
            });

            // Update button active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});