# Null Islanders

![image](https://user-images.githubusercontent.com/6225122/46587643-4567cd00-ca5d-11e8-8fa2-dedb885ea7a8.png)

A hacker-news clone for the geogaphy nerds out there. Starter scooped from Wes Bos's [Learn Node Course](https://github.com/wesbos/Learn-Node). Made with ❤️ from Toronto. Work in Progress

## Setup

This app uses [knex](https://knexjs.org/) in order to run migrations for all the environments, and vanilla SQL for the rest. To get started, run the following:

```sh
 npm i && npm run build:dev
```

## TODO

There's a lot that still needs to be built before this thing can go live. This is more-or-less the entire list:

### Features

- [x] Logins
- [x] Log outs
- [x] Saving sessions
- [x] Create new posts
- [x] Comment on Posts
- [ ] Generate hosts functionality from URL
- [ ] Invite users mechanism
- [ ] Request invite mechanism
- [ ] Moderate Posts
- [ ] Flag Posts
- [ ] Upvote on Posts
- [ ] Comment on Comments
- [ ] Ban Users
- [ ] Message Users

#### Configuration

- [x] Build Knex Migrations for database models
- [ ] Build some seeds for an initial environment.
- [ ] Migrate from Postgres to MySQL 5.6 (to enable serverless)
- [ ] Move to GraphQL Server (yoga)
- [ ] Host DB on [serverless Aurora](https://aws.amazon.com/rds/aurora/serverless/)
- [ ] Build deploy pipeline with serverless to have app on Lambda

#### Maintenance

- [ ] API Integration tests
- [ ] Helper Unit tests

#### Documentation

- [x] How to build from scratch
- [ ] Deployment instructions
- [ ] Explainer of why HN > VBB for news aggregation

## Questions

Here are the answers to some questions you've never asked:

### Why Postgres

This is something that is a default for me. I do a lot of geo, so postgres is my databae, and it's a the same for others in the same community

### Why MySQL

This is something that's used in GoDaddy as well as AWS Serverless Aurora service. For a non-geo database, this appears to have the best bang for the buck.
