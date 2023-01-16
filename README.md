🚧 Under Construction 🚧

# Tweeter Clone
Tweeter is a social media application where users can post and share their thoughts, feelings or just talk about something they are passionate about.

## How to run the App
1. Either fork or download the app and open the folder in the cli
2. Install all dependencies using the `npm install` command
3. Start the web server using the `npm run local` command. The app will be served at http://localhost:3000/
4. Go to http://localhost:3000/ in your browser and start tweeting!!

## How to Tweet
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

## Features
- Tweet
  - tweet gets sent to backend and gets posted to all users
  - tweets get validated by user accounts from firebase
  - tweet cannot be empty
  - each tweet has a timestamp and a user tag
  - images or emojis can be added to the tweet
  - tweets have dedicated page to view all tweet comments
  - tweet can be deleted by the owner/user of the tweet

- Liking a tweet
  - like gets sent to backend and gets posted to all users
  - likes are notified as filled red heart with a number of likes

- Unliking a tweet
  - unlike gets sent to backend and gets posted to all users
  - if tweet has no likes, the heart is outline red with no number

- Commenting on a tweet
  - tweets can be commented on by other users
  - comments can be liked and shared
  - comments can include images and emojis like a normal tweet
