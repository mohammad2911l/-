function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}