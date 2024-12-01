let counter = 3;

let posts = [
    {
        id: 1,        
        titulo: "Here Comes Hodor",
        fecha: "September 29, 2024 at 4:56 pm",
        contenido: `I promised you all a report on our trip.

        I haven’t forgotten.   We left Santa Fe on July 15, and returned home on August 15.   In between, we visited Belfast in Northern Ireland (and Ashford Meadow in the Reach), Amsterdam, London, Oxford, and Glasgow, where the World Science Fiction Convention was being held.
        
        It was a splendid trip, and one that did wonders to restore my bruised and battered spirits and relieve some of the stress that I had been under before we left.   The first few months of 2024 had been… well, no fun, let us say.   January, February, March… things just kept getting worse until we came to April Fool’s Day, when it finally dawned on me that I was the fool, and had been for years.   But I do not want to talk about that now.  (Or maybe ever.  We shall see).
        
        But never mind about that.   I wanted to talk about our travels.    And I did… at Bubonicon, a few weeks after we returned, when I spoke about the trip and its impact on me during a speech called “Eighty Minutes With George R.R. Martin.”  It was a pretty good speech — at least I thought it was — and one I had hoped to share with you.   We did record it.  Unfortunately, the iPhone malfunctioned, and the recording was lost.   My staff has spent weeks trying to recover it, or as much as can be recovered at least,  but it appears to be a lost cause.  And of course I did not have a written text.  I was speaking off the cuff.
        
        I do recall some of the things I touched on.   Only the broad strokes, though, not the exact words.
        
        I had intended to do a lengthy Trip report once we got back to the Land of Enchantment, but unfortunately I managed to pick up a case of covid at worldcon (along with two of my assistants), so I found myself in no condition to write much of anything for a week.  I am better now, though.  Or at least I do not have covid.   Sadly, a lot of the stress that I escaped during my travels has crept back in again, but I suppose there is no avoiding that.   So let me begin at the beginning, in Northern Ireland.
        
        GAME OF THRONES filmed all over the world, you may recall.   Scotland, Morocco, Iceland, Malta, Spain, and Croatia… but our main location was in Northern Ireland, in and around Belfast and the Titanic Quarter, where the Paint Hall of the old shipyards had been transformed into four huge sound stages, among the largest in the U.K.   That’s where the throne room was, and the Iron Throne, and most of the other interiors of the Red Keep.   I visited there a number of times during our filming.   It was in Belfast, and in Scotland’s Castle Doune the week before it, that I first met most of GOT’s amazing cast: Sean Bean, Mark Addy, Peter Dinklage, Kit Harington, Maisie Williams, Sophie Turner, Lena Headey, Ron Donachie, Alfie Allen, and all the rest… among them Kristian Nairn, our one and only Hodor.
        
        Which made it a delight that Kristian was the first old friend we encountered when in Belfast, the first stop of our trips.   He still lives there, working as a DJ, doing some acting… and writing.  He has a book coming out, a memoir called BEYOND THE THRONE, about his boyhood during the Troubles, his days on GAME OF THRONES, and so much more.   He told us all about it during our lunch.`,
        imgUrl: "https://georgerrmartin.com/notablog/wp-content/uploads/2024/09/81Lz64ng9kL._SL1500_-679x1024.jpg",
        tags: ["game of thrones", "television", "travels"]
    },
    {
        id: 2,
        titulo: "HOUSE RULES",
        fecha: "September 28, 2024 at 1:42 pm",
        contenido: `All you aces and jokers out there, go ahead and mark  FEBRUARY 25, 2025 on your calendars.  There’s a party going down on Keun Island, off the Atlantic Coast of  Cornwall, and you’re invited!

        That’s the day Penguin Random House will be releasing the hardcover edition of  HOUSE RULES, the 34th original in our on-going Wild Cards series.   Guests will be gathering at the ancient, historic, mysterious (some say haunted) Loveday House..  Lord Jago Branoc and his staff will be on hand to welcome you.`,
        imgUrl: "https://georgerrmartin.com/notablog/wp-content/uploads/2024/09/IMG_0224.jpg",
        tags: ["bantam spectra", "editing", "santa fe", "wild cards"]
    },
    {
        id: 3,
        titulo: "Mary-Margaret In the Mojave",
        fecha: "September 24, 2024 at 8:01 pm",
        contenido: `Mary-Margaret Road Grader is heading for the Mojave, along with Billy-Bob Chevrolet, Freddy-in-the-Hollow, Elmo John Deere, and Simon Red Bulldozer.   You will find them all this weekend at the Wasteland Film Festival, “the world’s first post-apocalyptic short competition and exhibition.”`,
        imgUrl: "https://georgerrmartin.com/notablog/wp-content/uploads/2024/09/poster4.jpg-663x1024.jpg",
        tags: []
        
    }
    
]


const getPosts = () => {
    if (localStorage.getItem('posts')) {
        posts = JSON.parse(localStorage.getItem('posts'));
    }
    return posts;
}

const addPost = (post) => {
    post.id = counter++;
    posts.push(post);
    console.log(posts);
    localStorage.setItem('posts', JSON.stringify(posts));
}

const postFuncs = { getPosts, addPost }

export default postFuncs;