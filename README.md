<p align="center">
  <img src="https://user-images.githubusercontent.com/108652931/212784099-d20d93e0-c13f-44a8-b5fb-dc485de5755c.png"
</p>

<br/>
<br/>

### Production
app is hosted by vercel: https://twitter-clone-jackjuson.vercel.app/


# Tweeter Clone
Tweeter is a social media application where users can post and share their thoughts, feelings or just talk about something they are passionate about.

## Key Features
- Tweet 🔥
  - tweet gets sent to backend and gets posted to all users
  - tweets get validated by user accounts from firebase ✅
  - tweet cannot be empty
  - each tweet has a timestamp and a user tag
  - images or emojis can be added to the tweet
  - tweets have dedicated page to view all tweet comments 🤝
  - tweet can be deleted by the owner/user of the tweet

- Liking a tweet ❤️
  - like gets sent to backend and gets posted to all users
  - likes are notified as filled red heart with a number of likes

- Unliking a tweet 😄
  - unlike gets sent to backend and gets posted to all users
  - if tweet has no likes, the heart is outline red with no number

- Commenting on a tweet 💬
  - tweets can be commented on by other users
  - comments can be liked and shared 🎉
  - comments can include images and emojis like a normal tweet


## How To Use
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/JackJUson/twitter-clone.git

# Go into the repository
$ cd twitter-clone

# Install dependencies
$ npm install

# Run the app
$ npm start
```
> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## How To Tweet
1. Click inside the text box containing the placeholder "What's happening?" at the top of the page.
2. Type out a tweet.
3. Add an image or an emoji using the button below the text box.
4. Submit the tweet.

## User Stories
- A user can tweet their thoughts
- A user can like other users tweets
- A user can share other users tweets
- A user can tweet images or emojis to be expressive
- A user can comment on tweets

## Future Features
- Live reload for all users when 1 user tweets
- Notification system of tweets and comments
- Follow tweet or users

## Credits
This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [RecoilJs](https://recoiljs.org/)
- [ReactJs](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Next Authentication](https://next-auth.js.org/)
- Emojis are taken from [here](https://emojiguide.com/)

## What the app looks like
![287446909-twitter](https://user-images.githubusercontent.com/108652931/212782960-0f742399-ceff-4d1a-992f-53430013e8f5.PNG)

