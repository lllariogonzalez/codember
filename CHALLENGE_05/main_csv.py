import csv
import re

def read_csv(filepath):
    with open(filepath) as f:
        reader = csv.reader(f)
        return list(reader)

def is_valid_user(user):
    id, username, email, age, location = user
    return all([
        id.isalnum(),
        username.isalnum(),
        re.match(r"\w+@\w+\.\w+$", email),
        age == '' or age.isdigit(),
        location == '' or re.match(r"^[\w\s]+$", user[4])
    ])

def main():
    users = read_csv("database_attacked.csv")
    message = ''
    for(i, user) in enumerate(users):
        if(not is_valid_user(user)):
            message += user[1][0]
    print('Mensaje oculto:', message)

if __name__ == '__main__':
    main()
