document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the Religious Education Platform!');

    const bibleLinks = document.querySelectorAll("#bible-sections a");
    bibleLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            window.open(link.href, "_blank");
        });
    });
});
