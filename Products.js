let men = document.getElementById("men")
let women = document.getElementById("women")
let child = document.getElementById("child")
let whole1 = document.getElementById("whole")
let wholex = document.getElementById("whole")
let wholey = document.getElementById("whole")

whole1.classList.add("whole2")
men.onclick = function() {
    function ram(results1) {
        let {
            id,
            title,
            badge_text,
            price,
            compare_at_price,
            vendor,
            image
        } = results1;
        whole1.classList.remove("oo")
        let divi2 = document.createElement("div")
        let divi3 = document.createElement("div")
        let ab = document.createElement("div")
        ab.classList.add("abb")
        let image_s = document.createElement("img")
        let but = document.createElement("button")
        but.textContent = "Add to Cart"
        but.classList.add("butt")
        divi3.classList.add("ohh")
        image_s.src = image
        image_s.alt = title
        image_s.classList.add("imagec")
        divi2.classList.add("imagess")
        let a = document.createElement("div")
        let lb = document.createElement("div")
        lb.classList.add("lbb")
        let b = document.createElement("h6")
        let c = document.createElement("p")
        let d = document.createElement("p")
        let e = document.createElement("p")
        a.classList.add("anc")
        d.textContent = "Price: " + "Rs. " + price
        e.textContent = "Rs. " + compare_at_price
        d.classList.add("hh")
        e.classList.add("ll")
        e.classList.add("compareprice")
        b.classList.add("hh")
        c.classList.add("pp")
        b.textContent = title
        c.textContent = vendor

        divi2.appendChild(image_s)
        a.appendChild(b)
        lb.appendChild(c)
        lb.appendChild(d)
        lb.appendChild(e)

        whole1.appendChild(a)
        whole1.appendChild(divi2)
        divi3.appendChild(but)
        ab.appendChild(divi2)
        ab.appendChild(a)
        ab.appendChild(lb)
        whole1.appendChild(ab)
        ab.appendChild(divi3)

        whole1.appendChild(ab)

    }
    let options = {
        method: "GET"
    }

    let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let {
                categories
            } = jsonData;

            for (let results of categories) {
                if (results.category_name === "Men") {
                    for (let results1 of results.category_products) {
                        console.log(results1)

                        ram(results1)

                    }
                }
            }
        })

}

women.onclick = function() {
    function ram(results1) {
        let {
            id,
            title,
            badge_text,
            price,
            compare_at_price,
            vendor,
            image
        } = results1;
        whole1.classList.remove("oo")

        let divi2 = document.createElement("div")
        let divi3 = document.createElement("div")
        let ab = document.createElement("div")
        ab.classList.add("abb")
        let image_s = document.createElement("img")
        let but = document.createElement("button")
        but.textContent = "Add to Cart"
        but.classList.add("butt")
        divi3.classList.add("ohh")
        image_s.src = image
        image_s.alt = title
        image_s.classList.add("imagec")
        divi2.classList.add("imagess")
        let a = document.createElement("div")
        let lb = document.createElement("div")
        lb.classList.add("lbb")
        let b = document.createElement("h6")
        let c = document.createElement("p")
        let d = document.createElement("p")
        let e = document.createElement("p")
        a.classList.add("anc")
        d.textContent = "Price: " + "Rs. " + price
        e.textContent = "Rs. " + compare_at_price
        d.classList.add("hh")
        e.classList.add("ll")
        e.classList.add("compareprice")
        b.classList.add("hh")
        c.classList.add("pp")
        b.textContent = title
        c.textContent = vendor

        divi2.appendChild(image_s)
        a.appendChild(b)
        lb.appendChild(c)
        lb.appendChild(d)
        lb.appendChild(e)

        whole1.appendChild(a)
        whole1.appendChild(divi2)
        divi3.appendChild(but)
        ab.appendChild(divi2)
        ab.appendChild(a)
        ab.appendChild(lb)
        whole1.appendChild(ab)
        ab.appendChild(divi3)

        whole1.appendChild(ab)

    }
    let options = {
        method: "GET"
    }

    let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let {
                categories
            } = jsonData;

            for (let results of categories) {
                if (results.category_name === "Women") {
                    for (let results1 of results.category_products) {
                        console.log(results1)

                        ram(results1)

                    }
                }
            }
        })

}
child.onclick = function() {
    function ram(results1) {
        let {
            id,
            title,
            badge_text,
            price,
            compare_at_price,
            vendor,
            image
        } = results1;
        whole1.classList.remove("oo")
        let divi2 = document.createElement("div")
        let divi3 = document.createElement("div")
        let ab = document.createElement("div")
        ab.classList.add("abb")
        let image_s = document.createElement("img")
        let but = document.createElement("button")
        but.textContent = "Add to Cart"
        but.classList.add("butt")
        divi3.classList.add("ohh")
        image_s.src = image
        image_s.alt = title
        image_s.classList.add("imagec")
        divi2.classList.add("imagess")
        let a = document.createElement("div")
        let lb = document.createElement("div")
        lb.classList.add("lbb")
        let b = document.createElement("h6")
        let c = document.createElement("p")
        let d = document.createElement("p")
        let e = document.createElement("p")
        a.classList.add("anc")
        d.textContent = "Price: " + "Rs. " + price
        e.textContent = "Rs. " + compare_at_price
        d.classList.add("hh")
        e.classList.add("ll")
        e.classList.add("compareprice")
        b.classList.add("hh")
        c.classList.add("pp")
        b.textContent = title
        c.textContent = vendor

        divi2.appendChild(image_s)
        a.appendChild(b)
        lb.appendChild(c)
        lb.appendChild(d)
        lb.appendChild(e)

        whole1.appendChild(a)
        whole1.appendChild(divi2)
        divi3.appendChild(but)
        ab.appendChild(divi2)
        ab.appendChild(a)
        ab.appendChild(lb)
        whole1.appendChild(ab)
        ab.appendChild(divi3)

        whole1.appendChild(ab)

    }
    let options = {
        method: "GET"
    }

    let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let {
                categories
            } = jsonData;

            for (let results of categories) {
                if (results.category_name === "Kids") {
                    for (let results1 of results.category_products) {
                        console.log(results1)

                        ram(results1)

                    }
                }
            }
        })

}