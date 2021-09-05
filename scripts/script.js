(function () {

    const menuList = [
        {
            name: 'Products',
            href: 'https://www.varicent.com/sales-performance-management',

        },
        {
            name: 'Solutions',
            href: 'https://www.varicent.com/solutions',

        },
        {
            name: 'Customers',
            href: 'https://www.varicent.com/customers',

        },
        {
            name: 'Company',
            href: 'https://www.varicent.com/company',

        },
        {
            name: 'Resources',
            href: 'https://www.varicent.com/resources',

        },
        {
            name: 'Search',
            href: 'https://www.varicent.com/hs-search-results',
            listClass: 'nav-item d-block d-md-none'

        },
        {
            name: 'Book a Demo',
            listClass: 'nav-item d-block d-md-none mt-2',
            href: 'https://www.varicent.com/book-a-demo',
            aClass: 'btn btn-primary'
        }
    ]

    const injectMainMenus = () => {
        menuList.forEach((item) => {
            const li = document.createElement('li');
            li.className = item.listClass || 'nav-item';
            const aTag = document.createElement('a');
            aTag.innerText = item.name;
            aTag.setAttribute('href', item.href);
            aTag.className = item.aClass || 'nav-link';
            li.append(aTag);
            document.querySelector('#navbarNav .navbar-nav').appendChild(li);
        });
    }

    const partnerLogos = [{
        url: './images/magyar-telecom-customer-logo.png',
    }, {
        url: './images/shopify-customer-logo.png'
    }, {
        url: './images/holt-renfrew-customer-logo.png'
    }, {
        url: './images/siemens-healthineers-customer-logo.png'
    }, {
        url: './images/thermofisher-scientific-customer-logo.png'
    }, {
        url: './images/herold-customer-logo.png'
    }];

    const injectPartnerLogos = () => {
        let logoElems = '';
        partnerLogos.forEach((item) => {
            logoElems += `<div class="col" style="width: 16.66%;">
            <div class="logo-relative"><img src="${item.url}"
                width="110" height="58"
                class="d-block mx-auto" style="width: 110px;"></div>
          </div>`
        });

        document.querySelector('#logoElems').innerHTML = logoElems;
    }

    injectMainMenus();
    injectPartnerLogos();
})();