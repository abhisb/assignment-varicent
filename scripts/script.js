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

    const footerList = [{
        section: [{
            name: 'Products',
            url: 'https://www.varicent.com/'
        }, {
            name: 'Sales Performance Management',
            url: 'https://www.varicent.com/sales-performance-management'
        }, {
            name: 'Incentive Compensation Management',
            url: 'https://www.varicent.com/incentive-compensation-management'
        }, {
            name: 'Revenue Intelligence',
            url: 'https://www.varicent.com/revenue-intelligence'
        }, {
            name: 'Territory and Quota Planning',
            url: 'https://www.varicent.com/sales-territory-planning'
        }, {
            name: 'Symon.AI',
            url: 'https://www.varicent.com/symon.ai'
        }, {
            name: 'Integrations',
            url: 'https://www.varicent.com/integrations'
        }]
    }, {
        section: [{
            name: 'Resources',
            url: 'https://www.varicent.com/'
        }, {
            name: 'Sales Performance Think Tank',
            url: 'https://www.varicent.com/blog'
        }, {
            name: 'Varicent Academy',
            url: 'https://www.varicent.com/resources/academy'
        }, {
            name: 'ROI Calculator',
            url: 'https://www.varicent.com/lets-calculate-your-potential-roi'
        }, {
            name: 'Webinars',
            url: 'https://www.varicent.com/webinars'
        }, {
            name: 'Events',
            url: 'https://www.varicent.com/events'
        }, {
            name: 'Whitepapers',
            url: 'https://www.varicent.com/whitepapers-studies'
        }, {
            name: 'Educational Services',
            url: 'https://www.varicent.com/resources/educational-services'
        }]
    }, {
        section: [{
            name: 'Company',
            url: 'https://www.varicent.com/'
        }, {
            name: 'About',
            url: 'https://www.varicent.com/about-varicent'
        }, {
            name: 'Who is Varicent?',
            url: 'https://www.varicent.com/who-is-varicent'
        }, {
            name: 'Our Cause',
            url: 'https://www.varicent.com/company/our-cause'
        }, {
            name: 'EDGE Scholarship',
            url: 'https://www.varicent.com/company/edge-scholarship'
        }, {
            name: 'News',
            url: 'https://www.varicent.com/releases'
        }, {
            name: 'Careers',
            url: 'https://www.varicent.com/company/careers'
        }, {
            name: 'Customer Exclusive Offerings',
            url: 'https://www.customers.varicent.com/'
        }, {
            name: 'Partners',
            url: 'https://www.varicent.com/company/partners'
        }, {
            name: 'Linkedin',
            url: '"https://www.linkedin.com/company/varicent-software/'
        }]
    }, {
        section: [{
            name: 'Help',
            url: 'https://www.varicent.com/'
        }, {
            name: 'Book a Demo',
            url: 'https://www.varicent.com/book-a-demo'
        }, {
            name: 'Contact Us',
            url: 'https://www.varicent.com/contact-us'
        }, {
            name: 'Support',
            url: 'https://www.varicent.com/company/support'
        }, {
            name: 'EDGE ScholarshipSearch',
            url: 'https://www.varicent.com/company/hs-search-results'
        }, {
            name: 'Privacy',
            url: 'https://www.varicent.com/privacy-policy'
        }, {
            name: 'Terms and Conditions',
            url: 'https://www.varicent.com/terms-and-conditions'
        }, {
            name: 'Symon.AI - Terms and Conditions',
            url: 'https://www.customers.varicent.com/terms-and-conditions-symon'
        }, {
            name: 'Varicent Concert - Terms of Service',
            url: 'https://www.varicent.com/company/concert-terms-of-service'
        }]
    }];

    const injectFooter = () => {
        let footer = '';
        footerList.forEach(item => {
            let footerObj = `<ul class="col-6 col-md mb-4">`
            item.section.forEach((sec, index) => {
                footerObj += `<li class="${index === 0 ? 'parent-nav' : ''}"><a target="self" href="${sec.url}">${sec.name}</a></li>`
            });
            footerObj += `</ul>`;
            footer += footerObj;
        });
        document.querySelector('#footerElem').innerHTML = footer;
    }

    injectMainMenus();
    injectPartnerLogos();
    injectFooter();
})();