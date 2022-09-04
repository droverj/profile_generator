// survey.js

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const chalk = require('chalk');

const rl = readline.createInterface({ input, output });

rl.question('What is your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What is an activity you like doing? ', (verb) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc. ', (meal) => {
        rl.question('What is your favourite thing to eat for that meal? ', (food) => {
          rl.question('What are you afraid of? ', (fear) => {
            rl.question('Where do you want to take your next vacation? ', (vacation) => {
              // TODO: Log the answer in a database
              const love = "love";
              const toUser = `Thanks, ${name}! Here is your generated profile: `;
              console.log(`${chalk.inverse(toUser)}\n` + chalk.cyan(`Hi! My name is ${(name)}.\nI enjoy listening to ${music} while I am ${verb}.\nMy favourite meal is ${meal}. I just ${chalk.italic.red(love)} ${food}!\nI'd like to take my next vacation in ${vacation}.\nHopefully there aren't any ${fear} there!`));
              rl.close();
            });
          });
        });
      });
    });
  });
});