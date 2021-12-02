// SELECTORS
const cardBoxWebSites = document.querySelector('.websites .card-box')
const cardBoxReactApp = document.querySelector('.react-apps .card-box')
const cardBoxApp = document.querySelector('.apps .card-box')
const cardBoxWebWidgets = document.querySelector('.web .card-box')
const cardBoxGames = document.querySelector('.games .card-box')



// WEBSITES SECTION
const webSites = [
    {
        title: 'Ponksound-WP',
        githubUrl: 'https://ponksound.nusmi.bgw.rs/',
        demoPage: 'https://ponksound.nusmi.bgw.rs/'
    },
    {
        title: 'Ponksound',
        githubUrl: 'https://github.com/minnuss/ponksound',
        demoPage: 'https://www.ponksound.rs/'
    },
    {
        title: 'Technotool-Woocommerce',
        githubUrl: 'https://nusmi.bgw.rs/',
        demoPage: 'https://nusmi.bgw.rs/'
    },
    {
        title: 'Technotool',
        githubUrl: 'https://github.com/minnuss/TechnoTool',
        demoPage: 'https://technotool.rs/'
    },
    {
        title: 'Koliko-WP',
        githubUrl: 'https://github.com/minnuss/koliko',
        demoPage: 'https://koliko.rs/'
    },
    {
        title: 'Gym',
        githubUrl: 'https://github.com/minnuss/gym',
        demoPage: 'https://minnuss.github.io/gym/'
    },
    {
        title: 'DesignCourse challenge',
        githubUrl: 'https://github.com/minnuss/DesignCourse_challenge',
        demoPage: 'https://minnuss.github.io/DesignCourse_challenge/'
    },
    {
        title: 'Clockify Web Recreated',
        githubUrl: 'https://github.com/minnuss/Clockify-web-recreated',
        demoPage: 'https://minnuss.github.io/Clockify-web-recreated/'
    },
    // {
    //     title: 'Hybrid Development',
    //     githubUrl: 'https://github.com/minnuss/Hybrid-Development',
    //     demoPage: 'https://minnuss.github.io/Hybrid-Development/'
    // },
    // {
    //     title: 'Nature',
    //     githubUrl: 'https://github.com/minnuss/nature',
    //     demoPage: 'https://minnuss.github.io/nature/'
    // },
    // {
    //     title: 'myResume',
    //     githubUrl: 'https://github.com/minnuss/myResume',
    //     demoPage: 'https://minnuss.github.io/myResume/'
    // },
]

createAppCards(webSites, cardBoxWebSites, 'websites')

// REACT APPLICATION SECTION
const webReactApps = [
    {
        title: 'Weather App',
        githubUrl: 'https://github.com/minnuss/Weather-App-React/tree/master',
        demoPage: 'https://minnuss.github.io/Weather-App-React/'
    },
    {
        title: 'Infinite Image Gallery',
        githubUrl: 'https://github.com/minnuss/Infinite-Image-Gallery/tree/master',
        demoPage: 'https://minnuss.github.io/Infinite-Image-Gallery/'
    },
    //    {
    //         title: 'Rock, Paper, Scissors',
    //         githubUrl: 'https://github.com/minnuss/04-Rock-Paper-Scissors/tree/master',
    //         demoPage: 'https://minnuss.github.io/04-Rock-Paper-Scissors/'
    //     },
    //     {
    //         title: 'Random Quote Generator',
    //         githubUrl: 'https://github.com/minnuss/Random-Quote-Generator-REACT/blob/master/README.md',
    //         demoPage: 'https://minnuss.github.io/Random-Quote-Generator-REACT/'
    //     },
    //     {
    //         title: 'Image Carousel-Slide',
    //         githubUrl: 'https://github.com/minnuss/Image-Carousel---REACT/tree/master',
    //         demoPage: 'https://minnuss.github.io/Image-Carousel---REACT/'
    //     },
    //     {
    //         title: 'Image Carousel',
    //         githubUrl: 'https://github.com/minnuss/Image-Slider-Carousel-REACT/tree/master',
    //         demoPage: 'https://minnuss.github.io/Image-Slider-Carousel-REACT/'
    //     },
    //     {
    //         title: 'Countdown Timer',
    //         githubUrl: 'https://github.com/minnuss/01-Countdown-Timer',
    //         demoPage: 'https://minnuss.github.io/01-Countdown-Timer/'
    //     },
    //     {
    //         title: 'Tab Navigation',
    //         githubUrl: 'https://github.com/minnuss/03-Tab-Navigation/tree/master',
    //         demoPage: 'https://minnuss.github.io/03-Tab-Navigation/'
    //     },
    //     {
    //         title: 'Markdown Editor',
    //         githubUrl: 'https://github.com/minnuss/02-Markdown-Editor',
    //         demoPage: 'https://minnuss.github.io/02-Markdown-Editor/'
    //     },

]

