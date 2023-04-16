let posts = [
    { id: 1, isim: "Enes", post: "Uzay" },
    { id: 2, isim: "Ahmet", post: "Dünya" },
    { id: 3, isim: "Ayşe", post: "Evren" },
    { id: 4, isim: "Melis", post: "Doğa" },
];

const showBlog = () => {
    posts.map(post => console.log(post));
}


const addPost = (id, isim, post) => {
    posts.push({ id: id, isim: isim, post: post });
}

const newPosts = async () => {
    try {
        await addPost(6, "Hasan", "Hayvanlar");
        showBlog();
    } catch (error) {
        console.log(error);
    }
}

newPosts();

