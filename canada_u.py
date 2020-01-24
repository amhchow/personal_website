import praw

# Create our Reddit client (lets us communicate with Reddit)
reddit = praw.Reddit(client_id='<client id = 5ddRUp9BQfLIJQ>',
                     client_secret='<secret = Fx8svtRA7TLJSP9heO_jxxapBD0',
                     user_agent='my user agent')

# Go through the first 10 hot posts in the uwaterloo subreddit
for submission in reddit.subreddit('uwaterloo').hot(limit=10):
    print(submission.title)