# Input

The user interacts with a dropdown menu containing movie genres. They can select a specific genre or choose "All" to display the entire list. Additionally, the user can click on any movie title to trigger an alert popup showing the movie’s name.

# Process

The app is built using React and uses functional components along with the useState hook. The `MovieList` component maintains the list of movie data in a constant and uses state to track the selected genre. When the user selects a genre, the component filters the original movie list to display only those that match. The `map()` function renders each movie as a styled list item (card). The click event is handled using an arrow function to show an alert when a movie is clicked.

# Output

The output is a visually styled movie list, filtered in real time based on genre selection. The user sees a set of movie cards with titles, genres, and release years. Clicking a movie displays an alert box showing its title. The list updates instantly as different genres are selected from the dropdown, providing a smooth user experience.
