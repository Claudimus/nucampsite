import CAMPSITES from ".appsharedCAMPSITES.js";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectRandomCampsite = () => {
  CAMPSITES[Math.floor(campsite.length * Math.random())];
};
