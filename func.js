let books = [
    "Tafsir Al Qurtubi # Al Qurtubi # Aisha Bewley # English # Islam, Tafseer # https://ia801906.us.archive.org/30/items/TafsirAlQurtubiVolI/Tafsir%20al%20Qurtubi%20-%20Vol%20I.pdf # https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwulnwAZnhoUaz9dyXEpqyf7VKF7GfXDt1Wg&usqp=CAU",
    "Hamlet # William Shakespeare # N/A # English # Play, Tragedy, English # https://www.w3.org/People/maxf/XSLideMaker/hamlet.pdf # https://storage.googleapis.com/media365-live.appspot.com/b4f85bf3-c5ba-4c52-a2f6-452b1b157b8d/fa8c7171-ac02-4537-9eb4-9d9c474743bb/49424cf2-f58a-4560-8c0e-133472c24288.jpg",
    "The Three Fundamental Principles # Muhammad Ibn Sulayman At Tameemee, Aboo Shaybah # N/A # English, Arabic # Islam # https://qaryah.files.wordpress.com/2011/11/class_3usool.pdf # https://www.sifatusafwa.com/15486/cart_default.jpg",
    "The Art of War # Sun Tzu # Lionel Giles # English # War, Strategy # https://sites.ualberta.ca/~enoch/Readings/The_Art_Of_War.pdf # https://image.isu.pub/080216141343-d5dfbb0651434e4881dea5ca3941d7be/jpg/page_1_thumb_large.jpg",
    "El Corán # N/A # Julio Cortés # Spanish # Islam, Quran # https://ia800103.us.archive.org/19/items/quran-trans/spanish.pdf # https://elpetirrojoec.com/wp-content/uploads/2021/06/312355_IMAGEN_TAPA_G_001.jpg",
    "Sahih Al Bukhari # Imam Al Bukhari, Muhammad Muhsin Khan # N/A # English, Arabic # Islam, Hadeeth # https://www.muslim-library.com/dl/books/English_The_Translation_of_the_Meanings_of_Summarized_Sahih_Al_Bukhari.pdf # https://archive.org/services/img/SummarizedSahihAl-bukhari.pdf/full/pct:200/0/default.jpg",
    "The War of Art # Steven Pressfield # N/A # English # Misc. # https://aimeeknight.files.wordpress.com/2016/01/the-war-of-art_fastpencil_pbo.pdf # https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1384802951l/18620536.jpg",
    "A Summary of Islamic Jurisprudence (Volume 1) # Dr. Salih Al-Fawzan # Dar Al Asimah # English # Islam # https://darpdfs.org/wp-content/uploads/2020/04/A-Summary-Of-Islamic-Jurisprudence-Vol.-1-Sh.-Salih-Al-Fawzan-compressed.pdf # https://cdn.discordapp.com/attachments/1006384677768138865/1006890600878059630/unknown.png",
    "A Summary of Islamic Jurisprudence (Volume 2) # Dr. Salih Al-Fawzan # Dar Al Asimah # English # Islam # https://ia902904.us.archive.org/34/items/ASummaryOfIslamicJurisprudence/En_a_summary_of_islamic_jurisprudence_part2.pdf # https://cdn.discordapp.com/attachments/1006384677768138865/1006892456274579456/unknown.png",
    "The Boy and the Demon # Sultan Orzan bin Muhammad # N/A # English # Folk # https://docdro.id/5Mbbu19 # https://cdn.discordapp.com/attachments/1006384677768138865/1006895085956382790/Screen_Shot_2022-08-10_at_7.01.29_AM.png",
    "Confirmed Jannati Hai # Sultan Orzan bin Muhammad # N/A # English # Folk, Islam # https://docdro.id/bTLfv42 # https://cdn.discordapp.com/attachments/1006384677768138865/1006895470204964864/unknown.png",
    "Riyad As Saliheen # Imam An Nawawi # Dar Al Manarah # English # Islamic, Hadeeth # https://masjidtaqwa.org/pdfs/Riyad-us-Saliheen.pdf # http://cdn.shopify.com/s/files/1/0075/3290/4561/products/Riyad_Us_Saliheen__2_Vol.__dsbooks_australia_darussalam_islamicbookstore.jpg?v=1619087522",
    "القرآن الكريم # N/A # N/A # Arabic # Islam, Quran # http://islamicbook.ws/quran/quran.pdf # https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547257935l/25766113._SX318_.jpg",
    "1984 # George Orwell # N/A # English # English # https://rauterberg.employee.id.tue.nl/lecturenotes/DDM110%20CAS/Orwell-1949%201984.pdf # https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/01/2a34d8_a6741e88335241308890543d203ad89dmv2-1.jpg?resize=500%2C815&ssl=1",
    "Macbeth # William Shakespeare # N/A # English # Play, Tragedy, English # https://thesefantasticworlds.com/wp-content/uploads/2016/04/Tragedy-of-Macbeth.pdf # https://www.insightpublications.com.au/wp-content/uploads/2018/07/ISP_Macbeth_cover_front.jpg",
]

