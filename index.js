let currentIndex = 0;
    const paragraphs = document.querySelectorAll('.paragraph');
    const intervalTime = 5000;

    function toggleMenu() {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.toggle('hidden');
    }

    function showParagraph(index) {
            const paragraphs = document.querySelectorAll('.paragraph');

            paragraphs.forEach((p, i) => {
                if (i === index) {
                    p.classList.add('active');
                } else {
                    p.classList.remove('active');
                }
            });
        }

        function cycleParagraphs() {
      currentIndex = (currentIndex + 1) % paragraphs.length;
      showParagraph(currentIndex);
    }

    setInterval(cycleParagraphs, intervalTime);