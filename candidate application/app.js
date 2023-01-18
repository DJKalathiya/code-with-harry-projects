console.log('Welcome to project 5  in js');

// data is an array of object which contains information about candidate
const data = [
    {
        name: 'Jhon willy',
        age: 27,
        city: 'surat',
        language: "Python",
        framework: "DJango",
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: 'Jasprit sanu',
        age: 29,
        city: 'mumbai',
        language: "javaScript",
        framework: "ract",
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
        name: 'amit nayak',
        age: 40,
        city: 'Jharkhand',
        language: "javascript",
        framework: "Angular",
        image: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
        name: 'lady gagg',
        age: 35,
        city: 'surat',
        language: "Python",
        framework: "python framework",
        image: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
        name: 'sunny ben',
        age: 30,
        city:'delhi',
        language: "java",
        framework: "framwork",
        image: 'https://randomuser.me/api/portraits/women/7.jpg'
    }
]

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else {
        alert('End of candidate applications');
        window.location.reload();
    }

}
