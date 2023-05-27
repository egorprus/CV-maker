const data = {
    main: {
        location: 'Minsk, Belarus',
        telephone: '+375257107036',
        mail: 'prus.egor.nik@gmail.com',
        name: 'Egor Prus',
        position: 'Frontend developer',
        description: 'Qualified technical specialist and 2 years of developing scalable and user-friendly applications in Fintech. Looking for a Frontend Developer role in a fast growing company to help grow the business and share solid experience with the team',
    },
    category_list: [
        'Employment History',
        'Education',
        'Links',
        'Skills',
        'Languages'
    ],
    work_experience: [
        {
            id: 1,
            position: 'Frontend developer',
            company_name: 'Aventus IT',
            company_location: 'Minsk',
            cooperation_time: {
                start: 'December 2020',
                end: 'December 2022'
            },
            description: [
                {
                    title: 'SPA project(Fintech)',
                    responsibilities: [
                        'I split the common stylesheet into components.',
                        'Optimized backend queries for better performance. Created new requests and processed responses.',
                        'Created forms with fields (redux-form), added validation and error handling.',
                        'Connected third-party APIs (OzForensics, HyperVerge, JuicyScore): for checking documents, for liveness check, for analyzing user actions on the page.',
                        'Refactored the code, brought the files to a single style. Created reusable components.',
                        'Participated in code review'
                    ]
                }
            ],
            technology: 'Javascript, React.js, Redux, SCSS, Webpack, Docker, Git, Gitlab'
        },
        {
            id: 2,
            position: 'Frontend developer',
            company_name: 'LWO',
            company_location: 'Minsk',
            cooperation_time: {
                start: 'October 2018',
                end: 'October 2020'
            },
            description: [
                {
                    title: 'Bank marketplace',
                    responsibilities: [
                        'I created complex animation with js, used 3d animation, added animation with css.',
                        'Created pages according to ready-made layouts in Zeplin, cross-browser and adaptive with support for old browsers.',
                        'Participated in the development of various themes for the site and the addition of accessibility for people with disabilities.',
                        'Set localization to 3 languages ​​(i18next)'
                    ]
                },
                {
                    title: 'Personal account of Internet banking',
                    responsibilities: [
                        'Created new functionality: new pages, menus, navigation, dropdown.',
                        'Setting up work with files and payment systems.',
                        'Cross-browser and adaptive layout with support for older browsers.',
                        'Code refactored.'
                    ]
                },
                {
                    title: 'Application for collectors',
                    responsibilities: [
                        'Created new class components (React).',
                        'Added animation.',
                        'Material UI used as styles.',
                        'Added functionality for dynamically loading large lists/data'
                    ]
                },
            ],
            technology: 'Javascript, Jquery, React, i18next, css, Materail Ui, php'
        }
    ],
    education: [
        {
            university_name: 'Belarusian State University of Informatics and Radioelectronics',
            university_city: 'Minsk',
            cooperation_time: {
                start: 'September 2017',
                end: 'June 2019'
            },
            degree: 'Master of Science'
        },
        {
            university_name: 'Belarusian State University of Informatics and Radioelectronics',
            university_city: 'Minsk',
            cooperation_time: {
                start: 'September 2013',
                end: 'June 2017'
            },
            degree: 'Information technology engineer'
        }
    ],
    skills: [
        'CSS3',
        'HTML5',
        'Git',
        'Javascript',
        'React',
        'Redux',
        'Webpack',
        'BEM'
    ],
    languages: {
        English: 'A2',
        Russian: 'Native speaker',
        Belarusian: 'Native speaker'
    }
};

export default data;