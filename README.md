# doritobot

Discord server specifically built to control The Walking Dorito Project Zomboid server hosted on Bisect Hosting (but should work for anything!)

# Usage

**TODO -- this is a rough draft**

Set environment variables:
```
DISCORD_API_TOKEN=<generate an Oauth token for the bot in Discord developer console>
DISCORD_SERVER=<ID of the Discord server it's connecting to>
DISCORD_CHANNEL=<ID of the channel you want it to listen/respond in>
DISCORD_ADMIN_ROLE=<ID of the role required for people to interact with it>
BISECT_API_TOKEN=<generate an API token on Bisect Hosting>
BISECT_SERVER_ID=<ID of the server you want to control>
```

# Resources

* Discord Bot API Documentation
* [Bisect Hosting API Documentation](https://dashflo.net/docs/api/pterodactyl/v1/) -- *apparently this is a generic thing, but all of this documentation still applies by pointing it at https://games.bisecthosting.com/
* Check out the examples directory
