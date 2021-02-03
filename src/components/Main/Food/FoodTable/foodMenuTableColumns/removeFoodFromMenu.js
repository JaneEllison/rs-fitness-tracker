const removeFoodFromMenu = (key, profile, firebase) => {
  const timeKey = new Date(Date.now()).toLocaleDateString('ru-RU');
  firebase.updateProfile(({
    userMenus: {
      [timeKey]: [
        ...profile.userMenus[timeKey],
      ].filter((item) => item.id !== key),
    },
  }));
};

export default removeFoodFromMenu;
