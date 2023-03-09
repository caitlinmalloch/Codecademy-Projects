/* 
Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!': 
*/
const greetWorld() = 'Hello, World!' => {
  console.log(greetWorld());
}


/* 
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the 
boolean true if they are 18 years old or older, and the boolean false if they are not 
*/
const canIVote = age => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(canIVote(19)) 


/*
Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.
Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age.'
*/

const lifePhase = age => {
  if (age < 0 || age > 140) {
    return 'This is not a valid age';
  } else if (age < 4) {
    return 'baby';
  } else if (age <= 12) {
    return 'child';
  } else if (age <= 19) {
    return 'teen';
  } else if (age <= 64) {
    return 'adult';
  } else {
    return 'senior citizen';
  }
}


/* 
Write a function, finalGrade(). It should:
take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A' 
*/

const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}


/* 
Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a 
string in the following format: ‘rank lastName reporting for duty!’

reportingForDuty('Private', 'Fido') 
// Should return 'Private Fido reporting for duty!' 
*/

const reportingForDuty = (rank, lastName) => {
  console.log(`${rank} ${lastName} reporting for duty!`);
}

console.log(reportingForDuty('Private', 'Fido')) 


/* We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to 
doing what we want, but there’s something not quite right. Can you fix our code, please? */
const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1);
    let die2 = Math.floor(Math.random() * 6 + 1);
    return die1 + die2;
}


/* 
Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different 
planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?
Write a function, calculateWeight(). It should:
have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.' 
*/


const calculateWeight = (earthWeight, planet) => {
   switch (planet) {
    case 'Mercury':
      return earthWeight * .378;
    case 'Venus':
      return earthWeight * .907;
    case 'Mars':
      return earthWeight * .377;
    case 'Jupiter':
      return earthWeight * 2.36;
    case 'Saturn':
      return earthWeight * .916;
    default: 
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  } 
}


/* 
It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in 
any value and returns true if that value is truthy and false if that value is falsy.
*/

const truthyOrFalsy = () => {
  if (falsy) {
    return false;
  } else {
    return true;
  }
}


/* 
A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.
Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.
Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.
The JavaScript Math.ceil() function will come in handy. Check out the documentation here to figure out how it works.
*/
const numImaginaryFriends = totalFriends => Math.ceil(totalFriends * .25)


/*
Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function 
*/

const sillySentence = (adjective, verb, noun) => `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`


/* 
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:
If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'
*/

const howOld = (age, year) => {

    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
  
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}


/*
Given the percentage of DNA shared between two people, you can calculate their likely familial relationship.
We wrote a function, whatRelation(), that has one number parameter, percentSharedDNA, and returns the likely relationship. We expect the number passed in to always be an integer from 0 to 100, but for some reason it’s not working!
Here’s how it’s supposed to calculate the relationship:
100 should return 'You are likely identical twins.'
35-99 should return 'You are likely parent and child or full siblings.'
14-34 should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
6-13 should return 'You are likely 1st cousins.'
3-5 should return 'You are likely 2nd cousins.'
1-2 should return 'You are likely 3rd cousins.'
0 should return 'You are likely not related.'
Unfortunately, it’s not working how we want!
whatRelation(34) 
// Should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
// But instead it's returning 'You are likely 1st cousins.'
 whatRelation(3)
// Should return 'You are likely 2nd cousins.'
// But instead it's returning 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
Can you fix our code, please?
*/
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}
console.log(whatRelation(34))
console.log(whatRelation(3))


/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.
Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%
*/
const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * .05;
        case 'ok':
            return total * .15;
        case 'good':
            return total * .20;
        case 'excellent':
            return total * .30;
        default:
            return total * .18;
    }
}


/*
Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:
'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|'
*/
const toEmoticon = (meaning) => {
  switch(meaning) {
    case 'shrug': 
      return '|_{"}_|';
    case 'smiley face':
      return ':)';
    case 'frowny face': 
      return ':(';
    case 'winky face': 
      return ';)';
    case 'heart':
      return '<3';
    default:
      return '|_(* ~ *)_|';
  }
}
