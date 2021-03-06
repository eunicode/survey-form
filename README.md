# Survey Form

## Description

This [survey form](https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-projects/build-a-survey-form) project is part of freeCodeCamp's [*Responsive Web Design*](https://learn.freecodecamp.org/) curriculum. 

## Demo

Check out the live website here: https://eunicode.github.io/survey-form

## Tech Stack

- Gulp
- HTML
- CSS
- JavaScript

## Lessons Learned

- Responsive single-column layout with CSS Grid and CSS feature queries with @support (progressive enhancement)
- Client-side form validation with HTML5 form validation features.
- Improve form field accessibility with semantic HTML such as `label` and `fieldset`.
- Programmatically generate DOM elements and manipulate the DOM with the DOM API

## User Stories

It fulfills the following user stories:
- **User Story #1:** I can see a title with id="title" in H1 sized text.
- **User Story #2:** I can see a short explanation with id="description" in P sized text.
- **User Story #3:** I can see a form with id="survey-form".
- **User Story #4:** Inside the form element, I am required to enter my name in a field with id="name".
- **User Story #5:** Inside the form element, I am required to enter an email in a field with id="email".
- **User Story #6:** If I enter an email that is not formatted correctly, I will see an HTML5 validation error.
- **User Story #7:** Inside the form, I can enter a number in a field with id="number".
- **User Story #8:** If I enter non-numbers in the number input, I will see an HTML5 validation error.
- **User Story #9:** If I enter numbers outside the range of the number input, which are defined by the min and max attributes, I will see an HTML5 validation error.
- **User Story #10:** For the name, email, and number input fields inside the form I can see corresponding labels that describe the purpose of each field with the following ids: id="name-label", id="email-label", and id="number-label".
- **User Story #11:** For the name, email, and number input fields, I can see placeholder text that gives me a description or instructions for each field.
- **User Story #12:** Inside the form element, I can select an option from a dropdown that has a corresponding id="dropdown".
- **User Story #13:** Inside the form element, I can select a field from one or more groups of radio buttons. Each group should be grouped using the name attribute.
- **User Story #14:** Inside the form element, I can select several fields from a series of checkboxes, each of which must have a value attribute.
- **User Story #15:** Inside the form element, I am presented with a textarea at the end for additional comments.
- **User Story #16:** Inside the form element, I am presented with a button with id="submit" to submit all my inputs.

## Attribution

- [Normalize](https://necolas.github.io/normalize.css/) - Normalize.css makes "browsers render elements more consistently and in line with modern standards".


## Set up

Download/clone repo

Move to project folder

```
cd <file path>
```

Install dependencies

```
npm install
```

Run the default gulp command to start the live server

```
gulp
```

When finished developing, stop the server

```
Ctrl + C
```

To deploy to GitHub Pages, run npm script

```
npm run deploy
```

To audit/update npm packages

```
npm audit
npm audit fix

npm update
npm outdated
```
