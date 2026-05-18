1. Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?

Whitelisting specific IPs ensures only your known servers can reach the database. Allowing 0.0.0.0/0 means anyone on the internet can attempt to connect, exposing you to brute-force attacks and potential data breaches.


2. What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?

It loads variables from a .env file into process.env so secrets like passwords never end up in your code or version control. In production you'd use the platform's built-in solution instead — Heroku Config Vars, AWS Secrets Manager, or Railway/Render's environment variable dashboards.


3. If your application failed to connect, what are the first few steps you would take to debug the issue?

Check the error message — bad auth means wrong credentials, ETIMEOUT means a network/firewall issue
Make sure .env has the real password with no <password> placeholder left in
Check Atlas Network Access — is your IP listed and Active?
Check Atlas Database Access — does the user exist with read/write permissions?
Make sure the cluster isn't paused in the Atlas dashboard