let bookshelf = document.querySelector(".bookshelf");

function createBook() {
    books.forEach(book => {
        let info = book.split("#");

        bookshelf.innerHTML +=
        `<button class="book-box" onclick="openFile('${info[5].trim()}')">
            <div class="left-side">
                <img class="book-cover" src="${info[6]}" alt="">
            </div>
            <div class="right-side">
                <div class="book-title-authors">
                    <p class="book-title">${info[0]}</p>
                    ${checkAuthors(info[1])}
                </div>
                ${checkTranslators(info[2])}
                <div class="languages-div">
                    ${checkLanguages(info[3])}
                </div>
                <div class="categories-div">
                    ${checkCategories(info[4])}
                </div>
            </div>
        </button>`
    });
}

createBook();

function checkAuthors(info) {
    if (info !== " N/A ") return `<p class="book-authors">${info}</p>`;
    else return "";
}

function checkTranslators(info) {
    if (info !== " N/A ") return `<p class="book-translators">Translated by ${info}</p>`;
    else return "";
}

function checkLanguages(info) {
    let parts = info.split(",");
    
    if (parts.length > 1) {
        let partsToReturn = "";

        parts.forEach(part => {
            partsToReturn += `<div class="language-button">${part}</div>`
        });

        return partsToReturn;
    }
    else {
        return `<div class="language-button">${parts}</div>`
    }
}

function checkCategories(info) {
    let partsUntrimmed = info.split(",");
    let parts = partsUntrimmed.map(part => {
        return part.trim();
    });
    if (parts.length > 1) {
        let partsToReturn = "";

        parts.forEach(part => {
            partsToReturn += `<a href="#" class="category-button">#${part}</a>`
        });

        return partsToReturn;
    }
    else if (parts.length == 1) {
        return `<a href="#" class="category-button">#${parts}</a>`
    }
}

function openFile(file) {
    let url = window.location.toString().replace("library/", `pdf-viewer.html/#${file}`);
    window.open(url, "_blank");
}

let noBooksAvailable = document.getElementById("no-books-available");

function setUpdateBookViewTimeout(href)
{
    setTimeout( function() { updateBookView(href); }, 1 );
}

function updateBookView(href) {
    let category = window.location.toString().split("#")[1];

    for (let i = 0; i < bookshelf.children.length; i++) {
        let book = bookshelf.children[i];

        let categoriesText = book.querySelector(".categories-div").innerHTML.toLowerCase();

        console.log(category, categoriesText);
        if (categoriesText.includes(category)) {
            book.classList.remove("hide-category");
        }
        else book.classList.add("hide-category");
    }

    if (bookshelf.querySelectorAll(".hide-category").length == bookshelf.children.length) {
        noBooksAvailable.style.display = "block";
    }
    else noBooksAvailable.style.display = "none";
}
