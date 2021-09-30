function main(val) {
    if (val == "all") {
        pics = document.getElementsByClassName('fruit');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "block";
        }
        pics = document.getElementsByClassName('vegetable');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "block";
        }
        pics = document.getElementsByClassName('meat');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "block";
        }
        pics = document.getElementsByClassName('nuts');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "block";
        }
    }
    else if (val == "fruit") {
        pics = document.getElementsByClassName('fruit');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "block";
        }
        pics = document.getElementsByClassName('vegetable');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        pics = document.getElementsByClassName('meat');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        pics = document.getElementsByClassName('nuts');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
    }
    else if (val == "vegetable") {
        pics = document.getElementsByClassName('fruit');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        pics = document.getElementsByClassName('vegetable');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "block";
        }
        pics = document.getElementsByClassName('meat');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        pics = document.getElementsByClassName('nuts');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
    }
    else if (val == "meat") {
        pics = document.getElementsByClassName('fruit');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        pics = document.getElementsByClassName('vegetable');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        pics = document.getElementsByClassName('meat');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "block";
        }
        pics = document.getElementsByClassName('nuts');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
    }
    else if (val == "nuts") {
        pics = document.getElementsByClassName('fruit');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        pics = document.getElementsByClassName('vegetable');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        pics = document.getElementsByClassName('meat');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        pics = document.getElementsByClassName('nuts');
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "block";
        }
    }
}