createAppCards(webReactApps, cardBoxReactApp, 'react-apps')

// APPLICATION SECTION
const webApps = [
    {
        title: 'Covid Stats',
        githubUrl: 'https://github.com/minnuss/Serbia_Covid_stats',
        demoPage: 'https://minnuss.github.io/Serbia_Covid_stats/'
    },
    {
        title: 'Weather App',
        githubUrl: 'https://github.com/minnuss/Weather_App/tree/master',
        demoPage: 'https://minnuss.github.io/Weather_App/'
    },
    {
        title: 'Popular Movies',
        githubUrl: 'https://github.com/minnuss/17-movie-app',
        demoPage: 'https://minnuss.github.io/17-movie-app/'
    },
    {
        title: 'Exchange Rate Calculator',
        githubUrl: 'https://github.com/minnuss/Exchange_Rate_Calculator',
        demoPage: 'https://minnuss.github.io/Exchange_Rate_Calculator/'
    },
    // {
    //     title: 'Expense Tracker',
    //     githubUrl: 'https://github.com/minnuss/Expense_tracker',
    //     demoPage: 'https://minnuss.github.io/Expense_tracker/'
    // },
    // {
    //     title: 'Meal Finder',
    //     githubUrl: 'https://github.com/minnuss/Meal_finder',
    //     demoPage: 'https://minnuss.github.io/Meal_finder/'
    // },
    // {
    //     title: 'BMI_Calculator',
    //     githubUrl: 'https://github.com/minnuss/BMI_Calculator',
    //     demoPage: 'https://minnuss.github.io/BMI_Calculator/'
    // },
    // {
    //     title: 'Password Generator',
    //     githubUrl: 'https://github.com/minnuss/31-password-generator',
    //     demoPage: 'https://minnuss.github.io/31-password-generator/index.html'
    // },
    // {
    //     title: 'DOM Array Methods',
    //     githubUrl: 'https://github.com/minnuss/DOM_Array_Methods',
    //     demoPage: 'https://minnuss.github.io/DOM_Array_Methods/'
    // },
    // {
    //     title: 'Typing test',
    //     githubUrl: 'https://github.com/minnuss/Typing_test',
    //     demoPage: 'https://minnuss.github.io/Typing_test/index.html'
    // },
    // {
    //     title: 'Custom Video Player',
    //     githubUrl: 'https://github.com/minnuss/Custom_Video_Player',
    //     demoPage: 'https://minnuss.github.io/Custom_Video_Player/'
    // },
    // {
    //     title: 'Custom Music Player',
    //     githubUrl: 'https://github.com/minnuss/Music_player',
    //     demoPage: 'https://minnuss.github.io/Music_player/'
    // },
    // {
    //     title: 'Voice Text Reader',
    //     githubUrl: 'https://github.com/minnuss/Voice_Text_Reader',
    //     demoPage: 'https://minnuss.github.io/Voice_Text_Reader/'
    // },
    // {
    //     title: 'Movie seat booking app',
    //     githubUrl: 'https://github.com/minnuss/Movie_seat_booking_app',
    //     demoPage: 'https://minnuss.github.io/Movie_seat_booking_app/'
    // },
    // {
    //     title: 'Form Validator',
    //     githubUrl: 'https://github.com/minnuss/Form_Validator',
    //     demoPage: 'https://minnuss.github.io/Form_Validator/'
    // },
    // {
    //     title: 'Todo List',
    //     githubUrl: 'https://github.com/minnuss/49-todo_list',
    //     demoPage: 'https://minnuss.github.io/49-todo_list/'
    // },
    // {
    //     title: 'Todo List Basic',
    //     githubUrl: 'https://github.com/minnuss/ToDo_List_with_Local_Storage',
    //     demoPage: 'https://minnuss.github.io/ToDo_List_with_Local_Storage/'
    // },
    // {
    //     title: 'Notes App',
    //     githubUrl: 'https://github.com/minnuss/33-notes-app',
    //     demoPage: 'https://minnuss.github.io/33-notes-app/'
    // },
    // {
    //     title: 'Memory Cards',
    //     githubUrl: 'https://github.com/minnuss/Memory_Cards',
    //     demoPage: 'https://minnuss.github.io/Memory_Cards/'
    // },
    // {
    //     title: 'Quiz App',
    //     githubUrl: 'https://github.com/minnuss/46-quiz_app',
    //     demoPage: 'https://minnuss.github.io/46-quiz_app/'
    // },
    // {
    //     title: 'User Filter Input',
    //     githubUrl: 'https://github.com/minnuss/42-user_filter_input',
    //     demoPage: 'https://minnuss.github.io/42-user_filter_input/'
    // },
    // {
    //     title: 'Infinite Scroll Posts',
    //     githubUrl: 'https://github.com/minnuss/Infinite_Scroll_Posts',
    //     demoPage: 'https://minnuss.github.io/Infinite_Scroll_Posts/'
    // },
    // {
    //     title: 'Lyrics Search',
    //     githubUrl: 'https://github.com/minnuss/Lyrics_Search',
    //     demoPage: 'https://minnuss.github.io/Lyrics_Search/'
    // },
    // {
    //     title: 'Github Profiles Search',
    //     githubUrl: 'https://github.com/minnuss/28-github-profiles-search',
    //     demoPage: 'https://minnuss.github.io/28-github-profiles-search/'
    // },
    // {
    //     title: 'Pokedex',
    //     githubUrl: 'https://github.com/minnuss/37-pokedex',
    //     demoPage: 'https://minnuss.github.io/37-pokedex/'
    // },
    // {
    //     title: 'Hoverboard',
    //     githubUrl: 'https://github.com/minnuss/36-hoverboard',
    //     demoPage: 'https://minnuss.github.io/36-hoverboard/'
    // },
    // {
    //     title: 'Drawing App',
    //     githubUrl: 'https://github.com/minnuss/22-draw-app',
    //     demoPage: 'https://minnuss.github.io/22-draw-app/'
    // },
    // {
    //     title: 'Breath Meditation',
    //     githubUrl: 'https://github.com/minnuss/Breath_Meditation',
    //     demoPage: 'https://minnuss.github.io/Breath_Meditation/'
    // },
    // {
    //     title: 'Analog clock',
    //     githubUrl: 'https://github.com/minnuss/19-analog-clock',
    //     demoPage: 'https://minnuss.github.io/19-analog-clock/'
    // },
    // {
    //     title: 'Drink Water Goal',
    //     githubUrl: 'https://github.com/minnuss/16-drink-water-goal',
    //     demoPage: 'https://minnuss.github.io/16-drink-water-goal/'
    // },
    // {
    //     title: 'Random Choice Picker',
    //     githubUrl: 'https://github.com/minnuss/13-random-choice-picker',
    //     demoPage: 'https://minnuss.github.io/13-random-choice-picker/'
    // },
    // {
    //     title: 'Show KeyCodes',
    //     githubUrl: 'https://github.com/minnuss/11-show-keycodes',
    //     demoPage: 'https://minnuss.github.io/11-show-keycodes/'
    // },
    // {
    //     title: 'Dad Jokes',
    //     githubUrl: 'https://github.com/minnuss/10-dad-jokes',
    //     demoPage: 'https://minnuss.github.io/10-dad-jokes/'
    // },
    // {
    //     title: 'Advanced Calculator',
    //     githubUrl: 'https://github.com/minnuss/AdvancedCalculator',
    //     demoPage: 'https://minnuss.github.io/AdvancedCalculator/'
    // },
    // {
    //     title: 'Basic Calculator',
    //     githubUrl: 'https://github.com/minnuss/BasicCalculator',
    //     demoPage: 'https://minnuss.github.io/BasicCalculator/'
    // },
    // {
    //     title: 'Typing Test',
    //     githubUrl: 'https://github.com/minnuss/TypingTest',
    //     demoPage: 'https://minnuss.github.io/TypingTest/'
    // },
    // {
    //     title: 'Random Hex Color Generator',
    //     githubUrl: 'https://github.com/minnuss/RandomHexColorGenerator',
    //     demoPage: 'https://minnuss.github.io/RandomHexColorGenerator/'
    // },
    // {
    //     title: 'Roman Number Converter',
    //     githubUrl: 'https://github.com/minnuss/RomanNumberConverter',
    //     demoPage: 'https://minnuss.github.io/RomanNumberConverter/'
    // },
    // {
    //     title: 'New Year Countdown',
    //     githubUrl: 'https://github.com/minnuss/New_Year_Countdown',
    //     demoPage: 'https://minnuss.github.io/New_Year_Countdown/'
    // },
    // {
    //     title: 'Count Down Timer',
    //     githubUrl: 'https://github.com/minnuss/CountDownTimer',
    //     demoPage: 'https://minnuss.github.io/CountDownTimer/'
    // },
    // {
    //     title: 'Digital Clock',
    //     githubUrl: 'https://github.com/minnuss/Digital-Clock',
    //     demoPage: 'https://minnuss.github.io/Digital-Clock/'
    // },
]
createAppCards(webApps, cardBoxApp, 'apps')

