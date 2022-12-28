import logo from './extensions/logo.jpg'

const config = {
  translations:{
    en: {
      'app.components.LeftMenu.navbrand.title': 'BPHN',
      "app.components.LeftMenu.navbrand.workplace": "Content Center",
      "Auth.form.welcome.title": "BPHN Content Center",
      "Auth.form.welcome.subtitle": "Log in to your provided account."
    }
  },
  auth:{
    logo: logo,
  },
  menu:{
    logo:logo,
  },
  locales: [
    "en",
    "id"
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
