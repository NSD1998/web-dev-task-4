// Function to get query parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        des: params.get('des'),
        image: params.get('image'),
        releaseDate: params.get('releaseDate')
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const params = getQueryParams();

    if (params.name) {
        document.getElementById('movie-image').src = params.image;
        document.getElementById('movie-title').textContent = params.name;
        document.getElementById('movie-description').textContent = params.des;
        document.getElementById('movie-release-date').textContent = `Release Date: ${params.releaseDate}`;
    } else {
        document.querySelector('.movie-details').innerHTML = '<p>Movie details not found.</p>';
    }
});
