import mysql.connector  # Import the mysql.connector module

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password=""
)

print(mydb)
