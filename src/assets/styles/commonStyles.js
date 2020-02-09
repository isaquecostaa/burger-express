export default {
  baseDIR : 'https://bx.isaquecosta.com.br/',
    fontfamily: 'Tahoma',
    colors: {
      //Theme Colors
      red: '#FF0000',
      blue: '#007bff',
      gold: '#FFD440',
      black: '#000000',
      white: '#FFFFFF',
      orange: '#FF6600',
  
      //Variants
      lightRed: '#CD6155',
      lightGreen: '#A4F157',
      lightGrey: '#E7E7E7',
      
      darkBlue: '#133d63',
      
      //Bootstrap
      info: '#007bff',
      danger: '#e3000f',
      success: '#2f8417',
      warning: '#f1b701',
      neutral: '#646464',
      transparent: 'transparent',
  
      facebook: '#29487d',
    },
    logos:{
        x: require('~/assets/imgs/logo_x.png'),
        full: require('~/assets/imgs/logo_full.png'),
        burger: require('~/assets/imgs/logo_burger.png'),
        background: require('~/assets/imgs/background.png'),
    },
    placeholders:{
        user: require('~/assets/imgs/user_placeholder.png'),
        categoria: require('~/assets/imgs/user_placeholder.png'),
    },
    ///////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////// CALENDAR ///////////////////////////////////  
    calendar: {
        backgroundColor: '#ff0000', // NOT WORKING
        calendarBackground: '#fff', // FUNDO DO CALENDARIO
        textSectionTitleColor: '#19308A', // DIAS DAS SEMANAS
        selectedDayBackgroundColor: '#ff0000', // NOT WORKING
        selectedDayTextColor: '#ff0000', // NOT WORKING
        todayTextColor: '#19308A', // COR DO DIA (TEXTO)
        dayTextColor: '#060606', // COR DOS OUTROS DIAS (TEXTO)
        textDisabledColor: '#d9e1e8', // COR DOS DIAS INATIVOS (TEXTO)
        dotColor: '#ff0000',
        selectedDotColor: '#ffffff',
        arrowColor: '#19308A', // COR DAS SETAS
        monthTextColor: '#19308A', // COR DO MES (TEXTO)
        textMonthFontWeight: 'bold',
        textDayFontSize: 15,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
    },
    calendarDayYellow: { color: '#f1b701', startingDay: true, endingDay: true, textColor: '#fff' },
    calendarDayGreen: { color: '#2f8417', startingDay: true, endingDay: true, textColor: '#fff' },
    calendarDayBlue: { color: '#19308A', startingDay: true, endingDay: true, textColor: '#fff' },
    calendarDayRed: { color: '#e3000f', startingDay: true, endingDay: true, textColor: '#fff' }
  }