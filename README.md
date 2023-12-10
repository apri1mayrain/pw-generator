# Password Generator

This project contains a password generator created with JavaScript. The user interacts with several pop-ups to generate a random password.

## Features

<ul>
  <li>Easy-to-use and polished UI</li>
  <li>Ability to generate a strong, randomized password</li>
  <li>Utilizes all special characters, with the exception of whitespace, <a href="https://www.owasp.org/index.php/Password_special_characters">provided by the OWASP Foundation</a></li>
  <li>User input validation:</li>
  <ul>
      <li>Logs validated information</li>
      <li>Alerts user when validation fails and requires they start over</li></ul>
</ul>

## Deployment

GitHub Pages site: https://apri1mayrain.github.io/pw-generator

## Usage
You can click on the "Generate Password" button to start the process of generating a password. There will be one prompt and four confirmation pop-ups to decide the length and complexity of your new password. The prompt asks for the password length (must be 8-128 characters long) and the confirmations decide the use of lowercase letters, uppercase letters, numbers, and special characters. Finally, this information generates a password using a random number generation algorithm.

Tip: the more options confirmed, the stronger your password will be. [For more information on how to choose and protect your password, please read this brief article published by the Cybersecurity and Infructure Security Agency.](https://www.cisa.gov/news-events/news/choosing-and-protecting-passwords)

## Demo

- Preview of password generator: 

 ![Password generator site](/assets/images/pwgen.png)

- Video demo of input validation failure:

[![Input validation failure](/assets/images/inputfail.png)](https://drive.google.com/file/d/1mPW1BBle27D1GYRLDu6hgFKVPsr3WITk/view)

- Video demo of successfully generated password:

[![Sucessfully generated password](/assets/images/inputsuccess.png)](https://drive.google.com/file/d/1137-befQzefGWxG_3-Z5TczorK4IXWcm/view)

- Video demo of page responsiveness:

[![Page responsiveness](/assets/images/responsiveness.png)](https://drive.google.com/file/d/12dSFN9ZyORp15_8P4ZRfIT82b-fhZraa/view)


## Credits

Source code can be found at: https://github.com/coding-boot-camp/friendly-parakeet

## License

MIT License - Copyright © 2023 apri1mayrain