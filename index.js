// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const findMatching = (driver, name) => {
return driver.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (driver, name) => {
    return driver.filter(driver => driver[0].toLowerCase() == name[0].toLowerCase())
    }

const matchName = (driver, name) => {
    return driver.filter(driver => driver.name === name)
}