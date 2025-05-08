document.addEventListener('DOMContentLoaded', () => {
    // Get all STRIDE items and details
    const strideItems = document.querySelectorAll('.stride-item');
    const strideDetails = document.querySelectorAll('.stride-detail');

    // Function to show STRIDE detail
    const showStrideDetail = (category) => {
        // Hide all details first
        strideDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        // Show the selected detail
        const selectedDetail = document.getElementById(category);
        if (selectedDetail) {
            selectedDetail.classList.add('active');
        }

        // Update active state of items
        strideItems.forEach(item => {
            if (item.dataset.category === category) {
                item.style.backgroundColor = 'var(--primary-color)';
            } else {
                item.style.backgroundColor = 'var(--secondary-color)';
            }
        });
    };

    // Add click event listeners to STRIDE items
    strideItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            showStrideDetail(category);
        });
    });

    // Show the first STRIDE detail by default
    if (strideItems.length > 0) {
        const firstCategory = strideItems[0].dataset.category;
        showStrideDetail(firstCategory);
    }

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 