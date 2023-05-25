'use strict';

const sections = document.querySelectorAll('.section');
// const navLinks = document.querySelectorAll('a');

// Crate observer
const observer = new IntersectionObserver(
	(entries, observer) => {

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// Pobierz identyfikator sekcji widocznej w przeglądarce
				const visibleSectionId = entry.target.getAttribute('id');
				console.log('Visible section:', visibleSectionId);

				// Znajdź odpowiedni link nawigacyjny dla widocznej sekcji
				const navLink = document.querySelector(
					`nav a[href="#${visibleSectionId}"]`
				);
				if (navLink) {
					// Dodaj klasę aktywną dla widocznego linku nawigacyjnego
					navLink.classList.add('active');
				}
			} else {
				// Pobierz identyfikator sekcji, która nie jest już widoczna w przeglądarce
				const hiddenSectionId = entry.target.getAttribute('id');
				console.log('Hidden section:', hiddenSectionId);

				// Znajdź odpowiedni link nawigacyjny dla ukrytej sekcji
				const navLink = document.querySelector(
					`nav a[href="#${hiddenSectionId}"]`
				);
				if (navLink) {
					// Usuń klasę aktywną dla ukrytego linku nawigacyjnego
					navLink.classList.remove('active');
				}
			}
		});
	},
	{ threshold: 0.5 }
);

// Dodaj obserwator przekroju do każdej sekcji
sections.forEach((section) => {
	observer.observe(section);
});

// const observer = new IntersectionObserver(
// 	(entries, observer) => {
// 		let visibleSectionId = null; // ID widocznej sekcji

// 		entries.forEach((entry) => {
// 			if (entry.isIntersecting) {
// 				// Pobierz identyfikator sekcji widocznej w przeglądarce
// 				visibleSectionId = entry.target.getAttribute('id');
// 			}
// 		});

// 		// Usuń klasę aktywną ze wszystkich linków nawigacyjnych
// 		const navLinks = document.querySelectorAll('nav a');
// 		navLinks.forEach((navLink) => {
// 			navLink.classList.remove('active');
// 		});

// 		// Dodaj klasę aktywną dla widocznego linku nawigacyjnego
// 		if (visibleSectionId) {
// 			const activeNavLink = document.querySelector(
// 				`nav a[href="#${visibleSectionId}"]`
// 			);
// 			if (activeNavLink) {
// 				activeNavLink.classList.add('active');
// 			}
// 		}
// 	},
// 	{ threshold: 0.5}
// );

// // Dodaj obserwator przekroju do każdej sekcji
// sections.forEach((section) => {
// 	observer.observe(section);
// });

// Utwórz obserwator przekroju

// Utwórz obserwator przekroju
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const visibleSectionId = entry.target.getAttribute('id');
  
//         // Pobierz wysokość nawigacji
//         const navHeight = document.querySelector('nav').offsetHeight;
  
//         // Oblicz wysokość widocznego obszaru sekcji
//         const visibleSectionHeight = window.innerHeight - navHeight;
  
//         // Sprawdź, czy większość sekcji jest widoczna
//         if (entry.boundingClientRect.height > visibleSectionHeight * 0.5) {
//           // Dodaj klasę aktywną dla widocznego linku nawigacyjnego
//           const activeNavLink = document.querySelector(`nav a[href="#${visibleSectionId}"]`);
//           if (activeNavLink && !activeNavLink.classList.contains('active')) {
//             activeNavLink.classList.add('active');
//           }
  
//           // Usuń klasę aktywną z pozostałych linków nawigacyjnych
//           const inactiveNavLinks = document.querySelectorAll('nav a:not([href="#' + visibleSectionId + '"])');
//           inactiveNavLinks.forEach(link => {
//             if (link.classList.contains('active')) {
//               link.classList.remove('active');
//             }
//           });
//         }
//       }
//     });
//   }, { threshold: 0 });
  
//   // Dodaj obserwator przekroju do każdej sekcji
//   sections.forEach(section => {
//     observer.observe(section);
//   });
