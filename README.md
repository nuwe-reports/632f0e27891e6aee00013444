<div align="center">

[![CodeFactor](https://www.codefactor.io/repository/github/sopadelletres01/talent-squad-frontend/badge)](https://www.codefactor.io/repository/github/sopadelletres01/talent-squad-frontend)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sopadelletres01_talent-squad-frontend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=sopadelletres01_talent-squad-frontend)
<h1 align="center">Talent Squad Frontend Challenge</h1>


</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-challenge">About The Challenge</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#local-installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

## Demo:

*Powered by* 	![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<a href="https://challenge-frontentd-rick-morty.vercel.app/">Rick and Morty Challenge</a>


## About The Challenge

This is a repository for the <a href="https://nuwe.io/dev/challenges/talent-squad-frontend-ii">Talent Squad Frontend Challenge</a>

The purpose of this challenge is to achieve the following user stories in SPA:

* Login: users have to authenticate themselves to use the application. The auth has to maintain the state every time the page loads.
* Show all characters (put an indicator to show if the character has been selected as a favorite)
* Shows a detailed view of each character once you click on a character in the list.
* Put a button to add the character to the favorites list. If the character is already in the favorites list, the button will serve to remove it from the favorites list.
* Add a 404 page

## Built With

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

It is recommended to use pnpm as a package manager for managing fast installations

* pnpm
  ```sh
  npm install -g pnpm
  ```
### Local Installation

1.Clone the repo
  ```sh
  git clone https://github.com/sopadelletres01/talent-squad-frontend
  ```
2.Install local dependencies
  ```
  pnpm i
  ```
3.Create a `.env.local` file and paste this content:
  ```
  VITE_CHARACTERS_URL=https://rickandmortyapi.com/api/character
  ```
4.Run it!
  ```
  pnpm vite
  ```

### Usage

The first you will encounter is the login page:

<img src="https://i.imgur.com/l04lPlM.png"/>

You will have to introduce a username(you can go with anything here) that will be displayed as a placeholder in the header through the whole app

Once you login, you will see the list of the characters:
<img src="https://i.imgur.com/pSha8UY.png"/>

From there, you can play with the interactions. Fav a character by clicking on the heart icon. Click on the character to see the details, etc.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

