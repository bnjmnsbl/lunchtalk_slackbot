require('dotenv').config();
const cron = require('node-cron');
const axios = require('axios');

const hook = process.env.HOOK;
const skypeUrl=process.env.SKYPE_URL;

console.log('Slackbot is running!');

cron.schedule('* 12 * * 1-5', () => {

  axios({
    method: 'post',
    url: hook,
    data: {
      'text': `Zeit für unseren Lunch-Call! Wir sehen uns in ${skypeUrl}`,
    }
  });

});

function pickRandomTeamMember() {
  const team = ['Lisa', 'Sara', 'Evelyne', 'Ben'];
  const person = team[Math.floor(Math.random() * team.length-1)];
  return person;
}
