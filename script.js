const loginContainer =
    document.getElementById("loginContainer");

const loginButton =
    document.getElementById("loginButton");

const loginDropdown =
    document.getElementById("loginDropdown");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");

const shopButton =
    document.getElementById("shopButton");

const toast =
    document.getElementById("toast");


loginButton.addEventListener("click", function (event) {


    event.stopPropagation();



    loginContainer.classList.toggle("open");



    const isOpen =
        loginContainer.classList.contains("open");


    loginButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});



document.addEventListener(
    "click",
    function (event) {


        if (
            !loginContainer.contains(
                event.target
            )
        ) {

            loginContainer.classList.remove(
                "open"
            );

            loginButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);

mobileMenuButton.addEventListener(
    "click",
    function () {

        mobileMenu.classList.toggle(
            "open"
        );

        const isOpen =
            mobileMenu.classList.contains(
                "open"
            );


        if (isOpen) {

            mobileMenuButton.textContent =
                "✕";

        } else {

            mobileMenuButton.textContent =
                "☰";

        }


        mobileMenuButton.setAttribute(
            "aria-expanded",
            isOpen
        );


        mobileMenuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close menu"
                : "Open menu"
        );

    }
);
const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu a"
    );


mobileLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            mobileMenu.classList.remove(
                "open"
            );


            mobileMenuButton.textContent =
                "☰";


            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});


searchForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const searchValue =
            searchInput.value.trim();


        if (searchValue === "") {

            showToast(
                "Please enter something to search."
            );

            searchInput.focus();

            return;

        }



        showToast(
            `Searching for "${searchValue}"`
        );

    }
);

shopButton.addEventListener(
    "click",
    function () {


        document
            .getElementById("categories")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);

const dropdownItems =
    document.querySelectorAll(
        ".dropdown-item"
    );


dropdownItems.forEach(function (item) {

    item.addEventListener(
        "click",
        function () {


            const itemName =
                item
                    .querySelector("span:last-child")
                    .textContent
                    .trim();


            showToast(
                itemName + " selected"
            );

        }
    );

});


function showToast(message) {


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );
    clearTimeout(
        showToast.timer
    );


    showToast.timer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}