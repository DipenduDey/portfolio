const reactDescription = ["Fundamental", "Crucial", "Core"]

function getRandom(max) {
    return Math.floor(Math.random() * (max + 1))
}

function Header() {
    return (
        <>
            <header>
                <div class="image-cropper">

                    <img class="profile-pic" src="src/assets/my_photo.jpg" alt="Stylized atom" />
                </div>
                <h1>DIPENDU DEY</h1>
                <p>
                    {reactDescription[getRandom(2)]} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        </>
    )
}

export default Header;