// WEB APPS AND WIDGETS SECTION
const webWidgets = [
    {
        title: 'Random image feed',
        githubUrl: 'https://github.com/minnuss/48-random_image_feed',
        demoPage: 'https://minnuss.github.io/48-random_image_feed/'
    },
    {
        title: 'Background slider',
        githubUrl: 'https://github.com/minnuss/18-background-slider',
        demoPage: 'https://minnuss.github.io/18-background-slider/'
    },
    {
        title: 'Accordion',
        githubUrl: 'https://github.com/minnuss/Accordion',
        demoPage: 'https://minnuss.github.io/Accordion/'
    },
    {
        title: 'Hamb Menu 2',
        githubUrl: 'https://github.com/minnuss/HambMenu2',
        demoPage: 'https://minnuss.github.io/HambMenu2/'
    },

    // {
    //     title: 'Menu slider with modal',
    //     githubUrl: 'https://github.com/minnuss/Menu_slider_with_modal',
    //     demoPage: 'https://minnuss.github.io/Menu_slider_with_modal/'
    // },
    // {
    //     title: 'Testimonial switcher',
    //     githubUrl: 'https://github.com/minnuss/47-testimonial_switcher',
    //     demoPage: 'https://minnuss.github.io/47-testimonial_switcher/'
    // },
    // {
    //     title: 'Netflix navigation',
    //     githubUrl: 'https://github.com/minnuss/45-netflix_navigation',
    //     demoPage: 'https://minnuss.github.io/45-netflix_navigation/'
    // },
    // {
    //     title: 'Custom Range slider',
    //     githubUrl: 'https://github.com/minnuss/44-range_slider',
    //     demoPage: 'https://minnuss.github.io/44-range_slider/'
    // },
    // {
    //     title: 'Feedback UI Design',
    //     githubUrl: 'https://github.com/minnuss/43-feedback_UI_design',
    //     demoPage: 'https://minnuss.github.io/43-feedback_UI_design/'
    // },
    // {
    //     title: 'Verify Account',
    //     githubUrl: 'https://github.com/minnuss/41-verify-account-UI',
    //     demoPage: 'https://minnuss.github.io/41-verify-account-UI/'
    // },
    // {
    //     title: 'Checkbox fun',
    //     githubUrl: 'https://github.com/minnuss/32-checkbox-fun',
    //     demoPage: 'https://minnuss.github.io/32-checkbox-fun/'
    // },
    // {
    //     title: '3D Background Boxes',
    //     githubUrl: 'https://github.com/minnuss/40-3D-background-boxes',
    //     demoPage: 'https://minnuss.github.io/40-3D-background-boxes/'
    // },
    // {
    //     title: 'Password Strength Background',
    //     githubUrl: 'https://github.com/minnuss/39-password-strength-background',
    //     demoPage: 'https://minnuss.github.io/39-password-strength-background/'
    // },
    // {
    //     title: 'Mobile tab navigation',
    //     githubUrl: 'https://github.com/minnuss/38-mobile-tab-navigation',
    //     demoPage: 'https://minnuss.github.io/38-mobile-tab-navigation/'
    // },
    // {
    //     title: 'Image Slider',
    //     githubUrl: 'https://github.com/minnuss/Image_Slider',
    //     demoPage: 'https://minnuss.github.io/Image_Slider/'
    // },
    // {
    //     title: 'Image Carousel',
    //     githubUrl: 'https://github.com/minnuss/35-image-carousel',
    //     demoPage: 'https://minnuss.github.io/35-image-carousel/'
    // },
    // {
    //     title: 'Slider Vertical-Horizontal',
    //     githubUrl: 'https://github.com/minnuss/26-slider-vertical-horizontal',
    //     demoPage: 'https://minnuss.github.io/26-slider-vertical-horizontal/'
    // },
    // {
    //     title: 'Random Background Changer',
    //     githubUrl: 'https://github.com/minnuss/RandomBackgroundChanger',
    //     demoPage: 'https://minnuss.github.io/RandomBackgroundChanger/'
    // },
    // {
    //     title: 'Animated Countdown',
    //     githubUrl: 'https://github.com/minnuss/34-animated-countdown',
    //     demoPage: 'https://minnuss.github.io/34-animated-countdown/'
    // },
    // {
    //     title: 'Sticky Navbar',
    //     githubUrl: 'https://github.com/minnuss/25-sticky-navbar',
    //     demoPage: 'https://minnuss.github.io/25-sticky-navbar/'
    // },
    // {
    //     title: 'Love it',
    //     githubUrl: 'https://github.com/minnuss/29-love-it',
    //     demoPage: 'https://minnuss.github.io/29-love-it/'
    // },

    // {
    //     title: 'Content Placeholder',
    //     githubUrl: 'https://github.com/minnuss/24-content-placeholder',
    //     demoPage: 'https://minnuss.github.io/24-content-placeholder/'
    // },
    // {
    //     title: 'List drag and drop',
    //     githubUrl: 'https://github.com/minnuss/List_drag_-_drop',
    //     demoPage: 'https://minnuss.github.io/List_drag_-_drop/'
    // },
    // {
    //     title: 'Drag N Drop',
    //     githubUrl: 'https://github.com/minnuss/21-drag-n-drop',
    //     demoPage: 'https://minnuss.github.io/21-drag-n-drop/'
    // },
    // {
    //     title: 'Button With Ripple Effect',
    //     githubUrl: 'https://github.com/minnuss/20-button-with-ripple-effect',
    //     demoPage: 'https://minnuss.github.io/20-button-with-ripple-effect/'
    // },
    // {
    //     title: 'Incrementing Counter',
    //     githubUrl: 'https://github.com/minnuss/15-incrementing-counter',
    //     demoPage: 'https://minnuss.github.io/15-incrementing-counter/'
    // },
    // {
    //     title: 'Animated Hamb Navigaton',
    //     githubUrl: 'https://github.com/minnuss/14-animated-hamb-navigaton',
    //     demoPage: 'https://minnuss.github.io/14-animated-hamb-navigaton/'
    // },
    // {
    //     title: 'FAQ collapse boxes',
    //     githubUrl: 'https://github.com/minnuss/12-faq-collapse-boxes',
    //     demoPage: 'https://minnuss.github.io/12-faq-collapse-boxes/'
    // },
    // {
    //     title: 'Form wave effect',
    //     githubUrl: 'https://github.com/minnuss/7-form-wave-effect',
    //     demoPage: 'https://minnuss.github.io/7-form-wave-effect/'
    // },
    // {
    //     title: 'Split Landing Page',
    //     githubUrl: 'https://github.com/minnuss/8-split-landing-page',
    //     demoPage: 'https://minnuss.github.io/8-split-landing-page/'
    // },
    // {
    //     title: 'Animate on scroll',
    //     githubUrl: 'https://github.com/minnuss/6-animate-on-scroll',
    //     demoPage: 'https://minnuss.github.io/6-animate-on-scroll/'
    // },
    // {
    //     title: 'Blury Page Loading',
    //     githubUrl: 'https://github.com/minnuss/5-blury-page-loading',
    //     demoPage: 'https://minnuss.github.io/5-blury-page-loading/'
    // },
    // {
    //     title: 'Hidden Search Widget',
    //     githubUrl: 'https://github.com/minnuss/4-hidden-search-widget',
    //     demoPage: 'https://minnuss.github.io/4-hidden-search-widget/'
    // },
    // {
    //     title: 'Rotating Navigation',
    //     githubUrl: 'https://github.com/minnuss/3-rotating-navigation',
    //     demoPage: 'https://minnuss.github.io/3-rotating-navigation/'
    // },
    // {
    //     title: 'Expanding Cards',
    //     githubUrl: 'https://github.com/minnuss/1-expanding-cards',
    //     demoPage: 'https://minnuss.github.io/1-expanding-cards/'
    // },
    // {
    //     title: 'Progress Steps',
    //     githubUrl: 'https://github.com/minnuss/2-progress-steps-',
    //     demoPage: 'https://minnuss.github.io/2-progress-steps-/'
    // },
    // {
    //     title: 'Notification PopUp',
    //     githubUrl: 'https://github.com/minnuss/NotificationPopUp',
    //     demoPage: 'https://minnuss.github.io/NotificationPopUp/'
    // },
    // {
    //     title: 'Txt appear from under',
    //     githubUrl: 'https://github.com/minnuss/txt-appear-from-under',
    //     demoPage: 'https://minnuss.github.io/txt-appear-from-under/'
    // },
    // {
    //     title: 'Toast Notification 2',
    //     githubUrl: 'https://github.com/minnuss/27-toast-notification',
    //     demoPage: 'https://minnuss.github.io/27-toast-notification/'
    // },
    // {
    //     title: 'Toast Notification',
    //     githubUrl: 'https://github.com/minnuss/ToastNotification',
    //     demoPage: 'https://minnuss.github.io/ToastNotification/'
    // },

]

