const themes = [
  {
    name: 'night',
    colorPrimary: '#e2c842',
    backgroundPrimary: 'radial-gradient(at center bottom, rgb(40, 66, 97) 0%, rgb(9, 10, 15) 100%)',
  },
  {
    name: 'day',
    colorPrimary: '#ffffff',
    backgroundPrimary: 'linear-gradient(to bottom, #0f4867 0%,#3a93c1 51%,#9ad0ec 83%)',
  }
];


export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      color: theme.colorPrimary,
      background: theme.backgroundPrimary,
    };
  });
};
