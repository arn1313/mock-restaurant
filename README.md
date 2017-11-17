# Restaurant Website Mockup
This is a basic restaurant website built for practice and potential portfolio work.

## Structure of the App / Some ideas
I think we do it like this: Caleb suggested that if we want to build something that is truly set it and forget it, we should give them at least some way to edit the site after we take off. Having done Wordpress sites for people in the past, I really agree with him on that one. 

Front End in React and Redux - we'll use the Redux for state management of a user. We'll just have one user (aka, restaurant owner/admin) who can then have access to put in extra items to the menu or things like that. 
So maybe also a tiny backend to store our db of menu items/users? I'm thinking just like S3 free tier here with mLabs
It is kind of overkill for a tiny website, but I also feel like let's use all the things we've learned? 

I am thinking: 

Home page - photos of the interior of the place, perhaps one of those revolving hero image type deals? I haven't made an image carousel yet but would like to give it a go, sign in  button for our one admin user
About Us - text could be very generic
Contact
Menu - Populates from the db
Some kind of online ordering? I know that you can order through Yelp which is weird. We should also ask whether or not you can order by phone or Eat24 or similar services. I used to work at a thai place that got faxes from Eat24, so that's something to consider too. 
If we have the admin functionality: we need a sign up (hidden to the ordinary user) and sign in (visible on the front end) 

So from a components perspective: 
1. Home Container
2. Navbar and maybe a footer? 
3. Sign in
4. Sign up (but we could not even publish this page, just do it for our own purposes once and then depublish it once the db is populated)
5. Menu container
6. About container
7. Contact container


## Purpose of App

## Team Members
Aaron & Michelle