createAppCards(webWidgets, cardBoxWebWidgets, 'widgets')

// GAMES SECTION
const webGames = [
    {
        title: 'Hangman game',
        githubUrl: 'https://github.com/minnuss/Hangman_game',
        demoPage: 'https://minnuss.github.io/Hangman_game/'
    },
    {
        title: 'Break Brick game',
        githubUrl: 'https://github.com/minnuss/Break_Brick_game',
        demoPage: 'https://minnuss.github.io/Break_Brick_game/'
    },
    {
        title: 'Guess the number',
        githubUrl: 'https://github.com/minnuss/Guess_the_number',
        demoPage: 'https://minnuss.github.io/Guess_the_number/'
    },
    {
        title: 'Catch insect game',
        githubUrl: 'https://github.com/minnuss/50-catch_insect_game',
        demoPage: 'https://minnuss.github.io/50-catch_insect_game/'
    },
    {
        title: 'Dice Game',
        githubUrl: 'https://github.com/minnuss/DiceGame',
        demoPage: 'https://minnuss.github.io/DiceGame/'
    },
    {
        title: 'Coin Toss',
        githubUrl: 'https://github.com/minnuss/Coin-Toss',
        demoPage: 'https://minnuss.github.io/Coin-Toss/'
    },
    {
        title: 'Rock Paper Scissors',
        githubUrl: 'https://github.com/minnuss/RockPaperScissors',
        demoPage: 'https://minnuss.github.io/RockPaperScissors/'
    },
    {
        title: 'Tic Tac Toe 2',
        githubUrl: 'https://github.com/minnuss/TicTacToe2',
        demoPage: 'https://minnuss.github.io/TicTacToe2/'
    },
    {
        title: 'Arrow Swipe Game',
        githubUrl: 'https://github.com/minnuss/ArrowSwipeGame',
        demoPage: 'https://minnuss.github.io/ArrowSwipeGame/'
    },
    {
        title: 'Memory Game',
        githubUrl: 'https://github.com/minnuss/memory-game',
        demoPage: 'https://minnuss.github.io/memory-game/'
    },
]
// createAppCards(webGames, cardBoxGames, 'games')

// CREATING CARDS
function createAppCards(array, webSectionPage, imgUrl) {
    array.forEach(card => {
        const cardEl = document.createElement('div')
        cardEl.classList.add('card')
        cardEl.innerHTML = `
    <h2>${card.title}</h2>
    <img src="img/${imgUrl}/${card.title}.jpg" alt="${card.title}" srcset="">
    <div class="links">
        <a href="${card.githubUrl}" class="github">Github Code</a>
        <a href="${card.demoPage}" class="demo">Live Demo</a>
    </div>
    `
        webSectionPage.appendChild(cardEl)
    })
}